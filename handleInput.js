function handleInput(event) {
                
    if (event.key === "Enter") {
        let expectedValue = land;
        if (this.value.toLowerCase() === expectedValue.toLowerCase() || this.value.toLowerCase() === "idontknow") {
            window.scrollTo(0, 100);
            correct.pause();
            correct.currentTime = 0;
            correct.play();
            scrollTo(top);
            teller += 1;
            let randomFlag = "";
            let randomCountry = "";


            let randomPair = getRandom();
            randomCountry = randomPair.country;
            randomFlag = randomPair.flag;
            besoekt.delete(randomCountry);

            if(besoekt.size == 0){
                showCongratulationsMessage();
                document.getElementById("imageContainer").style.display = "none";
                document.getElementById("titleLabel").style.display = "none";
                document.getElementById("score").style.display = "none";
                return;
            }

            land = randomCountry;
            // When input matches the expected value, replace the image
            let imageContainer = document.getElementById("imageContainer");
            let newImage = document.createElement("img");
            newImage.id = "newImage";
            newImage.src = randomFlag; 
            newImage.alt = "Another Image";

            newInput = document.createElement("input");
            newInput.type = "text";
            newInput.placeholder = "Which country";

            // Clear the container and add new elements
            imageContainer.innerHTML = "";
            imageContainer.appendChild(newImage);
            imageContainer.appendChild(newInput);
            
            const tall = Math.floor(Math.random() * 4) + 1;
            let liste = new Array();

            for (let i = 1; i <= 4; i++) {
                const newButton = document.createElement("button");
                newButton.style.display = "none";
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

            newInput.focus();
            updateScore(true);
            newInput.addEventListener("keydown", handleInput);
        } else {
            wrong.pause();
            wrong.currentTime = 0;
            wrong.play();
            let randomFlag = "";
            let randomCountry = "";

            let randomPair = getRandom();
            randomCountry = randomPair.country;
            randomFlag = randomPair.flag;
            besoekt.delete(randomCountry);
            
            if (modul === 0) {
                besoekt = new Map(countryFlagMap);
            } else if (modul === 1) {
                besoekt = new Map(euFlagMap);
            } else if (modul === 2) {
                besoekt = new Map(afFlagMap);
            } else if (modul === 3) {
                besoekt = new Map(asFlagMap);
            } else if (modul === 4) {
                besoekt = new Map(amFlagMap);
            }

            land = randomCountry;
            
            // When input matches the expected value, replace the image
            let imageContainer = document.getElementById("imageContainer");
            let newImage = document.createElement("img");
            newImage.id = "newImage";
            newImage.src = randomFlag; 
            newImage.alt = "Another Image";

            newInput = document.createElement("input");
            newInput.type = "text";
            newInput.placeholder = "Which country";

            // Clear the container and add new elements
            imageContainer.innerHTML = "";
            imageContainer.appendChild(newImage);
            imageContainer.appendChild(newInput);

            const tall = Math.floor(Math.random() * 4) + 1;
            let liste = new Array();

            for (let i = 1; i <= 4; i++) {
                const newButton = document.createElement("button");
                newButton.style.display = "none";
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

            newInput.focus();
            updateScore(false);
            newInput.addEventListener("keydown", handleInput);
        }
    }
}
