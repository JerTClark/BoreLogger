angular.module("baroidApp")
    .constant("BaroidAppTitle", "Calculators")
    .constant("baroidHTMLFiles", {
        /*States*/
        "home":"baroid-home.html",
        "hddPullback":"html/baroid/state/hdd-pullback-state.html",
        "productsState":"html/baroid/state/products-state.html",
        /*Directives*/
        "baroidHeaderCard":"html/baroid/template/baroid-header-card.html",
        "baroidNote":"html/baroid/template/baroid-note.html",
        "baroidNumericInput":"html/baroid/template/baroid-numeric-input.html",
        "baroidNumericResult":"html/baroid/template/baroid-numeric-result.html",
        "baroidRecommendationNote":"html/baroid/template/baroid-recommendation-note.html",
        "baroidProducts":"html/baroid/template/baroid-product-directive-template.html",
        /*Includes*/
        "aquaClearPFD":"html/baroid/include/baroid-product-includes/aqua-clear-pfd.html",
        "bioBore":"html/baroid/include/baroid-product-includes/biobore.html",
        "boreGel":"html/baroid/include/baroid-product-includes/bore-gel.html",
        "conDet":"html/baroid/include/baroid-product-includes/con-det.html",
        "diamondSeal":"html/baroid/include/baroid-product-includes/diamond-seal.html",
        "ezMud":"html/baroid/include/baroid-product-includes/ez-mud.html"
    });