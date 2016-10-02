<?php
if (!defined ('TYPO3_MODE')) {
    die ('Access denied.');
}

# Provide PageTS Template that enables custom styles in RTE
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $_EXTKEY,
    'Configuration/TSconfig/RTE/config.txt',
    'EXT:jm_template_jensmittag_de - Custom CSS Styles in RTE');

# Provide PageTS Template that adds custom frame types in content element appearance tab
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $_EXTKEY,
    'Configuration/TSconfig/Frames/config.txt',
    'EXT:jm_template_jensmittag_de - Custom CE frame types');

# Provide Typoscript Frontend Template
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/Typoscript/Layout/',
    'jensmittag.de - Main Page Layouts');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/Typoscript/RTE/',
    'jensmittag.de - RTE Styles');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/Typoscript/Frames/',
    'jensmittag.de - CE Frame Styles');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/Typoscript/Blog/',
    'jensmittag.de - Blog Configuration');