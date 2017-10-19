<?php

namespace Flagrow\Upload\Tests\Unit;

use Flagrow\Upload\File;
use Flagrow\Upload\Tests\Test;
use Flarum\Formatter\Formatter;
use Illuminate\Cache\ArrayStore;
use Illuminate\Cache\Repository;

class MigrationTest extends Test
{

    /**
     * @var File
     */
    protected $file;

    /**
     * @var Formatter
     */
    protected $formatter;

    protected function setUp()
    {
        parent::setUp();

        File::unguard();
        $this->file = File::create([
            'base_name' => 'foo.png',
            'url' => '/foo.png',
            'type' => 'image/png',
            'size' => 0,
            'uuid' => '00000000-45e7-49b0-be65-a450924c2fd0'
        ]);

        $this->app->bind(Formatter::class, function() {
            return new Formatter(new Repository(new ArrayStore()), $this->app->make('events'), __DIR__ . '/../cache');
        });

        $this->formatter = app(Formatter::class);
    }

    /**
     * @test
     */
    public function migrate_to_templates()
    {
        require_once __DIR__ . '/../../migrations/2017_08_30_000000_migrate_to_templates.php';

        $this->assertTrue(function_exists('replaceIdentifiers'));

        $old = <<<EOM
<r>
<FLAGROW_FILE_IMAGE base_name="{$this->file->base_name}" downloads="0" size="356kB" url="{$this->file->url}" uuid="{$this->file->uuid}">\$image-{$this->file->uuid}</FLAGROW_FILE_IMAGE>
</r>
EOM;
        $new = $old;
        replaceIdentifiers($this->app['flarum.db'], $new);

        $html = $this->formatter->render($new);

        dd($old, $new, $html);
    }

    protected function tearDown()
    {
        if ($this->file->exists) {
            $this->file->delete();
        }

        parent::tearDown();
    }
}
