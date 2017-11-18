<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RefereeTest extends TestCase
{
    /** @test */
    public function index()
    {
        $response = $this->get('api/referee');
        $response->assertStatus(200);
    }

    /** @test */
    public function show()
    {
        $response = $this->get('api/referee/1');
        $response->assertStatus(200);
    }

    /** @test */
    public function store() {
        $response = $this->json('POST', 'api/referee', [
            'name' => 'Steve',
            'phone' => '01225123123',
            'profession' => 'Doctor'
        ]);

        $response->assertStatus(200);
    }

    /** @test */
    public function update() {
        $response = $this->json('PUT', 'api/referee/102', [
            'name' => 'Steve',
            'phone' => '01225123123',
            'profession' => 'Doctor'
        ]);

        $response->assertStatus(200)->assertJson([
            'name' => 'Steve',
            'phone' => '01225123123',
            'profession' => 'Doctor'
        ]);
    }
}
