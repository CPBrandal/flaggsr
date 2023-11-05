function resetIc(){
    if(besoekt.size == 0){
        showCongratulationsMessage();
        document.getElementById("imageContainer").style.display = "none";
        document.getElementById("titleLabel").style.display = "none";
        document.getElementById("score").style.display = "none";
        return;
    }
    let randomFlag = "";
    let randomCountry = "";
    let randomPair = getRandom();
    randomCountry = randomPair.country;
    randomFlag = randomPair.flag;
    besoekt.delete(randomCountry);

    land = randomCountry;
    
    // When input matches the expected value, replace the image
    let imageContainer = document.getElementById("imageContainer");
    let newImage = document.createElement("img");
    newImage.id = "newImage";
    newImage.src = randomFlag; 
    newImage.alt = "Another Image";

    newInput = document.createElement("input");
    newInput.type = "text";
    newInput.style.display = "none";
    newInput.placeholder = "Which country";

    // Clear the container and add new elements
    imageContainer.innerHTML = "";
    imageContainer.appendChild(newImage);
    imageContainer.appendChild(newInput);

    const tall = Math.floor(Math.random() * 4) + 1;
    let liste = new Array();

    for (let i = 1; i <= 4; i++) {
    const newButton = document.createElement("button");
    newButton.id = "btn" + i;
    if(i === tall){
        newButton.textContent = land; 
    } else {
        newButton.textContent = getRandomFullListe().country;
        while(liste.includes(newButton.textContent) || newButton.textContent === land){
            newButton.textContent = getRandomFullListe().country;
        }
        liste.push(newButton.textContent);
    }
    // Add a click event listener to the new button
    newButton.addEventListener("click", knapp);

    // Append the new button to the imageContainer
    imageContainer.appendChild(newButton);
    }

    newInput.addEventListener("focus", () => {
    newInput.style.opacity = 0;
    setTimeout(() => newInput.style.opacity = 1);
    });

    newInput.addEventListener("keydown", handleInput);
    updateScore(true);
}