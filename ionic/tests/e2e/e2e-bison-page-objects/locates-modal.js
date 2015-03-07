/**
 * Constructor for the locates modal page object
 * A template passed to bisonFormButtonPanel directive
 */
module.exports = function () {
    return {
        test: 1 + 2,
        locatesModalTitle: element(by.id("locates-modal-title")),
        closeButton: element(by.id("close-locates-modal")),
        showDeleteButton: element(by.id("locates-modal-show-delete-button")),
        showReorderButton: element(by.id("locates-modal-show-reorder-button")),
        feetInput: element(by.id("feet")),
        inchesInput: element(by.id("inches")),
        topButton: element(by.id("locates-modal-top-button")),
        bottomButton: element(by.id("locates-modal-bottom-button")),
        showLocatesButton: element(by.id("locates-modal-show-content")),
        showHeaderSpan: element(by.id("modal-show-header")),
        hideHeaderSpan: element(by.id("modal-hide-header")),
        popupInput: element(by.id("popupInput")),
        popupCancelButton: element(by.buttonText("Cancel")),
        popupEnterButton: element(by.buttonText("Enter")),
        allLocates: element.all(by.repeater("value in modal.values"))
    }
};