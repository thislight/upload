<?php

namespace Flagrow\Upload\Tests;

use Flagrow\Steamroller\TestCase;
use Flarum\Extension\ExtensionManager;

class Test extends TestCase
{
    protected function setUp()
    {
        parent::setUp();

        /** @var ExtensionManager $manager */
        $manager = $this->app->make(ExtensionManager::class);
        $manager->enable('flagrow-upload');
    }
}
