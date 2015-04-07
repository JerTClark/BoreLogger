angular.module("bisonInc").service("boreLogModelService", ["bisonService", function (bisonService) {
    this.getModel = function () {
        return [
            {
                title: "Customer",
                hint: "Who the job was for",
                description: "the company for whom the work is performed",
                value: "",
                inputType: "text",
                inputName: "customer",
                show: true,
                required: true
            },
            {
                title: "Conduit",
                hint: "(No.) Size Type",
                description: "product (for ex., (1) 12\" Plastic)",
                value: "",
                inputType: "text",
                inputName: "conduit",
                show: bisonService.getType() === "log",
                required: bisonService.getType() === "log"
            },
            {
                title: "Location",
                hint: "Location of the job",
                description: "place most readily associated with the job site",
                value: "",
                inputType: "text",
                inputName: "location",
                show: true,
                required: true
            },
            {
                title: "Length of bore",
                hint: "Linear feet",
                description: "footage drilled (no comma, just the number)",
                value: "",
                inputType: "text",
                inputName: "length",
                show: bisonService.getType() === "log",
                required: bisonService.getType() === "log"
            },
            {
                title: "Date",
                hint: "Start or end of job",
                description: "start or end of the job",
                value: "",
                inputType: "date",
                inputName: "date",
                show: bisonService.getType() === "log",
                required: bisonService.getType() === "log"
            }
        ];
    }
}]);