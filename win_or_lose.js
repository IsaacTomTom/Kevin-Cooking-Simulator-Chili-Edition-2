class win_or_lose extends Phaser.Scene {
  constructor() {
    super({ key: 'win_or_lose' })
  }

  preload() {
this.load.image('win_game', 'all_images_assets/end_assets/win.png');
this.load.image('lose_game', 'all_images_assets/end_assets/lose.png');
this.load.audio('victory', ['music_assets/victory.mp3']);

  }

  create() {
   gameState.end_screen = this.add.sprite(375, 262.5, 'win_game')
   gameState.song.stop();
   gameState.victory = this.sound.add('victory');
     gameState.victory.loop = true
   gameState.fail = this.sound.add('Ad', { volume: .2 });
   gameState.victory.play()

   gameState.play = 0
  }

  update() {
    if (gameState.play < 2) {
      gameState.play += 1
    }
    if (gameState.star_points <= 0) {
      gameState.end_screen.setTexture('lose_game').setScale(0.65, .8725);
    
    }
    if (gameState.star_points >= 75) {
      gameState.end_screen.setTexture('win_game').setScale(0.4, .5);
      if(gameState.play == 1) {
        gameState.victory.play()
      }
    }
  }
}