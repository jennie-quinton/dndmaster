@extends('layouts.app')

@section('content')
<div class="content">
    <div class="content__form">
        <h1>{{ __('Login') }}</h1>
        <form class="form" method="POST" action="{{ route('login') }}">
            @csrf

            <div class="form__row">
                <label class="form__label" for="email" >{{ __('E-Mail Address') }}</label>
                <input class="form__input {{ $errors->has('email') ? 'form__input--error' : '' }}" id="email" type="email" name="email" value="{{ old('email') }}" required autofocus>

                @if ($errors->has('email'))
                    <div class="form__error">
                        {{ $errors->first('email') }}
                    </div>
                @endif
            </div>

            <div class="form__row">
                <label class="form__label" for="password" >{{ __('Password') }}</label>
                <input class="form__input {{ $errors->has('password') ? 'form__input--error' : '' }}" id="password" type="password" name="password" required>

                @if ($errors->has('password'))
                    <div class="form__error">
                        {{ $errors->first('password') }}
                    </div>
                @endif
            </div>

            <div class="form__row">
                <label class="form__label">
                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                </label>
            </div>

            <div class="form__submit">
                <button class="form__submit--button" type="submit" >
                    {{ __('Login') }}
                </button>
            </div>
            <div class="form__row">
                <a class="form__link" href="{{ route('password.request') }}">
                    {{ __('Forgot Your Password?') }}
                </a>
                <a class="form__link" href="{{ route('register') }}">
                    Create an account
                </a>
            </div>
        </form>
    </div>
</div>
@endsection
