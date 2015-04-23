/**
 * Constructor for the edit locates modal page object
 * Template passed to bisonFormButtonPanel
 */
module.exports = function () {
    return {
        test: 1 + 2,
        editLocatesModalTitle: element(by.id("edit-locates-modal-title")),
        editLocatesModalCloseButton: element(by.id("close-edit-locates-modal")),
        editLocatesModalShowDeleteButton: element(by.id("edit-locates-show-delete-button")),
        editLocatesModalShowReorderButton: element(by.id("edit-locates-show-reorder-button")),
        editLocatesModalPopupInput: element(by.id("popupInput")),
        editLocatesModalPopupCancelButton: element(by.cssContainingText("button-positive","Cancel")),
        editLocatesModalPopupEnterButton: element(by.cssContainingText("button-positive","Enter"))
    }
};