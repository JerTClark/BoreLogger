/**
 * Initialize an instance of a FamilyModel that builds and contains an array
 * of FamilyMembers and various methods through which to interact with that array
 * @returns {FamilyModel} as defined by the interface
 */
function getFamily() {
    //Note: Array<FamilyMember> is equal to FamilyMember[]
    var family = [];
    //The array.sort method expects a comparing function that
    //accepts the two objects being compared
    var familyOrderedByAge = [];
    var oldestFamilyMember;
    //Default param value (used later)
    var defaultGuy = {
        name: "Someone I don\'t know",
        birthday: "Uncertain",
        age: Number.POSITIVE_INFINITY
    };
    /**
     * Sorting function for FamilyMember by age property.
     * Use this function as a parameter to FamilyMember.sort()
     * @param a {FamilyMember} a FamilyMember object
     * @param b {FamilyMember} a FamilyMember object
     * @returns {number} -1 if a > b, 1 if b > a, 0 if equal
     */
    function compareAges(a, b) {
        if (a.age > b.age) {
            return -1;
        }
        if (a.age < b.age) {
            return 1;
        }
        return 0; //equal
    }
    familyOrderedByAge = family.sort(compareAges);
    oldestFamilyMember = familyOrderedByAge[0];
    var familyModel;
    familyModel = {
        "myFamily": family,
        "initFamily": function () {
            //Push all the family member to the array
            family.push({
                name: "Jacob",
                birthday: "April 27, 2004",
                age: 10
            });
            family.push({
                name: "Amelia",
                birthday: "January 20, 2008",
                age: 7
            });
            family.push({
                name: "Jubilee",
                birthday: "April 13, 2013",
                age: 2
            });
            family.push({
                name: "Desiree",
                birthday: "December 21, 1982",
                age: 32
            });
            family.push({
                name: "Jeremy",
                birthday: "September 22, 1980",
                age: 34
            });
        },
        "logFamily": function () {
            console.log("Unsorted family: " + JSON.stringify(family));
        },
        "logSortedFamily": function () {
            console.log("Sorted family: " + JSON.stringify(familyOrderedByAge));
        },
        "logOldest": function () {
            console.log("Oldest: " + JSON.stringify(oldestFamilyMember));
        },
        "optionalParam": function (a, b, c) {
            var greeting;
            if (typeof c !== "undefined") {
                greeting = "Hi there, " + a.name + ", " + b.name + ", and " + c.name + "!";
            }
            else {
                greeting = "Hi there, " + a.name + " and " + b.name + "!";
            }
            console.log(greeting);
        },
        "defaultParam": function (a, b, c) {
            if (c === void 0) { c = defaultGuy; }
            var greeting = "Hi there, " + a.name + ", " + b.name + ", and " + c.name + "!";
            console.log(greeting);
        }
    };
    return familyModel;
}
//# sourceMappingURL=family-members.js.map