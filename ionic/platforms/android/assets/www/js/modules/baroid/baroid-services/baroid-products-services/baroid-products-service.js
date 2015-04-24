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
            "name":"EZ-MUD Borehole Stabilizer",
            "overview":"EZ-MUD liquid polymer emulsion contains partially hydrolyzed polyacrylamide/polyacrylate (PHPA) copolymer. It is used primarily as a borehole stabilizer to help prevent reactive shale and clay from swelling and sloughing. EZ-MUD polymer is also added to low-solids drilling fluids to help increase lubricity, fluid viscosity, and to help improve carrying capacity of air/foam injection fluids.",
            "templateUrl":baroidHTMLFiles.ezMud,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/EZ-MUD.pdf"
        },
        {
            "name":"EZ MUD GOLD Clay/Shale Stabilizer",
            "overview":"EZ-MUD GOLD clay and shale stabilizer, helps provide inhibition of clay and shale formations in water-based drilling fluids without substantially increasing viscosity. EZ-MUD GOLD stabilizer, when added to a QUIK-GEL or BORE-GEL slurry, yields an inhibitive drilling fluid system while maintaining manageable and effective fluid properties. The unique beaded structure of EZ-MUD GOLD stabilizer allows the material to be mixed easily at minimal shear, eliminating the need for liquid emulsions.",
            "templateUrl":baroidHTMLFiles.ezMudGold,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/EZ-MUD_GOLD.pdf"
        },
        {
            "name":"N-SEAL Lost Circulation Material",
            "overview":"N-SEAL acid soluble lost circulation material is specially formulated extrusion spun mineral fiber. Due to its solubility in weak acids, N-SEAL material is easily removed from production zones. N-SEAL material can be used as an additive for loss of circulation in concentrations of up to 70 lb/100 gallons (86 kg/m3).",
            "templateUrl":baroidHTMLFiles.nSeal,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/N-SEAL.pdf"
        },
        {
            "name":"NO-SAG Biopolymer Gel Strength Enhancer",
            "overview":"NO-SAG biopolymer is free-flowing, powdered and easily dispersed. It helps enhance the carrying capacity of both clay and polymer-base drilling fluids without significantly increasing the viscosity of the slurry.",
            "templateUrl":baroidHTMLFiles.noSag,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/NO-SAG.pdf"
        },
        {
            "name":"PENETROL Rate of Penetration Enhancer",
            "overview":"PENETROL water miscible, non-ionic wetting agent is designed to help counteract the sticking tendencies of clay.",
            "templateUrl":baroidHTMLFiles.penetrol,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/PENETROL.pdf"
        },
        {
            "name":"POLY-BORE Borehole Stabilizing Agent",
            "overview":"POLY-BORE polymer is a free flowing, water-soluble, easy mixing, 100% dry granular polymer. POLY-BORE polymer is a very high molecular weight partially hydrolyzed polyacrylamide (PHPA) polymer. When mixed with fresh water, a small quantity of POLY-BORE polymer provides a clear, solid-free, viscous borehole stabilizing fluid for use in drilled shaft, auger drilling, horizontal directional boring, trenching excavation and reverse circulation (RC) rotary drilling. POLY-BORE polymer is not designed to be used in conjunction with bentonite-based fluids.",
            "templateUrl":baroidHTMLFiles.polyBore,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/POLY-BORE.pdf"
        },
        {
            "name":"QUIK-GEL High-yield Gellant/Viscosifier",
            "overview":"QUIK-GEL viscosifier is an easy-to-mix, finely ground (200-mesh), premium-grade, high-yielding Wyoming sodium bentonite. QUIK-GEL viscosifier imparts viscosity, fluid loss control and gelling characteristics to freshwater-based drilling fluids.",
            "templateUrl":baroidHTMLFiles.quickGel,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/QUIK-GEL.pdf"
        },
        {
            "name":"QUIK-TROL Filtration Control/Viscosifier",
            "overview":"QUIK-TROL modified natural cellulosic polymer provides filtration control in most water-based drilling fluids. QUIK-TROL polymer, when added to a QUIK-GEL slurry, yields a drilling mud system suitable for drilling in sandy formation. QUIK-TROL polymer can be added to vegetable or mineral oil to provide an oil-based fluid suspension, which can be poured into drill string directly. QUIK-TROL polymer is also used in air/gel-foam drilling.",
            "templateUrl":baroidHTMLFiles.quickTrol,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/QUIK-TROL.pdf"
        },
        {
            "name":"QUIK-TROL LV Filtration Control",
            "overview":"QUIK-TROL LV modified natural cellulosic polymer provides filtration control in most water-based drilling fluids without substantially increasing viscosity. QUIK-TROL LV polymer, when added to a QUIK-GEL or BORE-GEL slurry, yields a drilling mud system suitable for drilling in sandy formation. QUIK-TROL LV polymer can be added to vegetable or mineral oil to provide an oil-based fluid suspension, which can be poured into drill string directly.",
            "templateUrl":baroidHTMLFiles.quickTrolLV,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/QUIK-TROL_LV.pdf"
        },
        {
            "name":"Soda Ash pH Adjustment/Water Softener",
            "overview":"Soda Ash granular powder is primarily used to help condition and soften make-up water and raise pH.",
            "templateUrl":baroidHTMLFiles.sodaAsh,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/Soda_Ash.pdf"
        }
    ]
}]);