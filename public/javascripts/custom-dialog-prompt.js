/**
 * Created by Clark on 11/26/2014.
 */
//-- A custom alert
function CustomAlert(){
    var alertFunction;
    this.render = function(title, message, cancelCallback){
        alertFunction = cancelCallback;

        var dialogOverlay = jQuery("#dialog_overlay");
        dialogOverlay.removeClass("gone");

        document.getElementById('dialog_box_head').innerHTML = title;
        document.getElementById('dialog_box_body').innerHTML = message;
        document.getElementById('dialog_box_foot').innerHTML = '<button class="dialog_button" onclick="MyAlert.ok()">OK</button>';
    };
    this.ok = function(elem){
        alertFunction();
        jQuery("#dialog_overlay").toggleClass("gone");
    }
} var MyAlert = new CustomAlert();

//-- A custom prompt
function CustomPrompt(model, title, hint, continueCallback, cancelCallback, $scope){
    self = this;
    this.continueCB = continueCallback;
    this.cancelCB = cancelCallback;
    this.render = function(){
        var dialogOverlay = jQuery("#dialog_overlay");
        dialogOverlay.removeClass("gone");

        //'<br><input id="prompt_value1" placeholder=' + hint +'>'
        var hintHTML = "<br><input id=\"prompt_value1\" "+ model + " placeholder=\"" + hint +"\">";
        console.log(hintHTML);

        document.getElementById('dialog_box_head').innerHTML = title;
        document.getElementById('dialog_box_body').innerHTML = hintHTML;
        document.getElementById('dialog_box_foot').innerHTML = '<button class="dialog_button" ng-click="lo" onclick="Prompt.ok()">OK</button> <button class="dialog_button" onclick="Prompt.cancel()">Cancel</button>';
        jQuery('#prompt_value1').andSelf().focus();
    };
    this.cancel = function(){
        self.cancelCB();
        jQuery('#dialog_overlay').toggleClass("gone");
    };
    this.ok = function(){
        var prompt_entry = document.getElementById('prompt_value1').value;
        //console.log(prompt_entry);
        self.continueCB(prompt_entry);
        jQuery('#dialog_overlay').toggleClass("gone");
    }
}
var Prompt = new CustomPrompt();