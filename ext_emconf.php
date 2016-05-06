<?php

$EM_CONF[$_EXTKEY] = array(
    'title' => 'Typo3 Website Template for www.jensmittag.de',
    'description' => 'Responsive website template for www.jensmittag.de',
    'category' => 'fe',
    'author' => 'Jens Mittag',
    'author_company' => '',
    'author_email' => 'kontakt@jensmittag.de',
    'clearCacheOnLoad' => 1,
    'version' => '1.0.0',
    'constraints' => array(
        'depends' => array(
            'typo3' => '7.0.0-7.9.9',
            'jm_html5_bootstrap' => '0.1.0',
            'jm_imagecollection_rendering' => '1.0.0',
            'jm_highlightjs' => '9.2.0',
            'bootstrap_grids' => '1.1.4',
            'gridelements' => '7.0.4',
            'dd_googlesitemap' => '2.0.4'
        ),
    )
);
