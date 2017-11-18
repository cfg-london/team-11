<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Referee extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','phone','profession'
    ];

    protected $primaryKey = 'referee_id';

    /**
     * Get the references
     */
    public function references()
    {
        return $this->hasMany('App\Reference', 'referee_id');
    }
}
