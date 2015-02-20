describe("bisonInc", function () {

    var $rootScope, $scope, $timeout, $state, bisonService,
        OptionsController, NewBoreLogController;

    beforeEach(module('bisonInc'));
    beforeEach(function () {
        inject(function ($injector) {
            $rootScope = $injector.get("$rootScope");
            $scope = $rootScope.$new();
            $timeout = $injector.get("$timeout");
            $state = $injector.get("$state");
            bisonService = $injector.get("bisonService");

            OptionsController =
                $injector.get("$controller")("OptionsController", {
                    $scope: $scope,
                    $timeout: $timeout,
                    $state: $state,
                    bisonService: bisonService
                });
            NewBoreLogController =
                $injector.get("$controller")("NewBoreLogController", {
                    $scope: $scope,
                    $timeout: $timeout,
                    bisonService: bisonService
                });
        });
    });
    
    //-- bisonService
    describe("bisonService", function () {
        it('should be defined', function () {
            expect(bisonService).toBeDefined();
        });
    });
    
    //-- OptionsController
    describe("OptionsController", function () {
        it("should be defined", function () {
            expect(OptionsController).toBeDefined();
        });
    });
    
    //-- NewBoreLogController
    describe("NewBoreLogController", function () {
        it("should be defined", function () {
            expect(NewBoreLogController).toBeDefined();
        });
    });
    
});