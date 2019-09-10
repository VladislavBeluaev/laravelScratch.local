export class TestPromises {
    constructor(a) {
    }

    run() {
        console.log('Request data...');
        //this._emulateBackendResponse();
        this.promiseBackendResponse();

    }

    _emulateBackendResponse() {
        setTimeout(() => {
            console.log('Preparing data...');
            const backEndData = {
                server: "aws",
                port: '1092',
                status: 'working'
            };
            setTimeout(() => {
                backEndData.modified = true;
                console.log('Getting data', backEndData);
            }, 2000);
        }, 2000);
    }

    promiseBackendResponse() {
        let backPromise = new Promise(function (resolve, reject) {
            let isConnected = Math.random();
            const backEndData = {
                server: "aws",
                port: '1092',
                status: 'working'
            };
            console.log('Preparing answer...');
            setTimeout(()=>{
                if (isConnected > 0.5){
                    console.log('Preparing data...');
                    resolve(backEndData);
                }
                else{
                    console.log('Connection error!');
                    backEndData.status = 'closed';
                    reject(backEndData);
                }
            },2000);
        });
        let publishedConnectionResult = function(result){
          return Promise.resolve('Connected complete');
        };
        backPromise
            .then((clientData)=>{
            setTimeout(()=>{
                console.log('Server answer',clientData);
            },2000);
        }).then(publishedConnectionResult)
            .catch((errorClientData)=>{
            console.log('Server answer',errorClientData);
        });
    }
}
