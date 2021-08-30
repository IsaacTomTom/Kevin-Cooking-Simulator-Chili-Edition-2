const gameState = {
  
};



function preload() {
  this.load.image('title_screen', 'start_assets/title.png'); 
  this.load.image('start', 'start_assets/start.png'); 
  this.load.image('order_screen', 'order_assets/order.png'); 
  this.load.image('counter', 'order_assets/counter.png'); 
  this.load.image('joker_kevin', 'customer_assets/joker_kevin.png') 
  this.load.image('kevin_man', 'customer_assets/kevin_man.png') 
}


function create() {
	// When gameState.active is true, the game is being played and not over. When gameState.active is false, then it's game over
 
	// Creates title screen background
  var background_start = this.add.sprite(400, 300, 'title_screen');
  // Creates the start button
  var start_button = this.add.sprite(430, 90, 'start').setScale(0.4);
  var customer = this.add.sprite(525, 225, 'joker_kevin').setScale(0.75).setVisible(false);
  var scene_number = 1
  var counter = this.add.sprite(375, 325, 
  'counter').setScale(2, 1.40).setVisible(false);

  start_button.inputEnabled = true;
    // Makes the game start

  
  this.input.on('pointerdown', function (pointer) {
      background_start.setTexture('order_screen')
      start_button.destroy();
      customer.setVisible(true);
      counter.setVisible(true);
      scene_number = 2
  })

}


function update() {



}

const config = {
	type: Phaser.AUTO,
	width: 750,
	height: 525,
	backgroundColor: "b9eaff",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			enableBody: true,
		}
	},
	scene: {
		preload,
		create,
    update
	}
};


const game = new Phaser.Game(config);

