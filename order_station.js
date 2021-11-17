class order_station extends Phaser.Scene {
  constructor() {
    super({ key: 'order_station' })
  }

  preload() {
    //order station related images
    this.load.image('order_screen', 'all_images_assets/order_assets/order.png');
    this.load.image('counter', 'all_images_assets/order_assets/counter.png');
    this.load.image('menu', 'all_images_assets/order_assets/menu.png');
    this.load.image('speech', 'all_images_assets/order_assets/bubble_R.png');
    this.load.image('cook', 'all_images_assets/order_assets/cook.png');

    //customer kevin possible outfits
    this.load.image('joker_kevin', 'all_images_assets/customer_assets/joker_kevin.png');
    this.load.image('kevin_man', 'all_images_assets/customer_assets/kevin_man.png');
    this.load.image('hair_kevin', 'all_images_assets/customer_assets/hair_kevin.png');
    this.load.image('stare_kevin', 'all_images_assets/customer_assets/stare_kevin.png');

    //images for all 6 meat types
    this.load.image('chicken', 'all_images_assets/menu_assets/meat/chicken.png');
    this.load.image('ground beef', 'all_images_assets/menu_assets/meat/beef.png');
    this.load.image('pork', 'all_images_assets/menu_assets/meat/pork.png');
    this.load.image('fish', 'all_images_assets/menu_assets/meat/fish.png');
    this.load.image('lamb', 'all_images_assets/menu_assets/meat/lamb.png');
    this.load.image('steak', 'all_images_assets/menu_assets/meat/steak.png');

    //images for all 6 noodle types
    this.load.image('macaroni', 'all_images_assets/menu_assets/noodle/macaroni.png');
    this.load.image('spaghetti', 'all_images_assets/menu_assets/noodle/spag.png');
    this.load.image('fettuccine', 'all_images_assets/menu_assets/noodle/fett.png');
    this.load.image('lasagna noodles', 'all_images_assets/menu_assets/noodle/Rav.png');
    this.load.image('linguine', 'all_images_assets/menu_assets/noodle/lin.png');
    this.load.image('ramen noodles', 'all_images_assets/menu_assets/noodle/ramen.png');

    //images for all 6 bean types
    this.load.image('baked beans', 'all_images_assets/menu_assets/bean/bakebeans.png');
    this.load.image('kidney beans', 'all_images_assets/menu_assets/bean/kidney.png');
    this.load.image('lima beans', 'all_images_assets/menu_assets/bean/lima.png');
    this.load.image('green beans', 'all_images_assets/menu_assets/bean/green.png');
    this.load.image('coffee beans', 'all_images_assets/menu_assets/bean/coffee.png');
    this.load.image('jelly beans', 'all_images_assets/menu_assets/bean/Jelly.png');

    //images for all 6 sauce types
    this.load.image('tomato sauce', 'all_images_assets/menu_assets/sauce/tomato.png');
    this.load.image('mustard', 'all_images_assets/menu_assets/sauce/mustard.png');
    this.load.image('mayo', 'all_images_assets/menu_assets/sauce/mayo.png');
    this.load.image('yum yum sauce', 'all_images_assets/menu_assets/sauce/yum.png');
    this.load.image('apple sauce', 'all_images_assets/menu_assets/sauce/apple.png');
    this.load.image('sus sauce', 'all_images_assets/menu_assets/sauce/sussy.png');

    //images for all 6 topping types
    this.load.image('cheese', 'all_images_assets/menu_assets/topping/cheese.png');
    this.load.image('gummy bears', 'all_images_assets/menu_assets/topping/gummi.png');
    this.load.image('nuclear waste', 'all_images_assets/menu_assets/topping/fallout.png');
    this.load.image('butter', 'all_images_assets/menu_assets/topping/butter.png');
    this.load.image('sus meat', 'all_images_assets/menu_assets/topping/dog.png');
    this.load.image('sponge', 'all_images_assets/menu_assets/topping/sponge.png');

    //images for each star rating
    this.load.image('0_star', 'all_images_assets/star_system_assets/0-star.png');
    this.load.image('1_star', 'all_images_assets/star_system_assets/1-star.png');
    this.load.image('2_star', 'all_images_assets/star_system_assets/2-star.png');
    this.load.image('3_star', 'all_images_assets/star_system_assets/3-star.png');
    this.load.image('4_star', 'all_images_assets/star_system_assets/4-star.png');
    this.load.image('5_star', 'all_images_assets/star_system_assets/5-star.png');

    //images for the 3 bowl sizes
    this.load.image('Bucket', 'all_images_assets/menu_assets/bowl/bowl_L.png');
    this.load.image('Wood Bowl', 'all_images_assets/menu_assets/bowl/bowl_M.png');
    this.load.image('Teacup', 'all_images_assets/menu_assets/bowl/bowl_S.png');
  }

  create() {

     gameState.checked = false
    gameState.checked_of1 = false
    gameState.checked_of2 = false
    gameState.checked_of3 = false
    gameState.checked_of4 = false
    gameState.checked_of5 = false
    // this code section is for the random kevin customer ... will add more kevin types later on
    let kevin_list = []
    kevin_list.push('joker_kevin')
    kevin_list.push('kevin_man')
    kevin_list.push('hair_kevin')
    kevin_list.push('stare_kevin')
    gameState.randomCustomer = Phaser.Utils.Array.GetRandom(kevin_list)

    /* Random temperature generator... gameState.stove_temp will be changed by the player input and if it is == gameState.random_T , points will be added to star system
    */
    let num_9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let num_500 = [0, 100, 200, 300, 400, 500]

    gameState.random_T = ((Phaser.Utils.Array.GetRandom(num_500)) + (Phaser.Utils.Array.GetRandom(num_9) * 10))
    console.log(gameState.random_T)

    //star system starting points ... each start is worth 15 points, so you will start with 2 stars
   

    //SOOOO MANY FOODS ... this is where the small square version of each food image is created
    let chicken = 'chicken'
    let ground_beef = 'ground beef'
    let pork = 'pork'
    let fish = 'fish'
    let lamb = 'lamb'
    let steak = 'steak'

    let macaroni = 'macaroni'
    let spaghetti = 'spaghetti'
    let fettuccine = 'fettuccine'
    let lasagna_noodles = 'lasagna noodles'
    let linguine = 'linguine'
    let ramen_noodles = 'ramen noodles'

    let baked_beans = 'baked beans'
    let kidney_beans = 'kidney beans'
    let lima_beans = 'lima beans'
    let green_beans = 'green beans'
    let coffee_beans = 'coffee beans'
    let jelly_beans = 'jelly beans'

    let tomato_sauce = 'tomato sauce'
    let mustard = 'mustard'
    let mayo = 'mayo'
    let yum_yum_sauce = 'yum yum sauce'
    let apple_sauce = 'apple sauce'
    let sussy_sauce = 'sus sauce'

    let cheese = 'cheese'
    let gummy_bears = 'gummy bears'
    let radioactive_material = 'nuclear waste'
    let butter = 'butter'
    let sus_meat = 'sus meat'
    let sponge = 'sponge'

    let large = 'Bucket'
    let medium = 'Wood Bowl'
    let small = 'Teacup'

    // Gets the random food items from the above lists ... these random food items are what appears on the menu
    var meat = [chicken, ground_beef, pork, fish, lamb, steak];
    gameState.random_meat = Phaser.Utils.Array.GetRandom(meat)
    console.log(gameState.random_meat);

    var noodle = [macaroni, spaghetti, fettuccine, lasagna_noodles, linguine, ramen_noodles];
    gameState.random_noodle = Phaser.Utils.Array.GetRandom(noodle)
    console.log(gameState.random_noodle);

    var bean = [baked_beans, kidney_beans, lima_beans, green_beans, coffee_beans, jelly_beans];
    gameState.random_bean = Phaser.Utils.Array.GetRandom(bean)
    console.log(gameState.random_bean);

    var sauce = [tomato_sauce, mustard, mayo, yum_yum_sauce, apple_sauce, sussy_sauce];
    gameState.random_sauce = Phaser.Utils.Array.GetRandom(sauce)
    console.log(gameState.random_sauce);

    var topping = [cheese, gummy_bears, radioactive_material, butter, sus_meat, sponge];
    gameState.random_topping = Phaser.Utils.Array.GetRandom(topping)
    console.log(gameState.random_topping);

    var bowl = [large, medium, small];
    gameState.random_bowl = Phaser.Utils.Array.GetRandom(bowl)
    console.log(gameState.random_bowl);

    // All sprites
    // title screen sprites
    gameState.background = this.add.sprite(400, 300, 'order_screen');

    // Creates the star system in corner ... starting star value is declared above
    gameState.star_system = this.add.sprite(100, 25, '2_star').setScale(0.25).setVisible(false)

    // order station sprites
    gameState.customer = this.add.sprite(525, 225, gameState.randomCustomer).setScale(0.75).setVisible(false);
    gameState.counter = this.add.sprite(375, 325, 'counter').setScale(2, 1.40).setVisible(false);
    gameState.go_cook = this.add.sprite(125, 150, 'cook').setVisible(false).setScale(0.2)
    gameState.speech_bubble = this.add.sprite(400, 90, 'speech').setScale(1, 1).setVisible(false)

    // Creates the temp text for the order
    gameState.random_temp_menu = this.add.text(273, 200, gameState.random_T.toString()).setVisible(false).setColor("#000000")
  
    // Random food items on the order menu 
    gameState.meat = this.add.sprite(280, 80, gameState.random_meat).setVisible(false).setScale(.04)
    gameState.meat_name = this.add.text(295, 80, gameState.random_meat.toString()).setVisible(false).setColor("#000000").setScale(.6)

    gameState.noodle = this.add.sprite(280, 105, gameState.random_noodle).setVisible(false).setScale(.04)
    gameState.noodle_name = this.add.text(295, 105, gameState.random_noodle.toString()).setVisible(false).setColor("#000000").setScale(.6)

    gameState.bean = this.add.sprite(280, 130, gameState.random_bean).setVisible(false).setScale(.04)
    gameState.bean_name = this.add.text(295, 130, gameState.random_bean.toString()).setVisible(false).setColor("#000000").setScale(.6)

    gameState.sauce = this.add.sprite(280, 155, gameState.random_sauce).setVisible(false).setScale(.04)
    gameState.sauce_name = this.add.text(295, 155, gameState.random_sauce.toString()).setVisible(false).setColor("#000000").setScale(.6)

    gameState.topping = this.add.sprite(280, 180, gameState.random_topping).setVisible(false).setScale(.04)
    gameState.topping_name = this.add.text(295, 180, gameState.random_topping.toString()).setVisible(false).setColor("#000000").setScale(.6)

    gameState.bowl = this.add.sprite(295, 230, gameState.random_bowl).setVisible(false).setScale(.1)
   gameState.bowl_name = this.add.text(315, 230, gameState.random_bowl.toString()).setVisible(false).setColor("#000000").setScale(.6)

    gameState.jar_scene = false
    // starts the game, changes the background, destroys unneeded sprites, and makes others visible

    gameState.customer.setVisible(true);
    gameState.counter.setVisible(true);
    gameState.star_system.setVisible(true)
    gameState.speech_bubble.setVisible(true).setInteractive();

    gameState.scene_number = 2

    gameState.speech_bubble.on('pointerdown', function (pointer) {
      gameState.speech_bubble.setTexture('menu').setPosition(300, 150).setScale(1.1,1);
      gameState.go_cook.setVisible(true).setInteractive()
      gameState.meat.setVisible(true)
      gameState.noodle.setVisible(true)
      gameState.bean.setVisible(true)
      gameState.sauce.setVisible(true)
      gameState.topping.setVisible(true)
      gameState.bowl.setVisible(true)
      gameState.meat_name.setVisible(true)
      gameState.noodle_name.setVisible(true)
      gameState.bean_name.setVisible(true)
      gameState.sauce_name.setVisible(true)
      gameState.topping_name.setVisible(true)
      gameState.bowl_name.setVisible(true)
      gameState.random_temp_menu.setVisible(true)

    })
    gameState.go_cook.on('pointerdown', function (pointer) {
      gameState.jar_scene = true
    })
  }
  update() {
    if (gameState.jar_scene == true) {
      this.scene.stop('order_scene')
      this.scene.start('jar_scene')
    }
    if (gameState.star_points <= 0 || gameState.star_points >= 75) {
        this.scene.stop('order_scene')
        this.scene.start('win_or_lose')
    }
    if (gameState.randomCustomer == 'kevin_man') {
      gameState.customer.setScale(-0.5, 0.5).setPosition(550, 250)
    }

    if (gameState.randomCustomer == 'hair_kevin') {
      gameState.customer.setScale(-1.5, 1.5).setPosition(550, 225)
    }

    if (gameState.randomCustomer == 'joker_kevin') {
      gameState.customer.setScale(0.75)
    }

    if (gameState.randomCustomer == 'stare_kevin') {
      gameState.customer.setScale(-0.25, 0.25).setPosition(525, 225)
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
    //game end condition
    if (gameState.star_points > 75) {
      this.scene.stop('order_scene')
      this.scene.start('win_or_lose')
    }
  }
}