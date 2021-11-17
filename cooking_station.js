class cooking_station extends Phaser.Scene {
  constructor() {
    super({ key: 'cooking_station' })
  }


preload () {
this.load.image('stove_top', 'all_images_assets/cooking_assets/stove.jpg');
  this.load.image('plus', 'all_images_assets/cooking_assets/green_plus_sign.png');
  this.load.image('minus', 'all_images_assets/cooking_assets/green_minus_sign.png');
  this.load.image('dog', 'all_images_assets/cooking_assets/dog.png');
  this.load.image('box', 'all_images_assets/cooking_assets/black_box.png');
  this.load.image('cook', 'all_images_assets/order_assets/cook.png');
}

create () {
  gameState.temp = 0

  gameState.gostir = false
  
gameState.background = this.add.sprite(400, 300, 'stove_top');
gameState.box = this.add.sprite(400, 310, 'box').setScale(.17)
gameState.temperature = this.add.text(370, 295, gameState.temp).setColor("#a18200").setScale(2)
gameState.plus = this.add.sprite(460, 305, 'plus').setScale(.15).setInteractive()
gameState.minus= this.add.sprite(340, 305, 'minus').setScale(.15).setInteractive()
gameState.dog = this.add.sprite(250, 30, 'dog').setScale(.25)
gameState.letsgo = this.add.sprite(400 , 450, 'cook').setScale(0.1).setInteractive()



   gameState.minus.on('pointerdown', function (pointer) {
    gameState.temp -= 10
     console.log(gameState.temp)
  });
     gameState.plus.on('pointerdown', function (pointer) {
       gameState.temp += 10
       console.log(gameState.temp)
  });

      gameState.letsgo.on('pointerdown', function (pointer) {
        gameState.gostir = true
    })
};





update () {
  if (gameState.gostir == true) {
          this.scene.stop('cooking_station')
          this.scene.start('stirring_station')
    }
  gameState.temperature.setText(gameState.temp)
  if (gameState.temp > 600){
    gameState.temp = 600
  }
    if (gameState.temp < 0){
    gameState.temp = 0
  }
}



}