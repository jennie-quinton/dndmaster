<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>DND Master</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />    
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <meta name="logo-thanks" content="http://logomakr.com">
</head>
<body>
    <div id="app">
        <div class="header">
            <div class="header__content">
                <img class="header__image" src="{{ asset('images/Logo_2.png')}}" alt='logo'></img>
                <div class="header__content--left">
                    <ul class="nav hidden__mobile">
                        <a id="home-link" class="nav__item--link" href="/">
                            Home
                        </a>
                        <a id="plan-link" class="nav__item--link" href="/plan">
                            Plan
                        </a>
                        <a id="play-link" class="nav__item--link" href="/play">
                            Play
                        </a>
                    </ul>
                    <ul class="nav nav__dropdown hidden__tablet hidden__desktop">
                        <div class="nav__item">
                            <a class="nav__item--link" onclick="document.getElementById('nav-dropdown').classList.toggle('nav__dropdown--show')"> Menu </a>
                        </div>
                        <div id="nav-dropdown" class="nav__dropdown--container">
                            <a class="nav__dropdown--link" href="/">
                                Home
                            </a>
                            <a class="nav__dropdown--link" href="/plan">
                                Plan
                            </a>
                            <a class="nav__dropdown--link" href="/play">
                                Play
                            </a>
                        </div>
                    </ul>
                </div>
                <div class="header__content--right">
                    @guest
                        <ul class="nav">
                            <a class="nav__item--link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            <a class="nav__item--link" href="{{ route('register') }}">{{ __('Register') }}</a>
                        </ul>
                    @else
                        <ul class="nav nav__dropdown">
                            <div class="nav__item">
                                <a class="nav__item--link" onclick="document.getElementById('user-dropdown').classList.toggle('nav__dropdown--show')">
                                    <i class="fa fa-user"></i> {{ Auth::user()->name }}
                                </a>
                            </div>
                            <div id="user-dropdown" class="nav__dropdown--container nav__dropdown--right">
                                <a class="nav__dropdown--link" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </ul>
                    @endguest
                </div>
            </div>
        </div>
        @yield('content')
    </div>
</body>
</html>
