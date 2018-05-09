@extends('layouts.app')

@section('content')
<div class="content">
    <div class="content__form">
        <h2 >{{ __('Register') }}</h2>
        <form class="form" method="POST" action="{{ route('register') }}">
            @csrf
            <div class="form__row">
                <label class="form__row--label" for="name" >{{ __('Name') }}</label>
                <input class="form__row--input" id="name" type="text" class="{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                @if ($errors->has('name'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form__row">
                <label class="form__row--label" for="email" >{{ __('E-Mail Address') }}</label>
                <input class="form__row--input" id="email" type="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

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
                <label class="form__row--label" for="password-confirm" >{{ __('Confirm Password') }}</label>
                <input class="form__row--input" id="password-confirm" type="password" name="password_confirmation" required>
            </div>

            <div class="form__submit">
                <button class="form__submit--button" type="submit" >
                    {{ __('Register') }}
                </button>
            </div>
        </form>

    </div>
</div>
@endsection
