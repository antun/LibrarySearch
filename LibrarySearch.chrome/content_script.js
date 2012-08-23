// A generic onclick callback function.
function genericOnClick(info, tab) {
    //console.log("item " + info.menuItemId + " was clicked");
    var selectionText = info.selectionText;
    var libraryUrl = localStorage["localLibrary"];
    // TODO: This is very crude. I'm not sure how to clear the localStorage on my computer so
    // that I could test what would happen with a brand new install. For now, default to SF
    // library.
    if (!libraryUrl) {
        libraryUrl = "http://encore.sfpl.org/iii/encore/search?search_btn=&formids=target&lang=eng&suite=def&reservedids=lang%2Csuite&submitmode=&submitname=&target=";
    }
    chrome.tabs.create({url: libraryUrl + selectionText});
}

var id = chrome.contextMenus.create({title: "Search for '%s' at my local library", contexts:["selection"], "onclick": genericOnClick});
