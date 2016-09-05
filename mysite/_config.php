<?php

global $project;
$project = 'mysite';

global $database;
$database = 'sandbox';

require_once('conf/ConfigureFromEnv.php');

// Set the site locale
i18n::set_locale('en_US');
