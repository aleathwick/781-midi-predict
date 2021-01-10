//  console.log(Object.keys(selectedFile));

const validExtensions = ['mid', 'midi']
fInfo = document.getElementById('fInfo')

function fileReceived() {
    const selectedFile = this.files[0];
    if (validExtensions.indexOf(selectedFile.name.split('.').pop()) >= 0) {
        
        const reader = new FileReader();
        midiBin = reader.readAsBinaryString(selectedFile);
        const midi = new Midi(midiBin);

        midi.tracks.forEach(track => {
            //tracks have notes and controlChanges
          
            //notes are an array
            const notes = track.notes;
            notes.forEach(note => {
                fInfo.innerHTML = 'failed?';
                fInfo.innerHTML = note.name;
              //note.midi, note.time, note.duration, note.name
            })
        })


    } else {
        alert(`The file extension ${selectedFile.name.split('.').pop()} is invalid, must be in ${validExtensions}`)
    }
}

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", fileReceived, false);