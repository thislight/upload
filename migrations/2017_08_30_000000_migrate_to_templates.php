<?php

/*
 * This file is part of flagrow/upload.
 *
 * Copyright (c) Flagrow.
 *
 * http://flagrow.github.io
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */


use Illuminate\Database\ConnectionInterface;

return [
    'up'   => function (ConnectionInterface $connection) {
        $replace = [];

        $connection
            ->table('posts')
            ->chunk(10, function ($posts) use (&$replace) {
                foreach ($posts as $post) {
                    $content = $post->content;
                    replaceIdentifiers($content);

                    $replace[$post->id] = $content;
                }
        });

        $connection->table('posts')->update()
    },
    'down' => function (ConnectionInterface $connection) {
    }
];

function replaceIdentifiers(&content) {

}