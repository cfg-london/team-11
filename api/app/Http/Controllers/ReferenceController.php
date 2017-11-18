<?php

namespace App\Http\Controllers;

use App\Archive;
use App\Http\Controllers\ArchiveController as ArchiveController;
use Illuminate\Http\Request;
use App\Reference;

class ReferenceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return json_encode(Reference::all());
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
        $reference = new Reference();
        $reference->name = $request->name;
        $reference->phone = $request->phone;
        $reference->address = $request->address;
        $reference->urgency = $request->urgency;
        $reference->type = $request->type;
        $reference->referee_id = $request->referee_id;
        $reference->notes = $request->notes;
        $reference->save();
        return json_encode($reference);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Reference $reference)
    {
        return json_encode($reference);
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
    public function update(Request $request, Reference $reference)
    {
        $reference->fill([
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
            'urgency' => $request->urgency,
            'type' => $request->type,
            'referee_id' => $request->referee_id,
            'notes' => $request->notes,
        ]);
        $reference->save();
        return json_encode($reference);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reference $reference)
    {
        // Add to archives before you delete!!!!!!!!!!!!!!!!!!!!!!!!
        $archive = ArchiveController::store($reference);

        $reference->delete();
        return json_encode($archive);
    }
}
