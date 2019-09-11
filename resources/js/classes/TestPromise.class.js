export class TestPromises {
    constructor(a) {
    }

    run() {
        console.log('Request data...');
        //this._emulateBackendResponse();
        //this.promiseBackendResponse();
        //his._emulatePromise();
        //this._delayPromise(3000);
        this._chainPromises();

    }
    _chainPromises(){
        let chain = new Promise(resolve => {
           setTimeout(resolve,1000,1);
        });
        let foo1 = chain.then(result=>{
            console.log(result);
            return result*2;
        });
        let foo2 = foo1.then(res=>{
            console.log(res);
            return res*2;
        });
        let foo3 = foo2.then(foo2=>{
            console.log(foo2);
        });
    }
    _delayPromise(ms){

        let delPromise = function (ms) {
            return new Promise(resolve => {
                setTimeout(resolve,ms,"done");
            });
        };
        delPromise(3000).then((result)=>alert(`выполнилось через 3 секунды c результатом ${result}`));
    }
    _emulatePromise(){
        let getPhone = new Promise((resolve, reject)=>{
            let hasMoney = confirm("Do you have money?");
            if(hasMoney===true){
                resolve({
                    phoneMaker:'Iphone',
                    phoneModel:'8 plus',
                    price:'800$',
                    color:'space gray',
                    toString:function () {
                        return `I have ${this.phoneMaker} ${this.phoneModel} in ${this.color} color.`;
                    }
                });
            }
            else{

                reject(new Error('You don\'t have enough money to buy this phone' ))
            }
        });
        let havePhone = function (phone) {
            if($.isPlainObject(phone))
            {
                console.log(phone.toString());
                return true;
            }
            if($.type(phone)==='string'){
                console.log(phone);
            }
            return true;
        };
        let notHasPhone = function (error) {
            if(error instanceof Error){
                console.log(error.message);
            }
        };
        let notifyFriends = function (phone) {
           let outPut = `I buy new ${phone.phoneMaker}!!`;
            return Promise.resolve(outPut);
        };
        function buyPhone() {
            getPhone.
             then(notifyFriends).
            then(havePhone).
                catch(notHasPhone);
        }
        buyPhone();
    }

    /*_emulateBackendResponse() {
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
    }*/

    /*promiseBackendResponse() {
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
        let publishedConnectionResult = function(backEndData){
          return Promise.resolve('Connected complete'+` with status ${backEndData.status}`);
        };
        backPromise
            .then(publishedConnectionResult)
            .then((clientData)=>{
            setTimeout(()=>{
                console.log('Server answer',clientData);
            },2000);
        }).catch((errorClientData)=>{
            console.log('Server answer',errorClientData);
        });
    }*/
}
