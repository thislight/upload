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
namespace Flagrow\Upload\Adapters;
use Flagrow\Upload\Contracts\UploadAdapter;
use Flagrow\Upload\File;
use GuzzleHttp\Client as Guzzle;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Error;
use ErrorException;

class Smms implements UploadAdapter
{
    /**
     * @var Guzzle
     */
    protected $api;
    public function __construct(Guzzle $api)
    {
        $this->api = $api;
    }
    /**
     * Whether the upload adapter works on a specific mime type.
     *
     * @param string $mime
     *
     * @return bool
     */
    public function forMime($mime)
    {
        return Str::startsWith($mime, 'image/');
    }
    /**
     * @return bool
     */
    public function supportsStreams()
    {
        return false;
    }
    /**
     * Attempt to upload to the (remote) filesystem.
     *
     * @param File         $file
     * @param UploadedFile $upload
     * @param string       $contents
     *
     * @return File|bool
     */
    public function upload(File $file, UploadedFile $upload, $contents)
    {
        $response = $this->api->post('upload', [
            'multipart' => [
                [
                    'name'     => 'smfile',
                    'filename' => $upload->getClientOriginalName(),
                    'contents' => $contents,
                ]
            ]
        ]);
        // successful upload, let's get the generated URL
        if ($response->getStatusCode() == 200) {
            $result_json = json_decode($response->getBody(), true);
            if (Arr::get($result_json, 'code') != 'success'){
                return false;
            }
            $meta = Arr::get($result_json, 'data');
            $link = Arr::get($meta, 'url');
            $file->url = $link;
            $file->remote_id = Arr::get($meta, 'hash');
            return $file;
        } elseif ($response->getStatusCode() != 200 || empty($file->url)) {
            //throw new ErrorException("Upload image fail: "+json_decode($response->getBody(), true));
            return false;
        } else {
            return $file;
        }
    }
    /**
     * In case deletion is not possible, return false.
     *
     * @param File $file
     *
     * @return File|bool
     */
    public function delete(File $file)
    {
        if (!empty($file->remote_id)){
            $promise = $this->api->get("delete/"+($file->remote_id));
            return $file;
        } else {
            return false;
        }
    }
}