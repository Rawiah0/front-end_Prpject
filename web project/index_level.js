// pop-up window
function toggle(){
    var blur = document.getElementById('page-wrapper');
    blur.classList.toggle('active');
    var popup = document.getElementById('pop-up');
    popup.classList.toggle('active');
}

// level pages 
let cardsBar = document.querySelectorAll(".cards li");
let cardsArray = Array.from(cardsBar);
let content = document.querySelectorAll(".days > div");
let contentArray = Array.from(content);
cardsArray.forEach((ele) => {
    ele.addEventListener("click", function(e){
        cardsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        contentArray.forEach((div)=>{
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display="block";
    });
});