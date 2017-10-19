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
use Flagrow\Upload\Templates;
use Flagrow\Upload\Templates\AbstractTemplate;
use Flarum\Formatter\Formatter;
use Illuminate\Database\ConnectionInterface;

return [
    'up' => function (ConnectionInterface $connection) {
    /** @var Formatter $formatter */
        $formatter = app(Formatter::class);
        $connection
            ->table('posts')
            ->chunk(10, function ($posts) use ($connection, $formatter) {
                foreach ($posts as $post) {
                    $content = $formatter->unparse($post->content);
                    replaceIdentifiers($connection, $content);

                    $connection
                        ->table('posts')
                        ->where('id', $post->id)
                        ->update([
                                'content' => $content
                            ]
                        );
                }
            });
    },
    'down' => function (ConnectionInterface $connection) {
        // ..
    }
];

function replaceIdentifiers(ConnectionInterface $connection, &$content)
{
    $content = preg_replace_callback_array([
        '/\<FLAGROW_FILE_IMAGE [^>]+?>\$image-(?<uuid>[a-z0-9-]{36})<\/FLAGROW_FILE_IMAGE>/' => function ($m) use ($connection) {
            return bbcode($connection, $m['uuid'], new Templates\ImagePreviewTemplate());
        },
        '/\<FLAGROW_FILE_FILE [^>]+?>\$file-(?<uuid>[a-z0-9-]{36})<\/FLAGROW_FILE_FILE>/' => function ($m) use ($connection) {
            return bbcode($connection, $m['uuid'], new Templates\FileTemplate());
        },
    ], $content);
}

function bbcode(ConnectionInterface $connection, $uuid, AbstractTemplate $template)
{
    $file = $connection->table('flagrow_files')->where('uuid', $uuid)->first();

    if (!$file) {
        return '';
    }

    $bbcode = $template->bbcode();
    /** @var Formatter $formatter */
    $formatter = app(Formatter::class);

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

    return $formatter->parse($code, $file);
}
