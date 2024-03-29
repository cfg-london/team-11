<?php

use Faker\Generator as Faker;
use App\Referee as Referee;

$factory->define(Referee::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'phone' => $faker->phoneNumber,
        'profession' => $faker->jobTitle
    ];
});
