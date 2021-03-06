<?php

class Page extends SiteTree {


    private static $db = array();

    private static $has_one = array();

    /**
     * @param $pagetype
     *
     * @return string
     */


}

class Page_Controller extends ContentController {


    public function init() {
        parent::init();
        Requirements::css("{$this->ThemeDir()}/css/main.min.css");


        // Combine and include js
        Requirements::combine_files(
            'main.js',
            array(
                "//code.jquery.com/jquery-2.2.3.min.js",
                "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js",
                "{$this->ThemeDir()}/js/scripts.js"
            ));

    }


    public function ZomatoMenu(){
        $api = new ZomatoApi;
        $response = $api->getCategory();

        $data = json_decode($response->getBody());
        $data = $data->categories;

        $list = new ArrayList;

        foreach($data as $item){
            $cat = new ArrayData(array(
                'Id' => $item->categories->id,
                'Name' =>  $item->categories->name
            ));
            $list->push($cat);
        }

        return $list;
    }


}
