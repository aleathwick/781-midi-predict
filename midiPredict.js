function fileReceived() {
 const selectedFile = this.files[0];
 document.getElementById('fInfo').innerHTML=selectedFile.name;
 console.log('loaded file')
 console.log(Object.keys(selectedFile));
}

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", fileReceived, false);