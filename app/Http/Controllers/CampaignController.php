<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CampaignController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return json_encode(['test'=> true]);
    }
}
