var images = [
    "background/background1.jpg", 
    "background/background2.jpg", 
    "background/background3.jpg", 
    "background/background4.jpg", 
    // "background/background5.jpg",
    "background/background6.jpg",
    "background/background7.jpg",
    "background/background8.jpg", 
    "background/background9.jpg", 
    "background/background10.jpg", 
    "background/background11.jpg",
    "background/background12.jpg", 
    "background/background13.jpg", 
    "background/background14.jpg", 
    "background/background15.jpg",
    "background/background16.jpg", 
    "background/background17.jpg", 
    "background/background18.jpg", 
    "background/background19.jpg",
    "background/background20.jpg",
    "background/background21.jpg",
    "background/background22.jpg",
    "background/background23.jpg",
    "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
  ]
  
  
    var nextRandomImage = images[Math.floor(Math.random() * images.length)];
    $("#hero").css("background-image", "url(" + nextRandomImage + ")");
    
