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
//function toggleContent() {
//    jQ(".content").toggleClass("outro");
//    jQ("#new_bore_log_overlay").removeClass("gone");
//    jQ("#scratchPad").toggleClass("hidden");
//}
function noFade(elem){
    jQ(elem).removeClass("fade");
}
function fade(elem){
    jQ(elem).addClass("fade");
}
function toggleContent() {
    jQ(".content").toggleClass("outro");
    jQ("#dialog_overlay").toggleClass("gone");
    jQ("#scratchPad").toggleClass("hidden");
}