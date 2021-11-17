/* Disclaimer: We know we should add multiple things of text for the menu and tray to tell what something is, we are just waiting till we can actually start making new code again.
*/
class cutting_scene extends Phaser.Scene {
  constructor() {
    super({ key: 'cutting_scene' })
  }

  //when player clicks start:


  preload() {
    //imgaes for chopping station
    this.load.image('cutting_board', 'all_images_assets/cutting_assets/chop_chop.png');
    this.load.image('radical', 'all_images_assets/cutting_assets/radical.png');
    this.load.image('check_mark', 'all_images_assets/cutting_assets/chop_complete.png');
    this.load.image('cutting_knife', 'all_images_assets/cutting_assets/sword.png');
    this.load.image('continue', 'all_images_assets/cutting_assets/continue.png');

    //images for all 6 meats on the cutting board
    this.load.image('cut_chicken', 'all_images_assets/cutting_assets/cut_bird.png');
    this.load.image('cut_fish', 'all_images_assets/cutting_assets/cut_fish.png');
    this.load.image('cut_ground_beef', 'all_images_assets/cutting_assets/cut_beef.png');
    this.load.image('cut_lamb', 'all_images_assets/cutting_assets/cut_lamb.png');
    this.load.image('cut_pork', 'all_images_assets/cutting_assets/cut_pork.png');
    this.load.image('cut_steak', 'all_images_assets/cutting_assets/cut_steak.png');

    //images for all 6 meats after they have been sliced
    this.load.image('sliced_pork', 'all_images_assets/sliced_assets/slice_pork.png');
    this.load.image('sliced_steak', 'all_images_assets/sliced_assets/sliced_steak.png');
    this.load.image('sliced_beef', 'all_images_assets/sliced_assets/slice_beef.png');
    this.load.image('sliced_bird', 'all_images_assets/sliced_assets/slice_bird.png');
    this.load.image('sliced_lamb', 'all_images_assets/sliced_assets/sliced_lamb.png');
    this.load.image('sliced_fish', 'all_images_assets/sliced_assets/slice_fish.png')
  }

  create() {
    // All sprites
    // title screen sprites
    gameState.background = this.add.sprite(400, 300, 'cutting_board');
    gameState.ingredients = false
   
    // Meat that you cut ... placeholder sprite looks weird but DONT DELETE
    gameState.cut_meat = this.add.sprite(375, 260).setVisible(false).setScale(.75)

    // Creates the sprites you click to cut the meat
    gameState.chop_mark_1 = this.add.sprite(200, 240, 'radical').setVisible(false).setScale(0.1)
    gameState.chop_mark_2 = this.add.sprite(180, 390, 'radical').setVisible(false).setScale(0.1)
    gameState.chop_mark_3 = this.add.sprite(351, 300, 'radical').setVisible(false).setScale(0.1)
    gameState.chop_mark_4 = this.add.sprite(490, 200, 'radical').setVisible(false).setScale(0.1)
    gameState.chop_mark_5 = this.add.sprite(510, 390, 'radical').setVisible(false).setScale(0.1)

    // chopping station sprites
    gameState.continue_button = this.add.sprite(375, 212.5, 'continue').setVisible(false)
    gameState.cutter = this.add.sprite(200, 200, 'cutting_knife').setVisible(false).setScale(.2).setAngle(-90)

    

    // cutter movement ... makes the cutter follow the mouse
    this.input.on('pointermove', function (pointer) {
      gameState.cutter.setPosition(pointer.x + 100, pointer.y - 90)
    })


    // chop markers
    gameState.chop_mark_1.on('pointerdown', function (pointer) {
      gameState.chop_mark_1.setTexture('check_mark')
      gameState.checked_of1 = true
    })
    gameState.chop_mark_2.on('pointerdown', function (pointer) {
      gameState.chop_mark_2.setTexture('check_mark')
      gameState.checked_of2 = true
    })
    gameState.chop_mark_3.on('pointerdown', function (pointer) {
      gameState.chop_mark_3.setTexture('check_mark')
      gameState.checked_of3 = true
    })
    gameState.chop_mark_4.on('pointerdown', function (pointer) {
      gameState.chop_mark_4.setTexture('check_mark')
      gameState.checked_of4 = true
    })
    gameState.chop_mark_5.on('pointerdown', function (pointer) {
      gameState.chop_mark_5.setTexture('check_mark')
      gameState.checked_of5 = true
    })


    //  contine button after chopping meat click event
    gameState.continue_button.on('pointerdown', function (pointer) {
        gameState.ingredients = true
    })

    // a function for things the jars need


    gameState.cutter.setVisible(true);
    gameState.chop_mark_1.setVisible(true).setInteractive()
    gameState.chop_mark_2.setVisible(true).setInteractive()
    gameState.chop_mark_3.setVisible(true).setInteractive()
    gameState.chop_mark_4.setVisible(true).setInteractive()
    gameState.chop_mark_5.setVisible(true).setInteractive()

    if (gameState.placeholder == 'sliced_bird') {
      gameState.cut_meat.setTexture('cut_chicken').setVisible(true).setScale(.35)
    }
    if (gameState.placeholder == 'sliced_fish') {
      gameState.cut_meat.setTexture('cut_fish').setVisible(true).setScale(.35)
      gameState.chop_mark_2.setPosition('350', '160')
      gameState.chop_mark_5.setPosition('590', '290')
    }
    if (gameState.placeholder == 'sliced_beef') {
      gameState.cut_meat.setTexture('cut_ground_beef').setVisible(true).setScale(.35)
      gameState.chop_mark_2.setPosition('350', '160')
    }
    if (gameState.placeholder == 'sliced_lamb') {
      gameState.cut_meat.setTexture('cut_lamb').setVisible(true).setScale(.35)
      gameState.chop_mark_1.setPosition('330', '230')
      gameState.chop_mark_5.setPosition('580', '150')
    }
    if (gameState.placeholder == 'sliced_pork') {
      gameState.cut_meat.setTexture('cut_pork').setVisible(true).setScale(.35)
      gameState.chop_mark_2.setPosition('380', '390')
      gameState.chop_mark_5.setPosition('510', '290')
    }
    if (gameState.placeholder == 'sliced_steak') {
      gameState.cut_meat.setTexture('cut_steak').setVisible(true).setScale(.35)
      gameState.chop_mark_2.setPosition('180', '350')
    }
  }

  update() {
    if (gameState.ingredients == true) {
          this.scene.stop('cutting_scene')
          this.scene.start('ingredients_scene')
    }
    if (gameState.checked_of1 == true && gameState.checked_of2 == true && gameState.checked_of3 == true && gameState.checked_of4 == true && gameState.checked_of5 == true) {
      gameState.chop_mark_1.destroy()
      gameState.chop_mark_2.destroy()
      gameState.chop_mark_3.destroy()
      gameState.chop_mark_4.destroy()
      gameState.chop_mark_5.destroy()
      gameState.continue_button.setVisible(true).setInteractive()
      gameState.checked = false
      gameState.cut_meat.setTexture(gameState.placeholder).setVisible(true).setScale(.35)
    }
  }
}