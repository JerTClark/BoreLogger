module Family {
    export class LovedOne {
        constructor(private name:string, private relationship:string) {

        }
        private logToConsole() {
            console.log(this.name + " is my " + this.relationship);
        }
    }
}