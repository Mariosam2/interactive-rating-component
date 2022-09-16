const selected = document.getElementById("selected");
selected.innerHTML = "You selected " + window.localStorage.getItem('rating') + " out of " + window.localStorage.getItem('rating_max');