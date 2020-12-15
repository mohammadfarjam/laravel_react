<?php

use App\Http\Controllers\Backend\RegisterController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Auth::routes();

Route::post('/reg', [RegisterController::class, 'store']);

Route::view('/{path?}', 'Frontend.Main')
     ->where('path', '.*')
     ->name('react');