var btn = document.querySelector("#btn");
var input = document.querySelector("#txt-a1");
var output = document.querySelector("#txt-a2");

var serverUrl = "https://api.funtranslations.com/translate/german-accent.json";

function myUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error){
  console.log("Error occured : ",error);
  alert("Something went wrong with server, please try again after some times");
}


function clickHandler() {
  var inputText = input.value;

  fetch(myUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
}

btn.addEventListener("click", clickHandler);
