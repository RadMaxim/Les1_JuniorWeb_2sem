let startTimer1 = Date.now();

$(function () {
  console.log(`JQuery ${Date.now() - startTimer1} milliseconds`);
//   alert("JQuery: load срабатывает позже, после полной загрузки всех ресурсов страницы (картинок, CSS, iframe и других)")

});

let startTimer2 = Date.now();
//примерно в 2 раза быстрее
//load срабатывает позже, после полной загрузки всех ресурсов страницы (картинок, CSS, iframe и других).
window.addEventListener("load", () => {
    console.log(`JS: ${Date.now() - startTimer2} milliseconds`);
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("header_container").style.display = "block";
    alert("load срабатывает позже, после полной загрузки всех ресурсов страницы (картинок, CSS, iframe и других)")
    
});
document.addEventListener("DOMContentLoaded", () => {
   
    // document.getElementById("load").style.display="block";
    alert("срабатывает раньше, как только документ загружен и распарсен.")
  console.log(" срабатывает раньше, как только документ загружен и распарсен.");
//   document.getElementById("load").style.display="none";
});



let startTimer3 = Date.now();
$(function () {
  $("p").css("color", "blue"); // Поиск всех <p> и изменение их стиля
});

console.log(`Время работы jquery: ${Date.now() - startTimer3}`);
let startTimer4 = Date.now();
Array.from(document.getElementsByTagName("p")).forEach((element) => {
  element.style.color = "red";
});
console.log(`Время сработки классики: ${Date.now() - startTimer4}`);