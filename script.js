const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");
const btnClear = document.querySelector("#clear");
const key = document.querySelector("#key");

const listLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                    "u", "v", "w", "x", "y", "z"];

let newText = "";

btnEncrypt.addEventListener("click", () => {
    const textarea = document.querySelector("#text");
    const keyValue = Number(key.value);

    // Loop through every letter in the text area
    for (const letter of textarea.value){

        // Check if the letter is an alphabetical letter in listLetter
        if (!listLetter.includes(letter)){
            continue
        }

        if (keyValue < 0){
            continue
        }

        const indexLetter = listLetter.findIndex((item) => item === letter);

        // Encryption operation
        let indexNewLetter = indexLetter + keyValue;

        if (indexNewLetter > 25){ // Last alphabet index reached, go back to index 1
            indexNewLetter -=26;
        }

        newText += listLetter[indexNewLetter];
        textarea.value = newText;
    }
    newText = "";
})

btnDecrypt.addEventListener("click", () => {
    const textarea = document.querySelector("#text");
    const keyValue = Number(key.value);

    // Loop through every letter in the text area
    for (const letter of textarea.value){

        // Check if the letter is an alphabetical letter in listLetter
        if (!listLetter.includes(letter)){
            continue
        }
        
        if (keyValue < 0){
            continue
        }

        const indexLetter = listLetter.findIndex((item) => item === letter);

        // Decryption operation
        let indexNewLetter = indexLetter - keyValue;

        if (indexNewLetter < 0){
            indexNewLetter +=26;
        }

        newText += listLetter[indexNewLetter];
        textarea.value = newText;
    }
    newText = "";
})

btnClear.addEventListener("click", () => {
    const textarea = document.querySelector("#text");
    textarea.value = "";
})