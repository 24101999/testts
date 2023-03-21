<?php

use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/api', [UsersController::class, 'api']);
Route::post('/api', [UsersController::class, 'api']);
Route::get('/get', [UsersController::class, 'get']);
Route::get('/insert', [UsersController::class, 'insert']);
Route::post('/insert', [UsersController::class, 'insert']);
Route::put('/update/{id?}', [UsersController::class, 'update']);
Route::delete('/delete/{id?}', [UsersController::class, 'delete']);
