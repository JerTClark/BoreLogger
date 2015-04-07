/**
 * Defines a FamilyMember object
 * Interfaces are not compiled into JavaScript
 * They are used during design
 */
interface FamilyMember {
    name:string;
    birthday:string;
    age:number;
}

/**
 * For interacting with a collection of FamilyMembers
 */
interface FamilyModel {
    myFamily: FamilyMember[];
    initFamily();
    logFamily();
    logSortedFamily();
    logOldest();
    optionalParam(a:FamilyMember, b:FamilyMember, c?:FamilyMember);
    defaultParam(a:FamilyMember, b:FamilyMember, c:FamilyMember);
}

/**
 * Initialize an instance of a FamilyModel that builds and contains an array
 * of FamilyMembers and various methods through which to interact with that array
 * @returns {FamilyModel} as defined by the interface
 */
function getFamily():FamilyModel {

    //Note: Array<FamilyMember> is equal to FamilyMember[]
    var family:FamilyMember[] = [];

    //The array.sort method expects a comparing function that
    //accepts the two objects being compared
    var familyOrderedByAge:FamilyMember[] = [];
    var oldestFamilyMember:FamilyMember;

    //Default param value (used later)
    var defaultGuy:FamilyMember = {
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
    function compareAges(a:FamilyMember, b:FamilyMember) {
        if (a.age > b.age) {
            return -1;
        }
        if (a.age < b.age) {
            return 1;
        }
        return 0;//equal
    }

    familyOrderedByAge = family.sort(compareAges);
    oldestFamilyMember = familyOrderedByAge[0];

    var familyModel:FamilyModel;

    familyModel = {
        "myFamily": family,
        "initFamily": () => {
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
        "logFamily": () => {
            console.log("Unsorted family: " + JSON.stringify(family));
        },
        "logSortedFamily": () => {
            console.log("Sorted family: " + JSON.stringify(familyOrderedByAge));
        },
        "logOldest": () => {
            console.log("Oldest: " + JSON.stringify(oldestFamilyMember));
        },
        "optionalParam": (a:FamilyMember, b:FamilyMember, c?:FamilyMember) => {
            var greeting:string;
            if (typeof c !== "undefined") {
                greeting = "Hi there, " + a.name + ", " + b.name + ", and " + c.name + "!";
            } else {
                greeting = "Hi there, " + a.name + " and " + b.name + "!"
            }
            console.log(greeting);
        },
        "defaultParam": (a:FamilyMember, b:FamilyMember, c:FamilyMember = defaultGuy) => {
            var greeting:string = "Hi there, " + a.name + ", " + b.name + ", and " + c.name + "!";
            console.log(greeting);
        }
    };

    return familyModel;

}