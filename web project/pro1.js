function calculate() {

  const calories = document.getElementById("calories").value;

   const  protein = Math.round(calories * 0.3 / 4); 
   const  fat = Math.round(calories * 0.2 / 9); 
   const  carbs = Math.round(calories * 0.5 / 4);

    document.getElementById("tableBody").children[0].children[0].innerHTML = protein;
    document.getElementById("tableBody").children[0].children[1].innerHTML = carbs;
    document.getElementById("tableBody").children[0].children[2].innerHTML = fat;
    document.getElementById("tableBody").children[1].children[0].innerHTML = protein;
    document.getElementById("tableBody").children[1].children[1].innerHTML = carbs;
    document.getElementById("tableBody").children[1].children[2].innerHTML = fat;
    document.getElementById("tableBody").children[2].children[0].innerHTML = protein;
    document.getElementById("tableBody").children[2].children[1].innerHTML = carbs;
    document.getElementById("tableBody").children[2].children[2].innerHTML = fat;
  }