function checker(){
  if (document.getElementById("checker").checked == true) {
  document.getElementById("meme").style.display = "inline";
  console.log("Ja")
  } else {
    document.getElementById("meme").style.display = "none";
    console.log("Nein")
  }
}

checker()
