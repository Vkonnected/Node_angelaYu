console.log("this is my demo app");


let addnotebutton = document.getElementById('addnotebutton');
addnotebutton.addEventListener("click", function(e) {

    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobject = [ ] ;
    } 
    else {
        notesobject = JSON.parse(notes);
    }
    notesobject.unshift(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobject));
    addtext.value = "" ;
    console.log(notesobject);
})





///References-
