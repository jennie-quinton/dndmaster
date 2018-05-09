@extends('layouts.app')

@section('content')
<div class="content">
    <div class="content__form">
        <h1>{{ __('Reset Password') }}</h1>
        <form class="form" method="POST" action="{{ route('password.request') }}">
            @csrf
            <input type="hidden" name="token" value="{{ $token }}">
            <div class="form__row">
                <label class="form__label" for="email">{{ __('E-Mail Address') }}</label>
                <input class="form__input {{ $errors->has('email') ? 'form__input--error' : '' }}" id="email" type="email" name="email" value="{{ $email ?? old('email') }}" required autofocus>

                @if ($errors->has('email'))
                    <div class="form__error">
                        {{ $errors->first('email') }}
                    </div>
                @endif
            </div>

            <div class="form__row">
                <label class="form__label" for="password">{{ __('Password') }}</label>
                <input class="form__input {{ $errors->has('password') ? 'form__input--error' : '' }}" id="password" type="password" name="password" required>
                @if ($errors->has('password'))
                    <div class="form__error">
                        {{ $errors->first('password') }}
                    </div>
                @endif
            </div>

            <div class="form__row">
                <label class="form__label" for="password-confirm">{{ __('Confirm Password') }}</label>
                <input class="form__input" id="password-confirm" type="password"  name="password_confirmation" required>
            </div>

            <div class="form__submit">
                <button class="form__submit--button" type="submit" >
                    {{ __('Reset Password') }}
                </button>
            </div>
        </form>
    </div>
</div>
@endsection
