// js dom box color change
// variable declear start
let boxFristOne = document.querySelector(".box_item_one .box_one");
let boxFristTwo = document.querySelector(".box_item_one .box_two");
let boxSecoundtOne = document.querySelector(".box_item_two .box_one");
let boxSecoundtwo = document.querySelector(".box_item_two .box_two");
let boxBtnOne = document.getElementById("btn_one");
let boxBtnTwo = document.getElementById("btn_two");

// variable declear end

// box one js  class add & remove class code

boxBtnOne.addEventListener("click", function(){
    boxFristOne.classList.add("box_color_one");
    boxFristOne.classList.remove("box_one")
    boxFristTwo.classList.add("box_color_two");
    boxFristTwo.classList.remove("box_two")
})

boxBtnTwo.addEventListener("click", function(){
boxSecoundtOne.classList.toggle("box_color_two");
boxSecoundtwo.classList.toggle("box_color_one");
})

