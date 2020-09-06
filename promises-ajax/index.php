<?php

$data = [
    [
        'title' => 'Book1',
        'author' => 'Mr. Jack Php',
        'date_published' => '2015-02-04'
    ],
    [
        'title' => 'Book2',
        'author' => 'Prof. Ernest Java',
        'date_published' => '2012-12-10'
    ],
    [
        'title' => 'Master Python',
        'author' => 'Mr. Severus Python',
        'date_published' => '2020-10-04'
    ],
];

header('Content-type:application/json');
echo json_encode($data);
exit;
?>