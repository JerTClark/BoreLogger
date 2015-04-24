angular.module("baroidApp").service("BaroidProductsListing", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return [
        {
            "name": "AQUA-CLEAR PFD Polymer Dispersant",
            "overview": "AQUA-CLEAR PFD concentrated liquid polymer is a dispersant that provides superior mud and sediment removal from the producing formation and gravel pack. This product is also a highly effective mud thinner and contains no phosphates.",
            "templateUrl": baroidHTMLFiles.aquaClearPFD,
            "dataSheet": "http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/AQUACLEAR%20PFD.pdf"
        },
        {
            "name": "BIO-BORE HDD Fluid Concentrate",
            "overview": "BIO-BORE horizontal directional drilling fluid concentrate is a free-flowing dry powder that, when mixed with fresh water, provides a clay-free, biodegradable drilling fluid for use in various drilling applications, particularly in the situation where clay-based drilling fluids are restricted.",
            "templateUrl": baroidHTMLFiles.bioBore,
            "dataSheet": "http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/BIO-BORE.pdf"
        },
        {
            "name":"BORE-GEL Boring Fluid System",
            "overview":"BORE-GEL fluid system is a single sack, boring fluid system specially formulated for use in horizontal directional drilling (HDD) applications. BORE-GEL system is a proprietary blended product using high-quality Wyoming sodium bentonite. When BORE-GEL system is mixed with fresh water, it develops an easy-to-pump slurry with desirable fluid properties for HDD.",
            "templateUrl":baroidHTMLFiles.boreGel,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/BORE-GEL.pdf"
        },
        {
            "name":"CON DET Wetting Agent",
            "overview":"CON DET proprietary blend of anionic surfactants is specially formulated for use in fresh water, salt water, and in low-solids drilling fluids as a wetting agent.",
            "templateUrl":baroidHTMLFiles.conDet,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/CON_DET.pdf"
        },
        {
            "name":"DIAMOND SEAL Absorbent Polymer",
            "overview":"DIAMOND SEAL polymer is a water-swellable but not water-soluble, 100% crystalline synthetic polymer. DIAMOND SEAL polymer absorbs hundreds of times its own weight in water. It is intended for use primarily as a lost circulation material for horizontal directional drilling.",
            "templateUrl":baroidHTMLFiles.diamondSeal,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/DIAMOND_SEAL.pdf"
        },
        {
            "name":"EZ-Mud",
            "overview":"EZ-MUD liquid polymer emulsion contains partially hydrolyzed polyacrylamide/polyacrylate (PHPA) copolymer. It is used primarily as a borehole stabilizer to help prevent reactive shale and clay from swelling and sloughing. EZ-MUD polymer is also added to low-solids drilling fluids to help increase lubricity, fluid viscosity, and to help improve carrying capacity of air/foam injection fluids.",
            "templateUrl":baroidHTMLFiles.ezMud,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/EZ-MUD.pdf"
        }
    ]
}]);