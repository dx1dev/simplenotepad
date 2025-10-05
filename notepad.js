feather.replace();

const notepadDiv = document.querySelector("#notepadDiv");

// TOP BAR SELECTS
const fileSelect = document.querySelector("#fileSelect");
const viewSelect = document.querySelector("#viewSelect");
const editSelect = document.querySelector("#editSelect");
const insertSelect = document.querySelector("#insertSelect");
const helpSelect = document.querySelector("#helpSelect");

fileSelect.addEventListener("change", function(e) {
    const selectedOption = e.target.value;
    e.target.querySelector(".selectTitle").selected = true; // Reset to select title

    switch (selectedOption) {
        case "save":
            const confirmSave = window.confirm("Are you sure? Saving will overwrite your previous saved note.");
            if (!confirmSave) {return;};

            localStorage.setItem("savedNote", notepadDiv.innerHTML);
            break;
        case "load":
            const confirmLoad = window.confirm("Are you sure? Loading will delete your current note.");
            if (!confirmLoad) {return;};

            const savedNoteHTML = localStorage.getItem("savedNote");
            notepadDiv.innerHTML = savedNoteHTML;
            break;
        case "clear":
            const confirmClear = window.confirm("Are you sure? This can't be undone.");
            if (confirmClear) {
                notepadDiv.innerHTML = "";
            }
            break;
    }
})

viewSelect.addEventListener("change", function(e) {
    const selectedOption = e.target.value;
    e.target.querySelector(".selectTitle").selected = true; // Reset to select title

    switch (selectedOption) {
        case "darkMode":
            document.body.style.background = "#151515";
            notepadDiv.style.color = "white";
            break;
        case "lightMode":
            document.body.style.background = "white";
            notepadDiv.style.color = "black";
            break;
        case "bigZoom":
            notepadDiv.style.fontSize = "35px";
            break;
        case "smallZoom":
            notepadDiv.style.fontSize = "20px";
            break;
        case "resetZoom":
            notepadDiv.style.fontSize = "25px";
            break;
    }
})

editSelect.addEventListener("change", function(e) {
    const selectedOption = e.target.value;
    document.execCommand(selectedOption, false);
    e.target.querySelector(".selectTitle").selected = true; // Reset to select title
})

insertSelect.addEventListener("change", function(e) {
    const selectedOption = e.target.value;
    e.target.querySelector(".selectTitle").selected = true; // Reset to select title

    switch (selectedOption) {
        case "insertImage":
            const imageURL = window.prompt("Enter image URL:");
            if (imageURL == null || imageURL == "") {window.alert("Invalid URL"); return;};
            document.execCommand("insertImage", false, imageURL);
            break;
        case "insertYoutubeVideo":
            const videoID = window.prompt("Enter YouTube video ID:");
            if (videoID == null || videoID == "") {window.alert("Invalid ID"); return;};

            const videoIframe = "<iframe width='400' height='225' src='https://www.youtube.com/embed/" + videoID + "' frameborder='0' allowfullscreen></iframe>";
            document.execCommand("insertHTML", false, videoIframe);

            break;
    }
})

helpSelect.addEventListener("change", function(e) {
    const selectedOption = e.target.value;
    e.target.querySelector(".selectTitle").selected = true; // Reset to select title

    switch (selectedOption) {
        case "github":
            window.open("https://github.com/dx1dev/simplenotepad");
            break;
    }
})
