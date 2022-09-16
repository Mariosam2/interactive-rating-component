const submit = document.getElementById("submit");
const rating = document.getElementsByClassName("rating");

var rating_value = 0;


for (let i = 0; i < rating.length; i++){
    rating[i].addEventListener("click", function(){
        
        if (!(rating[i].classList.contains("active"))) {
            rating[i].classList.add("active");
            for (let k = i - 1; k >= 0; k--){
                rating[k].classList.remove("active");
            }
            for (let j = i + 1; j < rating.length; j++){
                rating[j].classList.remove("active");
            }
            rating_value = i + 1;

        } else {
            rating[i].classList.remove("active");
        }
        
    });



};


submit.addEventListener("click", function() {
    window.localStorage.setItem('rating', rating_value);
    window.localStorage.setItem('rating_max', rating.length);
    
});












