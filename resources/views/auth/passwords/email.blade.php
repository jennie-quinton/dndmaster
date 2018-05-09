@extends('layouts.app')

@section('content')
<div class="content">
    <div class="content__form">
        <h2 >{{ __('Reset Password') }}</h2>
        @if (session('status'))
            <div>
                {{ session('status') }}
            </div>
        @endif

        <form class="form" method="POST" action="{{ route('password.email') }}">
            @csrf
            <div class="form__row">
                <label class="form__row--label" for="email" >{{ __('E-Mail Address') }}</label>
                <input class="form__row--input"id="email" type="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                @if ($errors->has('email'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
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
