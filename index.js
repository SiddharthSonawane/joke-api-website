const xhr = new XMLHttpRequest();

xhr.open("GET", "https://official-joke-api.appspot.com/random_joke", true);

xhr.onload = function () {
  let data = JSON.parse(this.responseText);
  let setup = data.setup;
  let punchLine = data.punchline;
  document.getElementById("setup").innerHTML = setup;
  setTimeout(function () {
    document.getElementById("punchline").innerHTML = punchLine;
  }, 5000);
};

xhr.send();
