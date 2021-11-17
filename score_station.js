class score_station extends Phaser.Scene {
  constructor() {
    super({ key: 'score_station' })
  }

  preload() {
    //order station related images
    this.load.image('order_screen', 'all_images_assets/order_assets/order.png');
    this.load.image('counter', 'all_images_assets/order_assets/counter.png');

    //customer kevin possible outfits
    this.load.image('joker_kevin', 'all_images_assets/customer_assets/joker_kevin.png');

    this.load.image('kevin_man', 'all_images_assets/customer_assets/kevin_man.png');

    this.load.image('hair_kevin', 'all_images_assets/customer_assets/hair_kevin.png');
    
    this.load.image('stare_kevin', 'all_images_assets/customer_assets/stare_kevin.png');

    //images for each star rating
    this.load.image('0_star', 'all_images_assets/star_system_assets/0-star.png');
    this.load.image('1_star', 'all_images_assets/star_system_assets/1-star.png');
    this.load.image('2_star', 'all_images_assets/star_system_assets/2-star.png');
    this.load.image('3_star', 'all_images_assets/star_system_assets/3-star.png');
    this.load.image('4_star', 'all_images_assets/star_system_assets/4-star.png');
    this.load.image('5_star', 'all_images_assets/star_system_assets/5-star.png');

    this.load.image('teacup', 'all_images_assets/pouring_assets/teacup.png');
    this.load.image('wood_bowl', 'all_images_assets/pouring_assets/bowl.png');
    this.load.image('bucket', 'all_images_assets/pouring_assets/bucket.png');
    this.load.image('arm', 'all_images_assets/give_assets/arm.png');
    this.load.image('eyes', 'all_images_assets/give_assets/ooga.png');
    this.load.image('eat_arm', 'all_images_assets/give_assets/eat.png');

    this.load.image('good', 'all_images_assets/cutting_assets/chop_complete.png');
    this.load.image('menu', 'all_images_assets/order_assets/menu.png');
    this.load.image('bad', 'all_images_assets/give_assets/bad.png');

    this.load.image('happy', 'all_images_assets/give_assets/happy.png');
    this.load.image('sad', 'all_images_assets/give_assets/sad.png');
    this.load.image('ok', 'all_images_assets/give_assets/ok.png');

    this.load.audio('slurp', ['music_assets/slurp.mp3']);
  }

  create() {
    gameState.slurp = this.sound.add('slurp', { volume: 1 }, { loop: false });


    gameState.animation_arm = 0
    gameState.background = this.add.sprite(400, 300, 'order_screen');

  

    gameState.ready_C = this.add.sprite(525, 225, gameState.randomCustomer).setScale(0.75).setVisible(true);
    gameState.counter = this.add.sprite(375, 325, 'counter').setScale(2, 1.40).setVisible(true);

    gameState.custom_bowl = this.add.sprite(225, 340, gameState.pourlocation).setVisible(true).setTint(0x5C4033).setScale(2)
    gameState.arm = this.add.sprite(430, 300, 'arm').setScale(0.5, .4).setVisible(false).setRotation(5.5);
    gameState.eyes = this.add.sprite(570, 175, 'eyes').setScale(0.35, .25).setVisible(false).setRotation(6.5);

    gameState.check_menu = this.add.sprite(150, 190, 'menu').setVisible(false)

    gameState.star_system = this.add.sprite(150, 25, '2_star').setScale(0.25).setVisible(true)

    gameState.meat_placeholder = this.add.sprite(170, 120).setScale(0.075).setVisible(false)
    gameState.noodle_placeholder = this.add.sprite(170, 145).setScale(0.075).setVisible(false)
    gameState.bean_placeholder = this.add.sprite(170, 170).setScale(0.075).setVisible(false)
    gameState.sauce_placeholder = this.add.sprite(170, 195).setScale(0.075).setVisible(false)
    gameState.topping_placeholder = this.add.sprite(170, 220).setScale(0.075).setVisible(false)
    gameState.temp_placeholder = this.add.sprite(170, 245).setScale(0.075).setVisible(false)

    gameState.bowl_placeholder = this.add.sprite(170, 270).setScale(0.075).setVisible(false)

    gameState.speech_placeholder = this.add.sprite(400, 80, 'good').setScale(1).setVisible(false)

    gameState.next_order = this.add.sprite(375, 450, 'give_order').setScale(.2).setVisible(false).setInteractive()

    gameState.repeat = false

    gameState.over_score = 0
    gameState.your_score = this.add.text(140, 300, gameState.over_score + '/7').setColor("#000000").setVisible(false)

gameState.next = false
    // starts the game, changes the background, destroys unneeded sprites, and makes others visible
    this.input.on('pointerdown', function (pointer) {
      console.log(pointer.worldX);
      console.log(pointer.worldY);
    });
    gameState.next_order.on('pointerdown', function (pointer) {
      gameState.next = true

    })
   

  }

  update() {
if (gameState.next == true) {
      this.scene.stop('score_station')
      this.scene.start('order_station')
}
    if (gameState.random_meat == gameState.score_meat) {
      gameState.meat_placeholder.setTexture('good').setScale(0.05)
      if (gameState.animation_arm == 200) {
        gameState.over_score += 1
      }
    } else {
      gameState.meat_placeholder.setTexture('bad').setScale(0.075)
    }

    if (gameState.random_noodle == gameState.score_noodle) {
      gameState.noodle_placeholder.setTexture('good').setScale(0.05)
      if (gameState.animation_arm == 225) {
        gameState.over_score += 1
      }
    } else {
      gameState.noodle_placeholder.setTexture('bad').setScale(0.075)
    }

    if (gameState.random_bean == gameState.score_bean) {
      gameState.bean_placeholder.setTexture('good').setScale(0.05)
      if (gameState.animation_arm == 250) {
        gameState.over_score += 1
      }
    } else {
      gameState.bean_placeholder.setTexture('bad').setScale(0.075)
    }

    if (gameState.random_sauce == gameState.score_sauce) {
      gameState.sauce_placeholder.setTexture('good').setScale(0.05)
      if (gameState.animation_arm == 275) {

        gameState.over_score += 1
      }
    } else {
      gameState.sauce_placeholder.setTexture('bad').setScale(0.075)
    }

    if (gameState.random_topping == gameState.score_topping) {
      gameState.topping_placeholder.setTexture('good').setScale(0.05)
      if (gameState.animation_arm == 300) {

        gameState.over_score += 1
      }
    } else {
      gameState.topping_placeholder.setTexture('bad').setScale(0.075)
    }
    if (gameState.random_T == gameState.temp) {
      gameState.temp_placeholder.setTexture('good').setScale(0.05)
      if (gameState.animation_arm == 325) {

        gameState.over_score += 1
      }
    } else {
      gameState.temp_placeholder.setTexture('bad').setScale(0.075)
    }
    if (gameState.random_bowl == gameState.score_bowl) {
      gameState.bowl_placeholder.setTexture('good').setScale(0.05)
      if (gameState.animation_arm == 350) {

        gameState.over_score += 1
      }
    } else {
      gameState.bowl_placeholder.setTexture('bad').setScale(0.075)
    }

    if (gameState.over_score <= 2) {
      gameState.speech_placeholder.setTexture('sad')
      if (gameState.animation_arm == 425) {
        gameState.star_points -= 15
      }

    } else if (gameState.over_score >= 6) {
      gameState.speech_placeholder.setTexture('happy')
     if (gameState.animation_arm == 425) {
        gameState.star_points += 30
      } 
    } else {
      gameState.speech_placeholder.setTexture('ok')
     if (gameState.animation_arm == 425) {
        gameState.star_points += 15
      } 
    }



    if (gameState.repeat == true) {
      this.scene.stop('score_station')
      this.scene.start('order_station')
    }
    if (gameState.repeat == false) {
      gameState.animation_arm += 1
      if (gameState.animation_arm == 25) {
        gameState.eyes.setVisible(true)
      }
      if (gameState.animation_arm == 40) {
        gameState.slurp.play()
      }
      if (gameState.animation_arm == 50) {
        gameState.arm.setVisible(true)

      }


      if (gameState.animation_arm == 75) {
        gameState.eyes.setVisible(false)
        gameState.arm.setScale(0.2).setTexture('eat_arm')

        if (gameState.pourlocation == 'bucket') {
          gameState.custom_bowl.setScale(.15)
        }
        if (gameState.pourlocation == 'wood_bowl') {
          gameState.custom_bowl.setScale(.05)
        }
        if (gameState.pourlocation == 'teacup') {
          gameState.custom_bowl.setScale(.1)
        }
        if (gameState.randomCustomer == 'kevin_man') {
          gameState.arm.setScale(0.20).setTexture('eat_arm').setPosition(610, 225).setRotation(6.4)
          gameState.custom_bowl.setPosition(550, 160)
        }


        if (gameState.randomCustomer == 'hair_kevin') {
          gameState.arm.setScale(0.20).setTexture('eat_arm').setPosition(610, 275).setRotation(6.4)
          gameState.custom_bowl.setPosition(555, 230)
        }
        if (gameState.randomCustomer == 'joker_kevin') {
          gameState.arm.setScale(0.18).setTexture('eat_arm').setPosition(595, 220).setRotation(6.4)
          gameState.custom_bowl.setPosition(555, 175)
        }

        if (gameState.randomCustomer == 'stare_kevin') {
          gameState.arm.setScale(0.25).setTexture('eat_arm').setPosition(595, 280).setRotation(6.2)
          gameState.custom_bowl.setPosition(520, 225)
        }
      }
      gameState.your_score.setText(gameState.over_score + '/7')
      if (gameState.animation_arm == 175) {
        gameState.custom_bowl.setVisible(false)
        gameState.arm.setVisible(false)
      }
      if (gameState.animation_arm == 175) {
        gameState.check_menu.setVisible(true)
      }
      if (gameState.animation_arm == 200) {
        gameState.meat_placeholder.setVisible(true)

      }
      if (gameState.animation_arm == 225) {
        gameState.noodle_placeholder.setVisible(true)

      }
      if (gameState.animation_arm == 250) {
        gameState.bean_placeholder.setVisible(true)

      }
      if (gameState.animation_arm == 275) {
        gameState.sauce_placeholder.setVisible(true)

      }
      if (gameState.animation_arm == 300) {
        gameState.topping_placeholder.setVisible(true)

      }
      if (gameState.animation_arm == 325) {
        gameState.temp_placeholder.setVisible(true)

      }
      if (gameState.animation_arm == 350) {
        gameState.bowl_placeholder.setVisible(true)

      }
      if (gameState.animation_arm == 375) {
        gameState.your_score.setVisible(true)
      }
      if (gameState.animation_arm == 400) {
        gameState.speech_placeholder.setVisible(true)
      }
       if (gameState.animation_arm == 450) {
        gameState.next_order.setVisible(true)
      }
    }
    if (gameState.animation_arm < 40) {

      if (gameState.pourlocation == 'bucket') {
        gameState.custom_bowl.setScale(.25)
      }
      if (gameState.pourlocation == 'wood_bowl') {
        gameState.custom_bowl.setScale(.1)
      }
      if (gameState.pourlocation == 'teacup') {
        gameState.custom_bowl.setScale(.15)
      }
      if (gameState.randomCustomer == 'kevin_man') {
        gameState.ready_C.setScale(-0.5, 0.5).setPosition(550, 250)

        gameState.eyes.setPosition(565, 115).setScale(0.35, .25).setRotation(6.5);
        gameState.arm.setPosition(430, 300).setScale(0.5, .5).setRotation(5.7);
      }

      if (gameState.randomCustomer == 'hair_kevin') {
        gameState.ready_C.setScale(-1.5, 1.5).setPosition(550, 225)

        gameState.eyes.setPosition(570, 175).setScale(0.35, .25).setRotation(6.5);

        gameState.arm.setPosition(430, 320).setScale(0.5, .5).setRotation(5.8);
      }

      if (gameState.randomCustomer == 'joker_kevin') {
        gameState.ready_C.setScale(0.75)
        gameState.arm.setPosition(410, 290).setScale(0.45, .45).setRotation(5.6);
        gameState.eyes.setPosition(555, 125).setScale(0.3, .2).setRotation(6.4);

      }

      if (gameState.randomCustomer == 'stare_kevin') {
        gameState.ready_C.setScale(-0.25, 0.25).setPosition(525, 225)

        gameState.eyes.setPosition(540, 175).setScale(0.35, .25).setRotation(6.5);

        gameState.arm.setPosition(430, 320).setScale(0.5, .4).setRotation(5.7);

      }
    }
    // star point system
    if (gameState.star_points <= 0) {
      gameState.star_system.setTexture('0_star')
    }
    if (gameState.star_points == 15) {
      gameState.star_system.setTexture('1_star')
    }
    if (gameState.star_points == 30) {
      gameState.star_system.setTexture('2_star')
    }
    if (gameState.star_points == 45) {
      gameState.star_system.setTexture('3_star')
    }
    if (gameState.star_points == 60) {
      gameState.star_system.setTexture('4_star')
    }
    if (gameState.star_points >= 75) {
      gameState.star_system.setTexture('5_star')
    }

  }
}