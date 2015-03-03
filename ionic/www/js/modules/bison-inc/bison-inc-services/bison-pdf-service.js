angular.module("bisonInc")
    .service("bisonPDFService", ["bisonService", function (bisonService) {
        var self = this;
        /**
         * Everything here is extremely experimental
         * @type {Promise}
         */
        var thing = PDFJS.getDocument("lib/pdfJS/web/compressed.tracemonkey-pldi-09.pdf");

    }]);