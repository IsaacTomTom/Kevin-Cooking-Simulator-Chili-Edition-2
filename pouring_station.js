class pouring_station extends Phaser.Scene {
  constructor() {
    super({ key: 'pouring_station' })
  }





  preload() {

    this.load.image('white_counter', 'all_images_assets/pouring_assets/counter_attack.jpeg');
    this.load.image('bottom_c', 'all_images_assets/pouring_assets/bottom_attack.png');
    this.load.image('bucket', 'all_images_assets/pouring_assets/bucket.png');
    this.load.image('wood_bowl', 'all_images_assets/pouring_assets/bowl.png');
    this.load.image('teacup', 'all_images_assets/pouring_assets/teacup.png');
    this.load.image('food', 'all_images_assets/pouring_assets/pouring_kevin.png');
    this.load.image('defaultK', 'all_images_assets/pouring_assets/defaultK.png');
    this.load.image('dumpinK', 'all_images_assets/pouring_assets/dumpinK.png')
    this.load.image('emptyK', 'all_images_assets/pouring_assets/emptyK.png')
    this.load.image('spillinK', 'all_images_assets/pouring_assets/spillinK.png')
    this.load.image('yeah', 'all_images_assets/pouring_assets/yeah.png');
    this.load.image('give_order', 'all_images_assets/pouring_assets/donebutton.png');


  }

  create() {

  
gameState.score_bowl = ''
    gameState.go_score = false

    gameState.background = this.add.sprite(300, 325, 'white_counter').setScale(.5);

    gameState.food = this.add.sprite(250, 275, 'defaultK').setScale(.4);
    gameState.bottom_c = this.add.sprite(300, 325, 'bottom_c').setScale(.5);

    gameState.wood_bowl = this.add.sprite(400, 425, 'wood_bowl').setScale(.1).setInteractive();

    gameState.bucket = this.add.sprite(650, 400, 'bucket').setScale(.25).setInteractive();

    gameState.teacup = this.add.sprite(150, 425, 'teacup').setScale(.15).setInteractive();
    gameState.give_order = this.add.sprite(375, 262.5, 'give_order').setScale(.5).setVisible(false).setInteractive()

    this.add.sprite(700, 25, 'yeah').setScale(.2)
    gameState.pourlocation = ' '

    gameState.kevin_pour = false
    gameState.pour_cycle = 0
    this.input.on('pointermove', function (pointer) {
      if (gameState.pour_cycle == false) {
        gameState.food.setPosition(pointer.x - 70, gameState.food.y)
      }
    })

    gameState.teacup.on('pointerdown', function (pointer) {
      gameState.pourlocation = 'teacup'
      gameState.score_bowl = 'Teacup'
      kevin_animation()

    })
    gameState.wood_bowl.on('pointerdown', function (pointer) {
      gameState.pourlocation = 'wood_bowl'
      gameState.score_bowl = 'Wood Bowl'
      kevin_animation()

    })
    gameState.bucket.on('pointerdown', function (pointer) {
      gameState.pourlocation = 'bucket'
      gameState.score_bowl = 'Bucket'
      kevin_animation()

    })

    gameState.give_order.on('pointerdown', function (pointer) {
      gameState.go_score = true

    })

    function kevin_animation() {
      if (gameState.kevin_pour == false) {
        if (gameState.pourlocation == 'bucket') {
          gameState.food.x = 600

        }
        if (gameState.pourlocation == 'wood_bowl') {
          gameState.food.x = 350

        }
        if (gameState.pourlocation == 'teacup') {
          gameState.food.x = 100

        }
      }
      gameState.kevin_pour = true
    };


  }

  update() {
    if (gameState.go_score == true) {
      this.scene.stop('pouring_station')
      this.scene.start('score_station')
    }
    if (gameState.kevin_pour == true) {
      gameState.pour_cycle += 1
      gameState.teacup.setInteractive(false)
      gameState.wood_bowl.setInteractive(false)
      gameState.bucket.setInteractive(false)


      if (gameState.pour_cycle == 10) {
        gameState.food.setTexture('food').setScale(.8)
        gameState.food.y = 250
      }
      if (gameState.pour_cycle == 20) {
        gameState.food.setTexture('dumpinK').setScale(0.4)
        gameState.food.y = 210
      }
      if (gameState.pour_cycle == 30) {
        gameState.food.setTexture('spillinK').setScale(.8)
        gameState.food.y = 190
      }
      if (gameState.pour_cycle == 40) {
        gameState.food.setTexture('emptyK').setScale(2)
        gameState.food.y = 180
        if (gameState.pourlocation == 'bucket') {
          gameState.bucket.setTint(0x5C4033)
        }
        if (gameState.pourlocation == 'wood_bowl') {
          gameState.wood_bowl.setTint(0x5C4033)
        }
        if (gameState.pourlocation == 'teacup') {
          gameState.teacup.setTint(0x5C4033)
        }
      }
      if (gameState.pour_cycle == 50) {
    
        gameState.food.setTexture('spillinK').setScale(.8)
        gameState.food.y = 190
      }
      if (gameState.pour_cycle == 60) {
        gameState.food.setTexture('dumpinK').setScale(.4)
        gameState.food.y = 210
      }
      if (gameState.pour_cycle == 70) {
        gameState.food.setTexture('food').setScale(.8)
        gameState.food.y = 250
      }
      if (gameState.pour_cycle == 80) {
        gameState.food.setTexture('defaultK').setScale(.4)
        gameState.food.y = 275
      }
      if (gameState.pour_cycle == 90) {
        gameState.give_order.setVisible(true)
      }
      if (gameState.pour_cycle > 95) {
        gameState.pour_cycle = 100
      }

    }


  }

}






