<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 29.09.2019
 * Time: 21:21
 */

namespace App\Http\Controllers\Ajax;


use App\Interfaces\Ajax;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class AjaxNewsController implements Ajax
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    function create()
    {
        dd($this->request->getContent());
        $importing_news = $this->request->getContent();
    }

    function read()
    {
        // TODO: Implement read() method.
    }

    function update(Model $model)
    {
        // TODO: Implement update() method.
    }

    function destroy(Model $model)
    {
        // TODO: Implement destroy() method.
    }
    protected $request;
}