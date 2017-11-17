<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\User;

class UserController extends Controller
{
    public $successStatus = 200;

    public function login() {
        if (Auth::attempt(['user_name' => request('user_name'), 'password' => request('password')])) {
            return response()->json([
                'status_code' => $successStatus
            ]);
        } else {
            return response()->json([
                'status_code' => 404
            ]);
        }
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'user_name' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status_code' => 401
            ]);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        return response()->json([
            'status_code' => 200
        ]);
    }
}
