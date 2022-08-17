<?php

namespace Tests\Commands;

use Tests\TestCase;

class MakeTest extends TestCase
{
    public function testMakingFiles()
    {
        $name = 'MakeExample';

        $filename = date('Y_m_d_His') . '_make_example.php';

        $path = database_path('actions/' . $filename);

        $this->assertFileDoesNotExist($path);

        $this->artisan('make:migration:action', compact('name'))->run();

        $this->assertFileExists($path);

        $expected = __DIR__ . '/../fixtures/app/anonymous/stubs/make_example.stub';

        $this->assertEquals(
            file_get_contents($expected),
            file_get_contents($path)
        );
    }

    public function testAutoName()
    {
        $path = database_path('actions/' . date('Y_m_d_His') . '_auto.php');

        $this->assertFileDoesNotExist($path);

        $this->artisan('make:migration:action')->run();

        $this->assertFileExists($path);
    }
}
