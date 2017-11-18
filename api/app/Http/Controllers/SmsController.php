<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Referee;
use Illuminate\Support\Facades\Input;

require 'class-Clockwork.php';

class SmsController extends Controller
{
    public function sendAll() {
        $API_KEY = "9bb7ecda7c0487520a5f1f5ca7c8c6f26c018fdc";
        $referees = Referee::all();
        $input = Input::only('message');
        $message = $input['message'];
        foreach ($referees as $referee) {
            $url = "https://api.clockworksms.com/http/send.aspx?";
            $phone = $referee->phone;
            $text = str_replace(" ", "+", $message);
            $xd = $url . "key=" . $API_KEY . "&to=" . $phone .  "&content=" . $text;
            //dd($xd);
            $json = json_decode(file_get_contents($xd), true);
            return json_encode($json);
        }
    }
}
