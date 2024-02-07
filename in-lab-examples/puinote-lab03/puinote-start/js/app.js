// Todo: try console.log
console.log("start inplementation");
updateElement();
// Todo: create an updateElement() function that can modify HTML elements
function updateElement(){
    //Check if function created corectly: console.log("update element created checkpoint");
    //get image into JS: notecard.element selects specific ID and class
    const noteImageElement = notecard.element.querySelector(".notecard-thumbnail");
    //Check that image is properly selected: console.log(noteImageElement);
    //Catch other changes:
    const noteTitleElement = notecard.element.querySelector(".note-title");
    const noteBodyElement = notecard.element.querySelector(".note-body");
    //Change the image dynamically: 
    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = "Wow this is confusing but with practice it won't be";
    //Check that image is changed: console.log("noteImageElement");
}
// Todo: create a submitNote() function to grab user input and update notecard
function submitNote(){
    const editorTitleElement = document.querySelectior("")
}
// Todo: create an object
let notecard = {
    noteTitle: "This is the title of the note",
    noteBody: "Body of note";
    noteImageUrl: "assets/warhol-frog.png",
}

// Todo: grab a specific notecard element

// Todo: add a click event