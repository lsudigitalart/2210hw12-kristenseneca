        //  Kristen Seneca ©2016 hw12

        var mic;
        var amp;
        var mouth;
        var cat;
        var rainbow;
        var banner;
        var capture;
        var scale = 1.0;

        function preload(){
          mouth=loadImage("mouth.png")
          cat=loadImage("pusheen.jpg")
          rainbow=loadImage("bow.png")
          banner=loadImage("banner.png")
        }


        function setup() {
          createCanvas( 440, 440);
          background( 0); // Create an audio input and start it

          mic = new p5. AudioIn();
          mic.start(); // Create a new amplitude analyzer and patch into input
          amp = new p5. Amplitude();
          amp.setInput( mic);

        }

          function draw() { // Draw a background that fades to black
            noStroke();
            fill( 0, 20);
            rect( 0, 0, width, height); // The getLevel() method returns values between 0 and 1, // so map() is used to convert the values to larger numbers
  image(cat,0,0,700,500)
  image(rainbow,200,150,500,400)
  image(banner,0,280,400,140)
            scale = map(amp.getLevel(), 0, 1.0, 10, width); // Draw the circle based on the volume
            image(mouth,155,150,scale,scale);
          }
