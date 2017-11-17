<?php

use Faker\Generator as Faker;
use App\Reference as Reference;

$factory->define(Reference::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'phone' => $faker->phoneNumber,
        'address' => $faker->address,
        'urgency' => $faker->boolean,
        'type' => $faker->word,
        'referee_id' => factory(App\Referee::class)->create()->referee_id,
        'notes' => $faker->word
    ];
});
