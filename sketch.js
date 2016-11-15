        //  Kristen Seneca ©2016 hw12

        var mic;
        var mouth;
        var amp;
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
          background( 0);

          mic = new p5. AudioIn();
          mic.start();

          
          amp = new p5. Amplitude();
          amp.setInput( mic);

        }

          function draw() {
            noStroke();
            fill( 0, 20);
            rect( 0, 0, width, height);
  image(cat,0,0,700,500)
  image(rainbow,200,150,500,400)
  image(banner,0,280,400,140)
            scale = map(amp.getLevel(), 0, 1.0, 10, width);
            image(mouth,155,150,scale,scale);
          }
