<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Archive extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'urgency','type','referee_id','notes'
    ];

    protected $primaryKey = 'reference_id';

    /**
     * Get the references
     */
    public function referee()
    {
        return $this->belongsTo('App\Referee', 'referee_id');
    }
}
