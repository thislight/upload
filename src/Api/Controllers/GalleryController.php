<?php

namespace Flagrow\Upload\Api\Controllers;

use Flagrow\Upload\Api\Serializers\FileSerializer;
use Flagrow\Upload\File;
use Flarum\Api\Controller\AbstractListController;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class GalleryController extends AbstractListController
{
    public $serializer = FileSerializer::class;

    /**
     * Get the data to be serialized and assigned to the response document.
     *
     * @param ServerRequestInterface $request
     * @param Document               $document
     * @return mixed
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $userId = Arr::get($request->getQueryParams(), 'id');

        return File::newQuery()
            ->where('actor_id', $userId)
            ->whereHas('discussion', function ($query) {
                $query->where('is_private', 0);
            })
            ->whereHas('post', function ($query) {
                $query->where('is_private', 0);
            })
            ->simplePaginate();
    }
}