angular.module("baroidApp").service("BaroidProductsListing", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return [
        {
        "name": "AQUA-CLEAR PFD Polymer Dispersant",
        "overview": "AQUA-CLEAR PFD concentrated liquid polymer is a dispersant that provides superior mud and sediment removal from the producing formation and gravel pack. This product is also a highly effective mud thinner and contains no phosphates.",
        "templateUrl": baroidHTMLFiles.aquaClearPFD,
        "dataSheet": "http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/AQUACLEAR%20PFD.pdf"
        }
    ]
}]);