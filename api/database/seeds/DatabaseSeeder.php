<?php

use Illuminate\Database\Seeder;
use App\Referee;
use App\Reference;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Referee::class, 50)->create();
        factory(Reference::class, 50)->create();
    }
}
