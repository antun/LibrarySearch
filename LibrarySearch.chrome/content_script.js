// A generic onclick callback function.
function genericOnClick(info, tab) {
  //console.log("item " + info.menuItemId + " was clicked");
  var selectionText = info.selectionText;
chrome.tabs.create({url: 'http://encore.sfpl.org/iii/encore/search?search_btn=&formids=target&lang=eng&suite=def&reservedids=lang%2Csuite&submitmode=&submitname=&target=' + selectionText});
}

var id = chrome.contextMenus.create({title: "Search for '%s' at my local library", contexts:["selection"], "onclick": genericOnClick});

