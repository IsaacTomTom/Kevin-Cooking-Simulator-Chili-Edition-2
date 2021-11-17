const gameState = {};


const config = {
  type: Phaser.AUTO,
  width: 750,
  height: 525,
  backgroundColor: "#000000",
  audio: {
    disableWebAudio: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      enableBody: true,
    }
  },
  scene: [title, order_station, jar_scene, cutting_scene, ingredients_scene, cooking_station, stirring_station, pouring_station, score_station, win_or_lose]
};

const game = new Phaser.Game(config);

