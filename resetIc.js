function resetIc(parameter) {
    tellerHarBlittEndret = false;
    if(parameter != "hard"){
        this.style.display = "none";
    }
    if (besoekt.size === 0) {
        showCongratulationsMessage();
        document.getElementById("imageContainer").style.display = "none";
        document.getElementById("titleLabel").style.display = "none";
        document.getElementById("score").style.display = "none";
        return;
    }

    let randomPair = getRandom();
    let randomCountry = randomPair.country;
    let randomFlag = randomPair.flag;
    besoekt.delete(randomCountry);

    land = randomCountry;

    // Create a new Image element to preload    the image
    let preloadedImage = new Image();
    preloadedImage.src = randomFlag;

    // Once the new image is fully loaded, update the existing image element's source
    preloadedImage.onload = function () {
        // Get the existing image element
        let imageElement = document.getElementById("mainImage");
        // Update the existing image element's attributes
        imageElement.src = preloadedImage.src;
        imageElement.alt = "Another Image";
    };
    
        newInput = document.getElementById("inputBox");
        if(parameter === "hard"){
            newInput.style.display = "flex";
        } else {
            newInput.style.display = "none";
        }
        newInput.value = "";
        newInput.placeholder = "Which country";
        newInput.style.backgroundColor = 'white';

        const tall = Math.floor(Math.random() * 4) + 1;
        let liste = new Array();

        for (let i = 1; i <= 4; i++) {
            let newButton = document.getElementById("btn" + i);
            newButton.style.backgroundColor = '';  // Reset button background color
            newButton.style.border = '';  // Reset button border

            if (i === tall) {
                newButton.textContent = land;
            } else {
                newButton.textContent = getRandomFullListe().country;
                while (liste.includes(newButton.textContent) || newButton.textContent === land) {
                    newButton.textContent = getRandomFullListe().country;
                }
                liste.push(newButton.textContent);
            }
        }
        updateTotal();
        updateScore(true);
}
