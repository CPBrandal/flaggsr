function resetIc() {
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

    // Get the existing image element
    let imageElement = document.getElementById("mainImage");

    // Store the old image source in a temporary variable
    let oldSrc = imageElement.src;

    // Update the existing image element's attributes with a placeholder or loading image
    imageElement.src = "w2560/ad.png"; // Replace 'loading.gif' with your actual loading image source
    imageElement.alt = "Another Image";

    // Add an event listener to the image to track when it's fully loaded
    imageElement.addEventListener('load', function () {
        // Once the new image is fully loaded, update the src attribute
        imageElement.src = randomFlag;
    });

    newInput = document.getElementById("inputBox");
    newInput.style.display = "none";
    newInput.placeholder = "Which country";

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
    updateScore(true);
}
