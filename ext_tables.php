<?php
if (!defined ('TYPO3_MODE')) {
    die ('Access denied.');
}

# Provide PageTS Template that enables Syntax Highlighting in RTE
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $_EXTKEY,
    'Configuration/TSconfig/RTE/config.ts',
    'EXT:jm_template_jensmittag_de - Register CSS Styles in RTE');

# Provide Typoscript Frontend Template
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/Typoscript/Layout/',
    'jensmittag.de - Main Page Layouts');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/Typoscript/RTE/',
    'jensmittag.de - RTE Styles');