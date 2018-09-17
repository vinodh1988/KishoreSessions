function slideshow(){
    
    var images=["stadium1.jpg","stadium2.png","stadium 3.jpg","stadium4.jpeg","stadium5.jpg","stadium6.jpg","stadium7.jpg"];
    
    var index=Math.floor(Math.random()*7);
    console.log(images[index]);
    
    document.images[0].src=images[index];
}

setInterval(slideshow,3000);