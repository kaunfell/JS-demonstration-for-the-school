//document.addEventListener('DOMContentLoaded', function() {
    

    //Simple Javascript demonstration for the school
    //Everything works both on web page and dev tools' console


    //TASK 1
    const mainString = "asuntokionapajaa"; 
    const textArea1 = document.querySelector(".textArea1");
    const btn1 = document.querySelector(".btn1");
    const btn1Second = document.querySelector(".btn1Second");

    btn1.addEventListener("click", checkWord);

    //empty string where we store letters 
    let newString = [];

    function checkWord(){
        let inputString = document.querySelector(".inputString");
        let inputValue = inputString.value;

        //input must be at least 4 chars
        if(inputValue.length < 4){
            textArea1.innerHTML = "There must be at least 4 characters...";
            console.log("There must be at least 4 characters...")
        }
        //must not be empty
        else if(inputValue == ""){
            textArea1.innerHTML = "Try to find a word...";
            console.log("Try to find a word...")
        }
         else if( mainString.includes(inputValue)){
            textArea1.innerHTML = `Original string:  ${mainString} <br>
                        New string:   ${inputValue}`;
            console.log(`Original string: ${mainString}\nNew string: ${inputValue}`); 
            
            //first button disappears, second shows,
            //and add eventlistener
             btn1.style.display = "none";
             btn1Second.style.opacity = "1";
             btn1Second.addEventListener("click", changeWord);
         }else{
            textArea1.innerHTML = "String not found";
            console.log("String not found");
         }

         
         



         //searches every 3rd letter, changes it to uppercase and if its 'a', changes it to '*'
         function changeWord(){
            

        //looping through the original string
         for(i = 0; i < mainString.length; i++){

            
            //pushing them to an empty array
            if(i % 3 === 2){
                newString.push(mainString[i]);

            }              

             
         }

         //the created array needs to be printed and joined before replacing certain letters
         let newTest = newString.join("");
         let result = newTest.replace("a", "*").toUpperCase();

         textArea1.innerHTML = result + "<br>Took every third letter, uppercased it and turned the letter 'a' to '*'.";
         console.log(result);

        
         }

         

    }


    



    
    //TASK 2
    const btn2 = document.querySelector(".btn2");
    const ageText = document.querySelector(".ageText");

    //this triggers the function with prompt
    btn2.addEventListener("click", getAge);

    function getAge(){
        let userInput;
        
        //value "true" in the condition makes the loop trigger instantly,
        //so we do not have to trigger the prompt first outside the loop
        while(true){
            userInput = prompt("Set age between 18-22: ");
            console.log(`Task 2 user input: ${userInput}`);

            //just to check if user presses 'cancel' so it is possible to escape the prompt
            if(userInput == null){
                console.log("Hmm, you pressed 'cancel'...");
                ageText.innerHTML = "Hmm, you pressed 'cancel'...";
                break;
            }else if(userInput >= 18 && userInput <= 22){
                console.log("Old 😊")
                ageText.innerHTML = "Old 😊";
                break;
            }

        }

    }
    







    //TASK 3
    const animalArr = [ 'Dog', 'Horse', 'Cow' ];
    const animalSymbol = ['🐕', '🐎', '🐄'];
    const btn3 = document.querySelector(".btn3");
    const animals1 = document.querySelector(".animals1");
    const btn3second = document.querySelector(".btn3second");
    let animalInput = document.querySelector(".animalInput");
    const checklAnimalBtn = document.querySelector(".checkAnimalBtn");

    btn3.addEventListener("click", getAnimals);

    //get the animal array
    function getAnimals(){

       console.log("Animals in shelter: " + animalArr.toString());
       
       animals1.innerHTML = animalSymbol.join(" ").toString();
       animals1.style.border = "brown 2px solid"; 

       //make one button to disappear and another to show
       btn3second.style.opacity = "1";
       btn3second.addEventListener("click", addAnimals);
       btn3.style.opacity = "0"; 
    }


    
    
    //add animals function
    function addAnimals(){
        const animalArr2 = animalArr.map(  animal => {
            return animal;
        });
        animalArr2.push("Cat", "Sheep");    

        const animalSymbol2 = animalSymbol.map(  animal => {
            return animal;
        });
        animalSymbol2.push('🐈', '🐑' )

        
        animals1.innerHTML = animalSymbol2.join(" ").toString();
        console.log("Animals in shelter now: " + animalArr2.toString());
        


        checklAnimalBtn.style.opacity = "1";
        animalInput.style.opacity = "1";
        btn3second.style.opacity = "0";
    }
    

    //check if animal in shelter
    const animalOutput = document.querySelector(".animalOutput");
    checklAnimalBtn.addEventListener("click", checkAnimal);
    

    function checkAnimal(){

        animalInput = document.querySelector(".animalInput").value;
     
        //change the first letter of input to uppercase to match words in array (other way could have been to change the array items first letter to lowercase)
        let char = animalInput.charAt(0).toUpperCase();
        const remain = animalInput.slice(1); //every remaining letter but not the first
        animalInput = char + remain;


        if(animalInput === ""){
            console.log(`Hey, check if an animal exists in our shelter`);
            animalOutput.innerHTML = `Hey, check if an animal exists in our shelter`;

        }else if(animalArr.includes(animalInput)){
            console.log(`Search result: ${animalInput} found`);
            animalOutput.innerHTML = `We have a ${animalInput} here`;

        }else{
            console.log(`Search result: ${animalInput} not found`);
            animalOutput.innerHTML = `We do not have a ${animalInput} here`;
        }
        
        
    }
    





    //TASK 5
    const date1 = new Date();
    const addText5 = document.querySelector(".addText5");
    const linkDate = document.querySelector(".linkDate");

    const btn5 = document.querySelector(".btn5");
    btn5.addEventListener("click", getDate);

    function getDate(){
        linkDate.style.visibility ="visible";
        addText5.innerHTML = "Date: " + date1;
        console.log("Date: " + date1);
    }





    //TASK 6
    const addText6 = document.querySelector(".addText6");
    const btn6 = document.querySelector(".btn6");
    btn6.addEventListener("click", changeText);

    function changeText(){
        addText6.innerHTML = "Ad astra per aspera";
        console.log("Ad astra per aspera");
    }


    
    //TASK 7
    let rowNum = 3;
    const btn7 = document.querySelector(".btn7");

    function insert_Row(){
       
        
        const sampleTable = document.querySelector("#sampleTable");
        let row = document.createElement("tr");
        const data1 = document.createElement("td");
        const data2 = document.createElement("td");

        //one way to add text to cells
        //const textRow = document.createTextNode("Row" + rowNum );

        data1.innerHTML = "Row" + rowNum + " cell1";
        data2.innerHTML = "Row" + rowNum + " cell2";

        //adding the cells/data to the row
        row.appendChild(data1);
        row.appendChild(data2)

        //counting the rows
        rowNum ++;
        console.log(rowNum);

   
         
        //finally adding everything to the parent table
        sampleTable.appendChild(row);    

        if(rowNum >= 8){
            row.innerHTML ="Cannot add more.";
            console.log("Do not add more...");
            btn7.removeEventListener("click", insert_Row)
            //prevents for adding more rows
            if(rowNum >= 9){
                row.remove();
                
            }
            
        }
    }







    //TASK 8
    let optionList = document.getElementById("optionList");
    const picture = document.getElementById("imgPath");
    const message = document.querySelector(".messageListP");
    const gnomeBtn = document.querySelector(".gnomeBtn");

    optionList.addEventListener("onchange", changeRose)

    function changeRose(){

            //the picture changes based on the value
            if(optionList.value == "red"){       
                picture.src= "./resources/img/Rose-red.jpg";    
            }else if(optionList.value === "yellow"){
                picture.src= "./resources/img/Rose-yellow.jpg";
            }else{
                picture.src= "./resources/img/Rose-pink.jpg";
            }

    }

    //makes the img grow
    function hoverPicture(){
    picture.style.transition = " width 2s, height 6s";
    picture.style.height= "";
    picture.style.width = "250px";
        //this makes the messageList func to trigger only if hovering
        //on the picture, BUT it does NOT make any difference in this example,
        //because the hovering is always happening, but this is just to
        //show that it is possible to put functions inside other functions to meet certain conditions
       picture.addEventListener("click", messageList);
    }

    //sets the img to normal
    function normalPicture(){
        picture.style.height = "";
        picture.style.width = "150px";

       
        //clears the messages when hovering out from the picture
        message.innerHTML ="";
    }

    
    //adds the message
    function messageList(){
       
        message.innerHTML += "\nNo need to click the picture";
        //scrolls to the message
        message.scrollIntoView();
        
    }


//});