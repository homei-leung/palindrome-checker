const textInput = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
const output = document.getElementById("result");

function checkPalindrome(input){
    const userInput = input;

    //If there is no text, display an alert.
    if (input === ""){
        alert("Please input a value.");
        return;
    };

    //Remove the previous output.
    output.replaceChildren();

    //Remove the punctuation, spacing, and case from the input.
    const cleanInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    //Reverse cleanInput.
    const reverseInput = [...cleanInput].reverse().join("");

    //If cleanInput is the same as cleanInput.reverse, it is a palindrome.
    const outputMessage = cleanInput === reverseInput ? `${userInput} is a palindrome.` : `${userInput} is not a palindrome.`;

    //Create a p element in result div.
    const pElement = document.createElement("p");
    pElement.innerHTML = outputMessage;
    output.appendChild(pElement);
    //Show the result div.
    output.removeAttribute("hidden");

    //Move avatar down next to result div.
    document.getElementById("avatar").style.gridRowStart = 3;
};

//Run checkPalindrome when submitButton is clicked.
submitButton.addEventListener("click", () => {
    checkPalindrome(textInput.value);
    textInput.value = "";
});

//Run checkPalindrome when enter key is pressed.
textInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter'){
        checkPalindrome(textInput.value);
        textInput.value = "";
    }
});