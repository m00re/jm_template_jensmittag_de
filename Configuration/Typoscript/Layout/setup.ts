tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
    key.field = section_frame
    100 = TEXT
    100.value = <div class="csc-default-lr-padding">|</div>
    101 = TEXT
    101.value = <div class="csc-default-lbr-padding">|</div>
    102 = TEXT
    102.value = <div class="csc-default grey">|</div>
    103 = TEXT
    103.value = <div class="csc-default-lr-padding grey">|</div>
    104 = TEXT
    104.value = <div class="csc-default-lbr-padding grey">|</div>
}

tx_ddgooglesitemap.forceStartPid = 1
config.linkVars =
config.tx_realurl_enable = 1

#page.config.contentObjectExceptionHandler = 0

page {
    includeCSSLibs {
        bootstrap >
        googleFont >
        fontawesome >
    }
    insertClassesFromRTE = 0
    includeJSFooterlibs {
        bootstrap >
        myFunctions = EXT:jm_template_jensmittag_de/Resources/Public/Javascript/functions.js
        myFunctions.excludeFromConcatenation = 1
    }
}