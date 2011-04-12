function conlog(x) {
  if (typeof(console) != "undefined") {
    console.log(x);
  }
  else
    if (window.location.hostname == "localhost" ||
        window.location.hostname == "127.0.0.1"    ) {
          alert("console called when inactive");
        }
  else {
    //do nothing
  }
  return;
}

