var canvas2 = document.getElementById('canvas1');
var c = canvas2.getContext('2d');

canvas2.width = 300;
canvas2.height = 300;

//create empty array
var images = [];
images.length = 10;

//push the images into array

for(var i = 1 ; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'img/Walk (' + i.toString() + ').png';
}
var i = 1;
setInterval(function(){
    i++;
    if( i >= 10){
        i = 1;
    }
    c.drawImage(images[i],100,100,100,100);
},100)