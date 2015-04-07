#Calculators

I've taken to cracking some ancient Excel spreadsheets and gleaning a few formulas used by certain
**conglomerates** to calculate factors like:

##Annular Volume (gallons)

Given,
 - **h** = **Hole diameter** in *inches*
 - **c** = **Casing diameter** in *inches*
 - and, **d** = **Depth** in *feet*
    
    Annular volume = h^2 - c^2 / 24.5 * d
    
And I could create a minor sub-feature of the app housing numerous similar calculators. I'd prefer to
create something like this using AngularJS, but I'm not liking how Android Studio handles hybrid stuff.
For now, all I can think is to have an **ENTER** button handle things, but form validation and data
binding would be awesome for this.