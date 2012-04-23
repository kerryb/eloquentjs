while (true) {
  var answer = prompt("What is 2 + 2?");
  if (answer == "4") {
    alert("Ooh, aren't you clever?");
    break;
  } else if (answer == "3" || answer == "5") {
    alert("Almost!");
  } else {
    alert("You're an idiot.");
  }
}
