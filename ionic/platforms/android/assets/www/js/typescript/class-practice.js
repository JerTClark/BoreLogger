var Family;
(function (Family) {
    var LovedOne = (function () {
        function LovedOne(name, relationship) {
            this.name = name;
            this.relationship = relationship;
        }
        LovedOne.prototype.logToConsole = function () {
            console.log(this.name + " is my " + this.relationship);
        };
        return LovedOne;
    })();
    Family.LovedOne = LovedOne;
})(Family || (Family = {}));
//# sourceMappingURL=class-practice.js.map