/* Disclaimer: We know we should add multiple things of text for the menu and tray to tell what something is, we are just waiting till we can actually start making new code again.
*/
class jar_scene extends Phaser.Scene {
  constructor() {
    super({ key: 'jar_scene' })
  }

  //when player clicks start:


  preload() {
    //meat freezer images
    this.load.image('jar_C', 'all_images_assets/jar_assets/jar_C.png');
    this.load.image('jar_F', 'all_images_assets/jar_assets/jar_F.png');
    this.load.image('jar_GB', 'all_images_assets/jar_assets/jar_GB.png');
    this.load.image('jar_L', 'all_images_assets/jar_assets/jar_L.png');
    this.load.image('jar_P', 'all_images_assets/jar_assets/jar_P.png');
    this.load.image('jar_S', 'all_images_assets/jar_assets/jar_S.png')
    this.load.image('freezer', 'all_images_assets/ingredients_assets/freezer.png');
  }

  create() {

    // All sprites
    // title screen sprites
    gameState.background = this.add.sprite(370, 260, 'freezer').setScale(.85, .9);

    // Meat jar sprites
    gameState.jar_C = this.add.sprite(220, 315, 'jar_C').setVisible(false).setScale(.125).setInteractive()
    gameState.jar_GB = this.add.sprite(150, 155, 'jar_GB').setVisible(false).setScale(.125).setInteractive()
    gameState.jar_P = this.add.sprite(525, 400, 'jar_P').setVisible(false).setScale(.125).setInteractive()
    gameState.jar_F = this.add.sprite(140, 400, 'jar_F').setVisible(false).setScale(.125).setInteractive()
    gameState.jar_L = this.add.sprite(530, 235, 'jar_L').setVisible(false).setScale(.125).setInteractive()
    gameState.jar_S = this.add.sprite(690, 340, 'jar_S').setVisible(false).setScale(.125).setInteractive()

    gameState.jar_name_C = this.add.text(190, 265, 'Chicken').setColor("#000000")
    gameState.jar_name_GB = this.add.text(100, 105, 'Ground Beef').setColor("#000000")
    gameState.jar_name_P = this.add.text(505, 350, 'Pork').setColor("#000000")
    gameState.jar_name_F = this.add.text(120, 350, 'Fish').setColor("#000000")
    gameState.jar_name_L = this.add.text(510, 185, 'Lamb').setColor("#000000")
    gameState.jar_name_S = this.add.text(665, 290, 'Steak').setColor("#000000")

    // chopping station sprites
    gameState.continue_button = this.add.sprite(375, 212.5, 'continue').setVisible(false)

    gameState.placeholder = 'sliced_pork'

    gameState.jar_C.setVisible(true).setInteractive(true)
    gameState.jar_F.setVisible(true).setInteractive(true)
    gameState.jar_GB.setVisible(true).setInteractive(true)
    gameState.jar_L.setVisible(true).setInteractive(true)
    gameState.jar_P.setVisible(true).setInteractive(true)
    gameState.jar_S.setVisible(true).setInteractive(true)

    gameState.cutting_scene = false

    gameState.scene_number = 3

    gameState.score_meat = ' '

    gameState.jar_C.on('pointerdown', function (pointer) {
      gameState.cutting_scene = true
      gameState.placeholder = 'sliced_bird'
      gameState.score_meat = 'chicken'

    })

    gameState.jar_F.on('pointerdown', function (pointer) {
      gameState.cutting_scene = true
      gameState.placeholder = 'sliced_fish'
      gameState.score_meat = 'fish'
    })

    gameState.jar_GB.on('pointerdown', function (pointer) {
      gameState.cutting_scene = true
      gameState.placeholder = 'sliced_beef'
      gameState.score_meat = 'ground beef'

    })

    gameState.jar_L.on('pointerdown', function (pointer) {
      gameState.cutting_scene = true
      gameState.placeholder = 'sliced_lamb'
      gameState.score_meat = 'lamb'

    })

    gameState.jar_P.on('pointerdown', function (pointer) {
      gameState.cutting_scene = true
      gameState.placeholder = 'sliced_pork'
      gameState.score_meat = 'pork'

    })

    gameState.jar_S.on('pointerdown', function (pointer) {
      gameState.cutting_scene = true
      gameState.placeholder = 'sliced_steak'
      gameState.score_meat = 'steak'
    })
  }

  update() {
    if (gameState.cutting_scene == true) {
      this.scene.stop('jar_scene')
      this.scene.start('cutting_scene')
    }
  }
}