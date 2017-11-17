<?php

namespace App\Http\Controllers;

use App\Archive;
use App\Reference as Ref;
use Illuminate\Http\Request;

class ArchiveController extends Controller
{
    public static function store(Ref $reference)
    {
        $archive = new Archive();
        $archive->urgency = $reference->urgency;
        $archive->type = $reference->type;
        $archive->referee_id = $reference->referee_id;
        $archive->save();
        return $archive;
    }
}
