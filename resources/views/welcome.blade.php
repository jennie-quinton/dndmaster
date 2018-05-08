<!-- <!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>DND Master</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="logo-thanks" content="http://logomakr.com">
    </head>
    <body>
        <div id="root"></div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html> -->

@extends('layouts.app')

@section('content')
    <div id="root"></div>
    <script src="{{mix('js/app.js')}}" ></script>
@endsection