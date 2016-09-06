<?php
use GuzzleHttp\Client;

class ZomatoApi{

    private $baseUrl = 'https://developers.zomato.com/api/v2.1/';

    public $apiKey = '2c30285386bb3a363b7d3b8153dabace';

    public $client;

    public function __construct() {
        $this->client = new  Client([
            'base_uri' => $this->baseUrl,
            'headers' => [
                'user-key' => $this->apiKey
            ]
        ]);
    }

    public function getCategory(){

        $response = $this->client->request('GET', 'categories');

        return $response;
    }
}