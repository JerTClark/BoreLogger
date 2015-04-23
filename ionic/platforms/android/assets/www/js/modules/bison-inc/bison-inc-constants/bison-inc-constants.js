angular.module("bisonInc")
    .constant("$ionicLoadingConfig", {
        template: '<ion-spinner icon="ripple"></ion-spinner>',
        noBackdrop: true
    })
    .constant("bisonHTMLFiles", {
        "home":"options.html",
        "locatesModal":"html/bison/modal/locates-modal.html",
        "editLocatesModal":"html/bison/modal/edit-locates-modal.html",
        "bisonFiles":"html/bison/state/bison-files.html",
        "continueState":"html/bison/state/continue-state.html",
        "newBoreLogState":"html/bison/state/new-bore-log-state.html",
        "settingsState":"html/bison/state/settings-state.html",
        "aboutThisApp":"html/bison/templates/about-this-app.html",
        "confirmClearLocalCache":"html/bison/templates/confirm-clear-local-cache.html"
    });