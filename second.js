

// var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// let posTop = window.pageYOffset;

// console.log(myBlock.top);
// console.log(posTop);

// window.addEventListener('scroll' , function(){
//     var myBlock = document.getElementById("myBlock").getBoundingClientRect();
//     const screenHeight = window.screen.height
//     console.log(myBlock.bottom);
//     if ( (myBlock.top <= ( screenHeight / 2) && ( myBlock.bottom >= ( screenHeight / 2) ) ) ) {
//         document.getElementById("myBlock").style.backgroundColor = "lightblue";
//     }else{
//         document.getElementById("myBlock").removeAttribute("style");
        
//     }
// });

var form = document.querySelector('form');

var ul = document.getElementById('myList')

form.addEventListener('submit' , function(event){
    event.preventDefault();
    var formData = new FormData(form);
    let data = [];
    for (let entry of formData.values()) {
        
       if ( entry !== '' ) {
        data.push(entry);
       }else{
        data.push("none");
       }
       }
       data.forEach(function(item) {
        var li = document.createElement("li");
       ul.appendChild(li).innerText = item;
       console.log(li);
   });
});