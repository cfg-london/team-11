<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Referee;

class RefereeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return json_encode(Referee::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $referee = new Referee();
        $referee->name = $request->name;
        $referee->phone = $request->phone;
        $referee->profession = $request->profession ;
        $referee->save();

        $API_KEY = "9bb7ecda7c0487520a5f1f5ca7c8c6f26c018fdc";
        $message = "Welcome to LinkAge+! We have stored your referral successfully. Thank you for looking out for your community <3";
        $url = "https://api.clockworksms.com/http/send.aspx?";
        $phone = $referee->phone;
        $text = str_replace(" ", "+", $message);
        $xd = $url . "key=" . $API_KEY . "&to=" . $phone .  "&content=" . $text;
        $json = json_decode(file_get_contents($xd), true);

        return json_encode($referee);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Referee $referee)
    {
        return json_encode($referee);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Referee $referee)
    {
        $referee->fill(['name' => $request->name, 'phone' => $referee->phone,'profession' => $request->profession]);
        $referee->save();
        return json_encode($referee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Referee $referee)
    {

    }
}
