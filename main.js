'use strict';

alert('WELCOME TO SMESHARIKI MANIA !')
var isReady = confirm('ARE YOU READY ?')

var mandarin = document.getElementById ('mandarin');
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var list = document.getElementById('list');
var body = document.getElementById('body');

var resultText = document.getElementById('result');
var timeText = document.getElementById('timeText');
var amount = 0;

list.addEventListener('click' , function(event){

    var target = event.target;
    mandarin.style.display= 'block';
    if (target.classList.contains('hero')) {
        var img = target.dataset.src;
        mandarin.src = img ;
        var color = target.dataset.color;
        body.className = '';
        body.classList.add(color);
    }
    if ((isReady) && ( selectHero())){
        clearInterval(timer);
        mandarinTimer = setInterval(function(){
        mandarin.style.top = Math.round(Math.random()*90) + '%';
        mandarin.style.left = Math.round(Math.random()*90) + '%';
    } , 1000);
    
    var mandarinTimer;
    mandarin.addEventListener('click', function(){

        ++amount;
        clearInterval(mandarinTimer);
        mandarin.style.top = Math.round(Math.random()*90) + '%';
        mandarin.style.left = Math.round(Math.random()*90) + '%';
        resultText.innerText = 'You collected ' + amount + ' SMESHARIKI';
        mandarinTimer = setInterval(function(){
            mandarin.style.top = Math.round(Math.random()*90) + '%';
            mandarin.style.left = Math.round(Math.random()*90) + '%';
        } , 1000);
    });
    
    var gameTime = 10;
    var startTime = new Date().getTime();
    
    var timer = setInterval(function(){
        var currentTime = new Date().getTime();
        var difference = currentTime - startTime;
        var seconds = Math.round(difference/1000);
        
        if ( seconds === gameTime) {
            clearInterval(timer);
            timeText.innerText = 'END';
            mandarin.style.display= 'none';
            // clearInterval(mandarinTimer);
        }else{
            timeText.innerText = gameTime - seconds;
        }
    } , 1000);
    
    }
});

function selectHero(){
if ( mandarin.getAttribute('src') === '' ) {
    return false;
} else{
    return true;
};
};

var btn = document.getElementById('myButton');

btn.addEventListener('click' , function(){
    location.reload();
    console.log(btn);
});