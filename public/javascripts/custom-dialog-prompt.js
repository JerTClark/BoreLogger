/**
 * Created by Clark on 11/26/2014.
 */
//-- A custom alert
function CustomAlert(){
    var alertFunction;
    this.render = function(title, message, someFunction){
        alertFunction = someFunction;
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialog_overlay');
        var dialogbox = document.getElementById('dialog_box');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (350 * .5)+"px";
        dialogbox.style.top = "100px";
        $('#dialog_overlay').fadeIn(300);
        $('#dialog_box').slideDown(200);
        dialogbox.style.display = "block";
        document.getElementById('dialog_box_head').innerHTML = title;
        document.getElementById('dialog_box_body').innerHTML = message;
        document.getElementById('dialog_box_foot').innerHTML = '<button class="dialog_button" onclick="MyAlert.ok()">OK</button>';
    };
    this.ok = function(){
        alertFunction();
        $('#dialog_overlay').fadeOut(300);
        $('#dialog_box').slideUp(200);
    }
} var MyAlert = new CustomAlert();

//-- A custom prompt
function CustomPrompt(){
    var continueCB;
    var cancelCB;
    this.render = function(title, hint, continueCallback, cancelCallback){

        continueCB = continueCallback;
        cancelCB = cancelCallback;

        var dialogOverlay = $("#dialog_overlay");
        dialogOverlay.removeClass("gone");

        //'<br><input id="prompt_value1" placeholder=' + hint +'>'
        var hintHTML = "<br><input id=\"prompt_value1\" placeholder=" + hint +">";
        document.getElementById('dialog_box_head').innerHTML = title;
        document.getElementById('dialog_box_body').innerHTML = hintHTML;
        document.getElementById('dialog_box_foot').innerHTML = '<button class="dialog_button" onclick="Prompt.ok()">OK</button> <button class="dialog_button" onclick="Prompt.cancel()">Cancel</button>';
        $('#prompt_value1').andSelf().focus();
    };
    this.cancel = function(){
        cancelCB();
        $('#dialog_overlay').toggleClass("gone");
    };
    this.ok = function(){
        var prompt_entry = document.getElementById('prompt_value1').value;
        continueCB(prompt_entry);
        $('#dialog_overlay').toggleClass("gone");
    }
} var Prompt = new CustomPrompt();