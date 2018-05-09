@extends('layouts.app')

@section('content')
<div class="content">
    <div class="content__form">
        <h2>{{ __('Reset Password') }}</h2>
        <form class="form" method="POST" action="{{ route('password.request') }}">
            @csrf
            <input type="hidden" name="token" value="{{ $token }}">
            <div class="form__row">
                <label class="form__row--label" for="email">{{ __('E-Mail Address') }}</label>
                <input class="form__row--input" id="email" type="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $email ?? old('email') }}" required autofocus>

                @if ($errors->has('email'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form__row">
                <label class="form__row--label" for="password">{{ __('Password') }}</label>
                <input class="form__row--input" id="password" type="password" class="{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                @if ($errors->has('password'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form__row">
                <label class="form__row--label" for="password-confirm">{{ __('Confirm Password') }}</label>
                <input class="form__row--input" id="password-confirm" type="password"  name="password_confirmation" required>
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
