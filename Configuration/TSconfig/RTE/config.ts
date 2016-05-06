RTE.classes {
    align-right.name = Ausrichtung: Rechts
    align-left.name = Ausrichtung: Links
    align-center.name = Ausrichtung: Zentriert
    align-justify.name = Ausrichtung: Blocksatz
    increased-first-letter.name = Vergrößerter Buchstabe
    quote.name = Zitat
    author.name = Author
    extended-width.name = Komplette Breite
    button.name = Standard (abgerundet)
    button-grey.name = Grauer (abgerundet)
    button-very-light-grey.name = Hellgrau (abgerundet)
    button-dark-grey.name = Dunkelgrau (abgerundet)
    button-green.name = Grün (abgerundet)
    button-light-green.name = Hellgrün (abgerundet)
    button-lime.name = Lime (abgerundet)
    button-indigo.name = Indigo (abgerundet)
    button-blue.name = Blau (abgerundet)
    button-light-blue.name = Hellblau (abgerundet)
    button-red.name = Rot (abgerundet)
    button-yellow.name = Gelb (abgerundet)
    button-orange.name = Orange (abgerundet)
    button-amber.name = Amber (abgerundet)
    button-black.name = Schwarz (abgerundet)
    button-angular.name = Standard (rechteckig)
    button-angular-grey.name = Grauer (rechteckig)
    button-angular-very-light-grey.name = Hellgrau (rechteckig)
    button-angular-dark-grey.name = Dunkelgrau (rechteckig)
    button-angular-green.name = Grün (rechteckig)
    button-angular-light-green.name = Hellgrün (rechteckig)
    button-angular-lime.name = Lime (rechteckig)
    button-angular-indigo.name = Indigo (rechteckig)
    button-angular-blue.name = Blau (rechteckig)
    button-angular-light-blue.name = Hellblau (rechteckig)
    button-angular-red.name = Rot (rechteckig)
    button-angular-yellow.name = Gelb (rechteckig)
    button-angular-orange.name = Orange (rechteckig)
    button-angular-amber.name = Amber (rechteckig)
    button-angular-black.name = Schwarz (rechteckig)
    internal.name = Interner Link
    external.name = Externer Link
    alert-success.name = Meldung: Erfolgreich
    alert-info.name = Meldung: Information
    alert-warning.name = Meldung: Warnung
    alert-danger.name = Meldung: Gefahr
    caption.name = Unterttitel
}

RTE.default {
    contentCSS {
        jm_template_jensmittag_de = EXT:jm_template_jensmittag_de/Resources/Public/CSS/rtehtmlarea.css
    }
    buttons {
        blockstyle {
            showTagFreeClasses = 0
            tags {
                p {
                    allowedClasses := addToList(align-right, align-left, align-center, align-justify)
                    allowedClasses := addToList(alert-success, alert-info, alert-warning, alert-danger)
                    allowedClasses := addToList(quote, author, caption)
                }
            }
        }
        textstyle {
            showTagFreeClasses = 0
            tags {
                span {
                    allowedClasses := addToList(increased-first-letter)
                }
            }
        }
    }
    proc {
        allowedClasses := addToList(increased-first-letter)
        allowedClasses := addToList(align-right, align-left, align-center, align-justify)
        allowedClasses := addToList(alert-success, alert-info, alert-warning, alert-danger)
        allowedClasses := addToList(quote, author, caption)
    }
}