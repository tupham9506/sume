<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Ssr\Engines\V8;

class HomeController extends Controller
{
    function __construct()
    {
        app()->singleton(V8::class, function () {
            return new V8(new \V8Js());
        });
    }
    /**
     * Get home view
     * @return [type] [description]
     */
    public function getHome()
    {
        return view('home.index');
    }
}
