@extends('layouts.app')

@section('content')
<div class="content">
    <div class="content__form">
        <h1>{{ __('Reset Password') }}</h1>
        @if (session('status'))
            <div>
                {{ session('status') }}
            </div>
        @endif

        <form class="form" method="POST" action="{{ route('password.email') }}">
            @csrf
            <div class="form__row">
                <label class="form__label" for="email" >{{ __('E-Mail Address') }}</label>
                <input class="form__input {{ $errors->has('email') ? 'form__input--error' : '' }}"id="email" type="email" name="email" value="{{ old('email') }}" required>

                @if ($errors->has('email'))
                    <div class="form__error">
                        {{ $errors->first('email') }}
                    </div>
                @endif
            </div>

            <div class="form__submit">
                <button class="form__submit--button" type="submit" >
                    {{ __('Send Password Reset Link') }}
                </button>
            </div>
        </form>
    </div>
</div>
@endsection
