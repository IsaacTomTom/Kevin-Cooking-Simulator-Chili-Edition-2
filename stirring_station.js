class stirring_station extends Phaser.Scene {
  constructor() {
    super({ key: 'stirring_station' })
  }


preload () {
this.load.image('stirring_back', 'all_images_assets/stirring_assets/stirring_back.png');
this.load.image('spoon', 'all_images_assets/stirring_assets/spoon.png');
this.load.image('cook', 'all_images_assets/order_assets/cook.png');
this.load.image('green', 'all_images_assets/stirring_assets/stir_check.png');
this.load.image('red', 'all_images_assets/stirring_assets/stir_notcheck.png');
this.load.image('go_pour', 'all_images_assets/cutting_assets/continue.png');
}

create () {
  
gameState.background = this.add.sprite(400, 300, 'stirring_back').setScale(.70);

gameState.gopour = this.add.sprite(400 , 240, 'go_pour').setScale(0.5).setInteractive().setVisible(false)

gameState.top = this.add.sprite(400, 80, 'red').setScale(.075).setInteractive()
gameState.topleft = this.add.sprite(270, 180, 'red').setScale(.075).setVisible(false).setInteractive()
gameState.bottomleft = this.add.sprite(270, 330, 'red').setScale(.075).setVisible(false).setInteractive()
gameState.bottom = this.add.sprite(400, 410, 'red').setScale(.075).setVisible(false).setInteractive()
gameState.topright = this.add.sprite(530, 180, 'red').setScale(.075).setVisible(false).setInteractive()
gameState.bottomright = this.add.sprite(530, 330, 'red').setScale(.075).setVisible(false).setInteractive()
gameState.spoon = this.add.sprite(250, 30, 'spoon').setScale(.30)

  gameState.stircount = 0
  gameState.pouring = false


    this.input.on('pointermove', function (pointer) {
      gameState.spoon.setPosition(pointer.x + 65, pointer.y - 90)
    })
  
    gameState.top.on('pointerover', function (pointer) {
      gameState.top.setTexture('green')
      gameState.topleft.setTexture('red')
      gameState.topleft.setVisible(false)
      gameState.topright.setVisible(true)
    })
      
    gameState.topright.on('pointerover', function (pointer) {
      gameState.topright.setTexture('green')
      gameState.top.setTexture('red')
      gameState.top.setVisible(false)
      gameState.bottomright.setVisible(true)
    })
      
    gameState.bottomright.on('pointerover', function (pointer) {
      gameState.bottomright.setTexture('green')
      gameState.topright.setTexture('red')
      gameState.topright.setVisible(false)
      gameState.bottom.setVisible(true)
    })

     gameState.bottom.on('pointerover', function (pointer) {
      gameState.bottom.setTexture('green')
      gameState.bottomright.setTexture('red')
      gameState.bottomright.setVisible(false)
      gameState.bottomleft.setVisible(true)
    })
  
    gameState.bottomleft.on('pointerover', function (pointer) {
      gameState.bottomleft.setTexture('green')
      gameState.bottom.setTexture('red')
      gameState.bottom.setVisible(false)
      gameState.topleft.setVisible(true)
    })
    gameState.topleft.on('pointerover', function (pointer) {
      gameState.topleft.setTexture('green')
      gameState.bottomleft.setTexture('red')
      gameState.bottomleft.setVisible(false)
      gameState.top.setVisible(true)
      gameState.stircount += 1
    })
    
    gameState.gopour.on('pointerdown', function (pointer) {
      gameState.pouring = true
    })
};





update () {
    if (gameState.stircount >= 3) {
      gameState.top.setVisible(true).setInteractive(false)
      gameState.topright.setVisible(true).setInteractive(false)
      gameState.bottomright.setVisible(true).setInteractive(false)
      gameState.bottom.setVisible(true).setInteractive(false)
      gameState.bottomleft.setVisible(true).setInteractive(false)
      gameState.topleft.setVisible(true).setInteractive(false)
      gameState.gopour.setVisible(true)
    
      gameState.top.setTexture('green')
      gameState.topright.setTexture('green')
      gameState.bottomright.setTexture('green')
       gameState.bottom.setTexture('green')
      gameState.bottomleft.setTexture('green')
      gameState.topleft.setTexture('green')
    }


    if (gameState.pouring == true) {
      this.scene.stop('stirring_station')
      this.scene.start('pouring_station')
    }

}



}