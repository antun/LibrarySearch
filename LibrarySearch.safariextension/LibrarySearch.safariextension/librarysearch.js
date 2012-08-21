document.addEventListener("contextmenu", handleRightClick, false);

function handleRightClick(msgEvent) {
    var sel = '';
    sel = window.parent.getSelection()+'';
    // Strip leading and trailing whitespace.
    sel = sel.replace(/^\s+|\s+$/g,"");
    safari.self.tab.setContextMenuEventUserInfo(msgEvent, sel);
}
