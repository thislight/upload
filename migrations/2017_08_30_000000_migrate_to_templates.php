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


use Flagrow\Upload\File;
use Flagrow\Upload\Templates\AbstractTemplate;
use Illuminate\Database\ConnectionInterface;
use Flagrow\Upload\Templates;

return [
    'up'   => function (ConnectionInterface $connection) {
        $connection
            ->table('posts')
            ->chunk(10, function ($posts) use (&$replace, $connection) {
                foreach ($posts as $post) {
                    $content = $post->content;
                    replaceIdentifiers($connection, $content);

                    $connection
                        ->table('posts')
                        ->where('id', $post->id)
                        ->update([
                        'content' => $content
                    ]);
                }
        });
    },
    'down' => function (ConnectionInterface $connection) {
    // ..
    }
];

function replaceIdentifiers(ConnectionInterface $connection, &$content) {
    $content = preg_replace_callback_array([
        '/\$image-(?<uuid>[a-z0-9-]{36})/' => function ($m) use ($connection) {
            return bbcode($connection, $m['uuid'], new Templates\ImageTemplate());
        },
        '/\$file-(?<uuid>[a-z0-9-]{36})/' => function ($m) use ($connection) {
            return bbcode($connection, $m['uuid'], new Templates\FileTemplate());
        },
    ], $content);
}
function bbcode(ConnectionInterface $connection, $uuid, AbstractTemplate $template) {
    $file = $connection->table('flagrow_files')->where('uuid', $uuid)->first();
    $bbcode = $template->bbcode();
    /** @var \Flarum\Formatter\Formatter $formatter */
    $formatter = app(\Flarum\Formatter\Formatter::class);

    $code = preg_replace_callback_array([
        '/\](?<find>.*)\[/' => function ($m) use ($file) {
            return str_replace($m['find'], $file->base_name, $m[0]);
        },
        '/size=(?<find>{.*?})/' => function ($m) use ($file) {
            return str_replace($m['find'], (new File)->human_filesize($file->size), $m[0]);
        },
        '/uuid=(?<find>{.*?})/' => function ($m) use ($file) {
            return str_replace($m['find'], $file->uuid, $m[0]);
        },
        '/url=(?<find>{.*?})/' => function ($m) use ($file) {
            return str_replace($m['find'], $file->url, $m[0]);
        }
    ], $bbcode);

    return $formatter->parse($code);
}