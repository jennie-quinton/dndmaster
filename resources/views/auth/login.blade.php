@extends('layouts.app')

@section('content')
<div class="content">
    <div class="content__form">
        <h2>{{ __('Login') }}</h2>
        <form class="form" method="POST" action="{{ route('login') }}">
            @csrf

            <div class="form__row">
                <label class="form__row--label" for="email" >{{ __('E-Mail Address') }}</label>
                <input class="form__row--input" id="email" type="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                @if ($errors->has('email'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form__row">
                <label class="form__row--label" for="password" >{{ __('Password') }}</label>
                <input class="form__row--input" id="password" type="password" class="{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                @if ($errors->has('password'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form__row">
                <label class="form__row--label">
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
            </div>
        </form>
    </div>
</div>
@endsection
