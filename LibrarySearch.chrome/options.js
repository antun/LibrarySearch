
// Saves options to localStorage.
function save_options() {
    var select = document.getElementById("localLibrary");
    var localLibrary = select.children[select.selectedIndex].value;
    localStorage["localLibrary"] = localLibrary;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
        status.innerHTML = "";
    }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
    var favorite = localStorage["localLibrary"];
    if (!favorite) {
        return;
    }
    var select = document.getElementById("localLibrary");
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == favorite) {
        child.selected = "true";
        break;
        }
    }
}

// NOTE: The Google docs (https://developer.chrome.com/extensions/contentSecurityPolicy.html#H3-1)
// suggest using this clickHandler, but they don't explain why. In my testing 
// so far, the options are saved succesfully without it.
/*
function clickHandler(e) {
  setTimeout(save_options, 1000);
}
*/

document.addEventListener('DOMContentLoaded', function () {
    restore_options();
    //document.getElementById("saveButton").addEventListener('click', clickHandler);
    document.getElementById("saveButton").addEventListener('click', save_options);

});


