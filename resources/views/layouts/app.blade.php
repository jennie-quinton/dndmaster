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

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
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
                            <a class="nav__item--link" onclick="this.expandMenu()"> Menu </a>
                        </div>
                        <div id="nav-drop-down" class="nav__dropdown--container">
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
                    <ul class="nav">
                        @guest
                            <a class="nav__item--link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            <a class="nav__item--link" href="{{ route('register') }}">{{ __('Register') }}</a>
                        @else
                            <li class="nav__dropdown--container">
                                <a class="nav__dropdown--link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div>
                                    <a class="nav__dropdown--link" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </div>
        @yield('content')
    </div>
    <script>
    expandMenu(){
        document.getElementById('nav-drop-down').classList.toggle("nav__dropdown--show")
    }
    </script>
</body>
</html>
