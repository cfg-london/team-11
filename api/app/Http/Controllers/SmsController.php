<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Referee;

require 'class-Clockwork.php';

class SmsController extends Controller
{
    public function sendAll(Request $request) {
        $API_KEY = "9bb7ecda7c0487520a5f1f5ca7c8c6f26c018fdc";
        $referees = Referee::all();
        $message = $request->message;
        foreach ($referees as $referee) {
            $url = "https://api.clockworksms.com/http/send.aspx?";
            $phone = $referee->phone;
            $text = str_replace(" ", "+", $message);
            $xd = $url . "key=" . $API_KEY . "&to=" . $phone .  "&content=" . $text;
            //dd($xd);
            $json = json_decode(file_get_contents($xd), true);
        }
    }
}
