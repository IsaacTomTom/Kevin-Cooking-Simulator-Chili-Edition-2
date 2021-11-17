class title extends Phaser.Scene {
  constructor() {
    super({ key: 'title' })
  }

  preload() {
    //Start screen images
    this.load.image('title_screen', 'all_images_assets/start_assets/title.png');
    this.load.image('start', 'all_images_assets/start_assets/start.png');
    this.load.image('dog', 'all_images_assets/cooking_assets/dog.png');
    this.load.image('logo', 'all_images_assets/start_assets/logo.png');

    //customer kevin possible outfits
    this.load.image('hair_kevin', 'all_images_assets/customer_assets/hair_kevin.png');

    //audio files
    this.load.audio('music', ['music_assets/start.mp3']);
    this.load.audio('Ad', ['music_assets/Ad.mp3']);
  }

  create() {
      
    //plays the music
    gameState.song = this.sound.add('music', { volume: 0.2 });
    gameState.song.loop = true
    gameState.ad = this.sound.add('Ad', { volume: .2 });
    gameState.ad.loop = true
    gameState.ad.play()
    this.sound.pauseOnBlur = false;
    gameState.star_points = 30
    // place holders for the start_button in the update if statements ... DO NOT TOUCH THESE VALUES
    gameState.rotation = 1
    gameState.size_of_button = 0.4
    gameState.size_loop = 1
    /* determines what part of the game is on ... used to stop kevin head from showing up after the start screen, and will be used in IF statements to control sprites later on
    */
    
    gameState.scene_number = 1
    gameState.kevin_animation = 1
    gameState.start = false
    // title screen sprites
    gameState.background = this.add.sprite(400, 300, 'title_screen');
    gameState.logo = this.add.sprite(375, 350, 'logo').setScale(.25)
    gameState.start_button = this.add.sprite(430, 90, 'start').setScale(gameState.size_of_button).setInteractive();
    gameState.kevin_popup = this.add.sprite(283, -200, 'hair_kevin').setScale(1, 1).setAngle(180);
    gameState.dog_title = this.add.sprite(620, 117, 'dog').setScale(.2).setRotation(.27)


    gameState.hsv = Phaser.Display.Color.HSVColorWheel();
    
    gameState.i = 0
gameState.text_cycle = 0
    gameState.start_button.on('pointerdown', function (pointer) {
      gameState.start = true
      gameState.song.play();
      gameState.ad.stop()
    })
  }
  
    
  
  

  update() {
    gameState.text_cycle +=1
  if (gameState.text_cycle == 10) {
      gameState.i += 1
      gameState.text_cycle = 0
  }

  
  if(gameState.i > 359) {
        gameState.i = 0
        }
    gameState.logo.setTint(gameState.hsv[gameState.i].color);
    if (gameState.start == true) {
      this.scene.stop('title')
      this.scene.start('order_station')
    }
    // makes start_button go side to side
    if (gameState.rotation == 1) {
      gameState.start_button.angle += 0.5
      if (gameState.start_button.angle > 25) {
        gameState.rotation = 2
      }
    }
    if (gameState.rotation == 2) {
      gameState.start_button.angle -= 0.5
      if (gameState.start_button.angle < -25) {
        gameState.rotation = 1
      }
    }
    // determines size of start_button
    // increases size of start_button
    if (gameState.size_loop == 1) {
      gameState.size_of_button += 0.001
      gameState.start_button.setScale(gameState.size_of_button)
      if (gameState.size_of_button > 0.5) {
        gameState.size_loop = 2
      }
    }
    // decreases size
    if (gameState.size_loop == 2) {
      gameState.start_button.setScale(gameState.size_of_button)
      gameState.size_of_button -= 0.001
      if (gameState.size_of_button < 0.3) {
        gameState.size_loop = 1
      }
    }

    // works if it is stark screen
    if (gameState.scene_number == 1) {
      // comes out from top left
      if (gameState.kevin_animation == 1) {
        gameState.kevin_popup.y += 0.75;
        if (gameState.kevin_popup)
          if (gameState.kevin_popup.y > 80) {

            gameState.kevin_animation = 2

          }
      }
      // goes back from top left
      if (gameState.kevin_animation == 2) {
        gameState.kevin_popup.y -= 0.75;
        // moves to bottom right
        if (gameState.kevin_popup.y < -200) {
          gameState.kevin_popup.setPosition(500, 750).setAngle(0).setScale(-2, 2);
          gameState.kevin_animation = 3
        }
      }
      // comes out of bottom right
      if (gameState.kevin_animation == 3) {
        gameState.kevin_popup.y -= 20;

        if (gameState.kevin_popup.y < 400) {
          gameState.kevin_animation = 4
        }
      }
      // goes back from bottom right
      if (gameState.kevin_animation == 4) {
        gameState.kevin_popup.y += 1
        // moves to left side
        if (gameState.kevin_popup.y > 750) {
          gameState.kevin_popup.setPosition(-100, 150).setAngle(90).setScale(1, 1);

          gameState.kevin_animation = 5
        }
      }
      // comes out of left side
      if (gameState.kevin_animation == 5) {
        gameState.kevin_popup.x += 0.75
        if (gameState.kevin_popup.x > 90) {
          gameState.kevin_animation = 6
        }
      }
      // goes back from left side
      if (gameState.kevin_animation == 6) {
        gameState.kevin_popup.x -= 0.75
        // moves to right side
        if (gameState.kevin_popup.x < -150) {
          gameState.kevin_popup.setPosition(850, 300).setAngle(90).setScale(2, -2);
          gameState.kevin_animation = 7
        }
      }
      // comes out of right side
      if (gameState.kevin_animation == 7) {
        gameState.kevin_popup.x -= 20;
        if (gameState.kevin_popup.x < 600) {
          gameState.kevin_animation = 8
        }
      }
      // goes back to right side
      if (gameState.kevin_animation == 8) {
        gameState.kevin_popup.x += 1
        // moves back to the top left or beginning point and repeats 
        if (gameState.kevin_popup.x > 950) {
          gameState.kevin_popup.setPosition(200, -200).setScale(1, 1).setAngle(180)
          gameState.kevin_animation = 1
        }
      }
      // Stop here
    }
  }
}