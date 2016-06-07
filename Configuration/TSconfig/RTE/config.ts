RTE.classes {
    align-right.name = Ausrichtung: Rechts
    align-left.name = Ausrichtung: Links
    align-center.name = Ausrichtung: Zentriert
    align-justify.name = Ausrichtung: Blocksatz
    increased-first-letter.name = Vergrößerter Buchstabe
    quote.name = Zitat
    author.name = Author
    extended-width.name = Komplette Breite
    label.name = Abgerundetes Label (Standard)
    label-grey.name = Abgerundetes Label (Grau)
    label-very-light-grey.name = Abgerundetes Label (Hellgrau)
    label-dark-grey.name = Abgerundetes Label (Dunkelgrau)
    label-green.name = Abgerundetes Label (Grün)
    label-light-green.name = Abgerundetes Label (Hellgrün)
    label-lime.name = Abgerundetes Label (Lime)
    label-indigo.name = Abgerundetes Label (Indigo)
    label-blue.name = Abgerundetes Label (Blau)
    label-light-blue.name = Abgerundetes Label (Hellblau)
    label-red.name = Abgerundetes Label (Rot)
    label-yellow.name = Abgerundetes Label (Gelb)
    label-orange.name = Abgerundetes Label (Orange)
    label-amber.name = Abgerundetes Label (Amber)
    label-black.name = Abgerundetes Label (Schwarz)
    label-angular.name = Eckiges Label (Standard)
    label-angular-grey.name = Eckiges Label (Grau)
    label-angular-very-light-grey.name = Eckiges Label (Hellgrau)
    label-angular-dark-grey.name = Eckiges Label (Dunkelgrau)
    label-angular-green.name = Eckiges Label (Grün)
    label-angular-light-green.name = Eckiges Label (Hellgrün)
    label-angular-lime.name = Eckiges Label (Lime)
    label-angular-indigo.name = Eckiges Label (Indigo)
    label-angular-blue.name = Eckiges Label (Blau)
    label-angular-light-blue.name = Eckiges Label (Hellblau)
    label-angular-red.name = Eckiges Label (Rot)
    label-angular-yellow.name = Eckiges Label (Gelb)
    label-angular-orange.name = Eckiges Label (Orange)
    label-angular-amber.name = Eckiges Label (Amber)
    label-angular-black.name = Eckiges Label (Schwarz)
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
                    allowedClasses := addToList(label,label-grey,label-very-light-grey,label-dark-grey,label-green,label-light-green,label-lime,label-indigo,label-blue,label-light-blue,label-red,label-yellow,label-orange,label-amber,label-black)
                    allowedClasses := addToList(label-angular,label-angular-grey,label-angular-very-light-grey,label-angular-dark-grey,label-angular-green,label-angular-light-green,label-angular-lime,label-angular-indigo,label-angular-blue,label-angular-light-blue,label-angular-red,label-angular-yellow,label-angular-orange,label-angular-amber,label-angular-black)
                }
            }
        }
    }
    proc {
        allowedClasses := addToList(increased-first-letter)
        allowedClasses := addToList(align-right, align-left, align-center, align-justify)
        allowedClasses := addToList(alert-success, alert-info, alert-warning, alert-danger)
        allowedClasses := addToList(quote, author, caption)
        allowedClasses := addToList(label,label-grey,label-very-light-grey,label-dark-grey,label-green,label-light-green,label-lime,label-indigo,label-blue,label-light-blue,label-red,label-yellow,label-orange,label-amber,label-black)
        allowedClasses := addToList(label-angular,label-angular-grey,label-angular-very-light-grey,label-angular-dark-grey,label-angular-green,label-angular-light-green,label-angular-lime,label-angular-indigo,label-angular-blue,label-angular-light-blue,label-angular-red,label-angular-yellow,label-angular-orange,label-angular-amber,label-angular-black)
    }
}