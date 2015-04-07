angular.module("bisonInc").factory("bisonLocateFactory", [function () {
    return {
        format: function (feet, inches, crossing) {
            if (crossing) {
                return feet + "\' " + inches + "\" " + crossing;
            }
            return feet + "\' " + inches + "\"";
        },
        add: function (locate, locatesArray) {
            locatesArray.push(locate);
            return locatesArray;
        },
        move: function (locatesArray, fromIndex, toIndex) {
            console.log("move() called");
            locatesArray.splice(toIndex, 0, locatesArray.splice(fromIndex, 1)[0]);
        },
        remove: function (locatesArray, index) {
            console.log("remove() called");
            locatesArray.splice(index, 1);
        },
        change: function (locatesArray, index, newValue) {
            console.log("change() called");
            locatesArray[index] = newValue;
        },
        update: function (locatesArray, value, fromIndex, toIndex) {
            if (value && (fromIndex || fromIndex === 0) && (toIndex || toIndex === 0)) {
                console.log("Moving the locate " + value + " at " + fromIndex + " to " + toIndex);
                this.move(locatesArray, fromIndex, toIndex);
            }
            if (value && (fromIndex || fromIndex === 0) && (!toIndex && toIndex !== 0)) {
                console.log("Changing locate at index " + fromIndex + " to " + value);
                this.change(locatesArray, fromIndex, value);
            }
            if (!value && (fromIndex || fromIndex === 0) && (!toIndex && toIndex !== 0)) {
                console.log("Deleting value at " + fromIndex + " from locates");
                this.remove(locatesArray, fromIndex);
            }
        }
    }
}]);