/**
 * Created by Clark on 11/26/2014.
 */
BisonController = function() {
    var myPage;
    var isInitialized = false;
    var promptCallback;

    function myErrorLogger(errorCode, errorMessage) {
        MyAlert.render("You screwed up!", errorCode + ": " + errorMessage, function(){console.log(errorCode + ": " + errorMessage);});
    }//end myErrorLogger()

    //-- Returns an object
    return {
        init : function(thePage, initCallback, cancelCallback){
            if(isInitialized){
                initCallback();
            } else {
                myPage = thePage;
                promptCallback = cancelCallback;

                //-- Create a new bore log button
                $(myPage).find("#createBoreLogButton").click(function(event){
                    //$(".content").toggleClass("outro");
                    promptCallback();
                    Prompt.render("Customer", "Who&#32;is&#32;this&#32;job&#32;for?", controller.customer, promptCallback);
                });

                $(myPage).find('#continueBoreLogButton').click(function(event){
                   MyAlert.render("In development", "This feature, much like the rest of my life, is in development...", function(){});
                });

                //-- Set isInitialized to true
                isInitialized = true;

            }//end if-else
        },
        generalInfo: {
            customerName: "",
            conduit: "",
            location: "",
            length: "",
            date: ""
        },
        customer : function(userInput) {
            controller.generalInfo.customerName = "Customer: " + userInput;
            setTimeout(function(){
                Prompt.render("Conduit", "(No.)&#32;Size&#32;Kind", controller.description, promptCallback);
            }, 100);
        },
        description : function(userInput) {
            controller.generalInfo.conduit = "Description: " + userInput;
            setTimeout(function(){
                Prompt.render("Location", "Location&#32;of&#32;the&#32;job", controller.location, promptCallback);
            }, 100);
        },
        location : function(userInput) {
            controller.generalInfo.location = "Location: " + userInput;
            setTimeout(function(){
                Prompt.render("Length&#32;of&#32;bore", "Total&#32;footage&#32;(length&#32;of&#32;rods)", controller.lengthOfBore, promptCallback);
            }, 100);
        },
        lengthOfBore : function(userInput) {
            controller.generalInfo.length = "Length of Bore: " + userInput;
            controller.generalInfo.date = "Date: " + Date("now");
            var message = controller.generalInfo.customerName + "<br>" +
                controller.generalInfo.date + "<br>" + controller.generalInfo.location + "<br>" +
                controller.generalInfo.conduit + "<br>" + controller.generalInfo.length;
            setTimeout(function(){
                MyAlert.render("Bore summary", message, controller.otherCrap);
            }, 100);
        },
        otherCrap : function(){
            setTimeout(function(){
                window.localStorage.setItem(controller.generalInfo.date + "-" + controller.generalInfo.location, JSON.stringify(controller.generalInfo));
                MyAlert.render("The rest is yet to come", "Someday...", function(){});
            }, 100);
        }
    };//end return
};
var controller = new BisonController();//end bisonController