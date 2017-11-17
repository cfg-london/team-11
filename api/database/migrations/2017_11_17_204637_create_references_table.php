<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('references', function (Blueprint $table) {
            $table->increments('reference_id');
            $table->string('name');
            $table->string('phone');
            $table->string('address');
            $table->boolean('urgency');
            $table->string('type');
            $table->integer('referee_id')->unsigned();
            $table->foreign('referee_id')->references('referee_id')->on('referees');
            $table->string('notes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('references');
    }
}
