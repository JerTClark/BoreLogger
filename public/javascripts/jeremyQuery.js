/**
 * Created by Clark on 12/16/2014.
 */
function over(elem){
    jQ(elem).siblings("article").children(".hiddenDescription").slideDown(200);
}
function unZoom(elem){
    jQ(elem).siblings("article").children(".hiddenDescription").slideUp(200);
}
function moveBackward(elem) {
    jQ(elem).toggleClass("hovered");
    jQ(elem).siblings("button").toggleClass("moveBack");
}
function moveForward(elem) {
    jQ(elem).toggleClass("hovered");
    jQ(elem).siblings("button").toggleClass("moveBack");
}
function noFade(elem){
    jQ(elem).removeClass("fade");
    //jQ("#scratchPad").addClass("hidden");
}
function fade(elem){
    jQ(elem).addClass("fade");
    //jQ("#scratchPad").removeClass("hidden");
}
function toggleContent() {
    jQ(".content").toggleClass("outro");
    jQ("#dialog_overlay").toggleClass("gone");
    jQ("#scratchPad").toggleClass("hidden");
}
function drillBitHover(){
    var drillBit = jQ("#drillBit");
    drillBit.removeClass(function(){
        return drillBit.attr("class");
    });
}
function stopDrilling(){
    var drillBit = jQ("#drillBit");
    drillBit.addClass("unHovered");
    console.log("unHovered");
}