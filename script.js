/* Disclaimer: We know we should add multiple things of text for the menu and tray to tell what something is, we are just waiting till we can actually start making new code again.
Also we've been trying to fix loading times. 
*/

const gameState = {

};


function preload(){
  //Start screen images
  this.load.image('title_screen', 'all_images_assets/start_assets/title.png');
  this.load.image('start', 'all_images_assets/start_assets/start.png');

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

  //order station related images
  this.load.image('order_screen', 'all_images_assets/order_assets/order.png');
  this.load.image('counter', 'all_images_assets/order_assets/counter.png');
  this.load.image('menu', 'all_images_assets/order_assets/menu.png');
  this.load.image('speech', 'all_images_assets/order_assets/bubble_R.png');
  this.load.image('cook', 'all_images_assets/order_assets/cook.png');

//images for all 6 meat types
  this.load.image('chicken', 'all_images_assets/menu_assets/meat/chicken.png');
  this.load.image('ground_beef', 'all_images_assets/menu_assets/meat/beef.png');
  this.load.image('pork', 'all_images_assets/menu_assets/meat/pork.png');
  this.load.image('fish', 'all_images_assets/menu_assets/meat/fish.png');
  this.load.image('lamb', 'all_images_assets/menu_assets/meat/lamb.png');
  this.load.image('steak', 'all_images_assets/menu_assets/meat/steak.png');

  //images for all 6 noodle types
  this.load.image('macaroni', 'all_images_assets/menu_assets/noodle/macaroni.png');
  this.load.image('spaghetti', 'all_images_assets/menu_assets/noodle/spag.png');
  this.load.image('fettuccine', 'all_images_assets/menu_assets/noodle/fett.png');
  this.load.image('lasagna_noodles', 'all_images_assets/menu_assets/noodle/Rav.png');
  this.load.image('linguine', 'all_images_assets/menu_assets/noodle/lin.png');
  this.load.image('ramen_noodles', 'all_images_assets/menu_assets/noodle/ramen.png');

  //images for all 6 bean types
  this.load.image('baked_beans', 'all_images_assets/menu_assets/bean/bakebeans.png');
  this.load.image('kidney_beans', 'all_images_assets/menu_assets/bean/kidney.png');
  this.load.image('lima_beans', 'all_images_assets/menu_assets/bean/lima.png');
  this.load.image('green_beans', 'all_images_assets/menu_assets/bean/green.png');
  this.load.image('coffee_beans', 'all_images_assets/menu_assets/bean/coffee.png');
  this.load.image('jelly_beans', 'all_images_assets/menu_assets/bean/Jelly.png');

  //images for all 6 sauce types
  this.load.image('tomato_sauce', 'all_images_assets/menu_assets/sauce/tomato.png');
  this.load.image('mustard', 'all_images_assets/menu_assets/sauce/mustard.png');
  this.load.image('mayo', 'all_images_assets/menu_assets/sauce/mayo.png');
  this.load.image('yum_yum', 'all_images_assets/menu_assets/sauce/yum.png');
  this.load.image('apple_sauce', 'all_images_assets/menu_assets/sauce/apple.png');
  this.load.image('sus', 'all_images_assets/menu_assets/sauce/sussy.png');

  //images for all 6 topping types
  this.load.image('cheese', 'all_images_assets/menu_assets/topping/cheese.png');
  this.load.image('gummy_bears', 'all_images_assets/menu_assets/topping/gummi.png');
  this.load.image('radioactive_material', 'all_images_assets/menu_assets/topping/fallout.png');
  this.load.image('butter', 'all_images_assets/menu_assets/topping/butter.png');
  this.load.image('sus_meat', 'all_images_assets/menu_assets/topping/dog.png');
  this.load.image('sponge', 'all_images_assets/menu_assets/topping/sponge.png');

  //images for the 3 bowl sizes
  this.load.image('large', 'all_images_assets/menu_assets/bowl/bowl_L.png');
  this.load.image('medium', 'all_images_assets/menu_assets/bowl/bowl_M.png');
  this.load.image('small', 'all_images_assets/menu_assets/bowl/bowl_S.png');

  //meat freezer images
  this.load.image('jar_C', 'all_images_assets/jar_assets/jar_C.png');
  this.load.image('jar_F', 'all_images_assets/jar_assets/jar_F.png');
  this.load.image('jar_GB', 'all_images_assets/jar_assets/jar_GB.png');
  this.load.image('jar_L', 'all_images_assets/jar_assets/jar_L.png');
  this.load.image('jar_P', 'all_images_assets/jar_assets/jar_P.png');
  this.load.image('jar_S', 'all_images_assets/jar_assets/jar_S.png')
  this.load.image('freezer', 'all_images_assets/ingredients_assets/freezer.png');

  //images for each star rating
  this.load.image('0_star', 'all_images_assets/star_system_assets/0-star.png');
  this.load.image('1_star', 'all_images_assets/star_system_assets/1-star.png');
  this.load.image('2_star', 'all_images_assets/star_system_assets/2-star.png');
  this.load.image('3_star', 'all_images_assets/star_system_assets/3-star.png');
  this.load.image('4_star', 'all_images_assets/star_system_assets/4-star.png');
  this.load.image('5_star', 'all_images_assets/star_system_assets/5-star.png');

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

  //images for the ingedients screen
  this.load.image('counter_top', 'all_images_assets/ingredients_assets/counter_top.png');
  this.load.image('food_tray', 'all_images_assets/ingredients_assets/food_tray.png');
  this.load.image('bowl', 'all_images_assets/ingredients_assets/pot.png');
 
  //audio files
  this.load.audio('music', ['music_assets/start.mp3']);
}

function create() {
  //plays the music
  gameState.song = this.sound.add('music', { loop: true });
  gameState.song.play();

  // shows pointer coords ... not for the game but useful for sprite positions
  this.input.on('pointerdown', function (pointer) {
    console.log(pointer.worldX);
    console.log(pointer.worldY);
  });

  // place holders for the start_button in the update if statements ... DO NOT TOUCH THESE VALUES
  gameState.rotation = 1
  gameState.size_of_button = 0.4
  size_loop = 1

  // this code section is for the random kevin customer ... will add more kevin types later on
  let kevin_list = []
  kevin_list.push('joker_kevin')
  kevin_list.push('kevin_man')
  kevin_list.push('hair_kevin')
  kevin_list.push('stare_kevin')
  gameState.randomCustomer = Phaser.Utils.Array.GetRandom(kevin_list)

  /* Random temperature generator... gameState.stove_temp will be changed by the player input and if it is == gameState.random_T , points will be added to star system
  */
  
  gameState.stove_temp = 0;
  let num_9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let num_500 = [0, 100, 200, 300, 400, 500]
  random_9 = Phaser.Utils.Array.GetRandom(num_9)
  by_10 = random_9 * 10
  random_500 = Phaser.Utils.Array.GetRandom(num_500)

  gameState.random_T = (random_500 + by_10)
  console.log(gameState.random_T)

  /* determines what part of the game is on ... used to stop kevin head from showing up after the start screen, and will be used in IF statements to control sprites later on
  */
  gameState.scene_number = 1
  gameState.kevin_animation = 1

  //star system starting points ... each start is worth 15 points, so you will start with 2 stars
  gameState.star_points = 30

  // checks the checks
  gameState.checked_of1 = false
  gameState.checked_of2 = false
  gameState.checked_of3 = false
  gameState.checked_of4 = false
  gameState.checked_of5 = false

  //this is a complete placeholder but the code breaks without it so ¯\_(ツ)_/¯
  gameState.placeholder = 'sliced_pork'

  //SOOOO MANY FOODS ... this is where the small square version of each food image is created
  let chicken = 'chicken'
  let ground_beef = 'ground_beef'
  let pork = 'pork'
  let fish = 'fish'
  let lamb = 'lamb'
  let steak = 'steak'

  let macaroni = 'macaroni'
  let spaghetti = 'spaghetti'
  let fettuccine = 'fettuccine'
  let lasagna_noodles = 'lasagna_noodles'
  let linguine = 'linguine'
  let ramen_noodles = 'ramen_noodles'

  let baked_beans = 'baked_beans'
  let kidney_beans = 'kidney_beans'
  let lima_beans = 'lima_beans'
  let green_beans = 'green_beans'
  let coffee_beans = 'coffee_beans'
  let jelly_beans = 'jelly_beans'

  let tomato_sauce = 'tomato_sauce'
  let mustard = 'mustard'
  let mayo = 'mayo'
  let yum_yum_sauce = 'yum_yum'
  let apple_sauce = 'apple_sauce'
  let sussy_sauce = 'sus'

  let cheese = 'cheese'
  let gummy_bears = 'gummy_bears'
  let radioactive_material = 'radioactive_material'
  let butter = 'butter'
  let sus_meat = 'sus_meat'
  let sponge = 'sponge'

  let large = 'large'
  let medium = 'medium'
  let small = 'small'

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
  background = this.add.sprite(400, 300, 'title_screen');
  gameState.start_button = this.add.sprite(430, 90, 'start').setScale(gameState.size_of_button).setInteractive();
  gameState.kevin_popup = this.add.sprite(283, -200, 'hair_kevin').setScale(1, 1).setAngle(180);

  // Creates the star system in corner ... starting star value is declared above
  gameState.star_system = this.add.sprite(100, 25, '2_star').setScale(0.25).setVisible(false)

  // order station sprites
  gameState.customer = this.add.sprite(525, 225, gameState.randomCustomer).setScale(0.75).setVisible(false);
  counter = this.add.sprite(375, 325, 'counter').setScale(2, 1.40).setVisible(false);
  gameState.go_cook = this.add.sprite(125, 150, 'cook').setVisible(false).setScale(0.2)
  gameState.speech_bubble = this.add.sprite(400, 90, 'speech').setScale(1, 1).setVisible(false)

  // Creates the temp text for the order
  gameState.random_temp_menu = this.add.text(273, 200, gameState.random_T.toString()).setVisible(false).setColor("#000000")

  // Random food items on the order menu 
  gameState.meat = this.add.sprite(300, 80, gameState.random_meat).setVisible(false).setScale(.04)
  gameState.noodle = this.add.sprite(300, 105, gameState.random_noodle).setVisible(false).setScale(.04)
  gameState.bean = this.add.sprite(300, 130, gameState.random_bean).setVisible(false).setScale(.04)
  gameState.sauce = this.add.sprite(300, 155, gameState.random_sauce).setVisible(false).setScale(.04)
  gameState.topping = this.add.sprite(300, 180, gameState.random_topping).setVisible(false).setScale(.04)
  gameState.bowl = this.add.sprite(295, 230, gameState.random_bowl).setVisible(false).setScale(.1)

  // Meat jar sprites
  gameState.jar_C = this.add.sprite(220, 315, 'jar_C').setVisible(false).setScale(.125).setInteractive()
  gameState.jar_GB = this.add.sprite(150, 155, 'jar_GB').setVisible(false).setScale(.125).setInteractive()
  gameState.jar_P = this.add.sprite(525, 400, 'jar_P').setVisible(false).setScale(.125).setInteractive()
  gameState.jar_F = this.add.sprite(140, 400, 'jar_F').setVisible(false).setScale(.125).setInteractive()
  gameState.jar_L = this.add.sprite(530, 235, 'jar_L').setVisible(false).setScale(.125).setInteractive()
  gameState.jar_S = this.add.sprite(690, 340, 'jar_S').setVisible(false).setScale(.125).setInteractive()

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

  // Ingedients station sprites
  gameState.food_tray = this.add.sprite(200, 350, 'food_tray').setVisible(false).setScale(0.1)
  gameState.pot = this.add.sprite(600, 310, 'bowl').setVisible(false).setScale(0.2)

  // the foods in the tray in the ingredients station
  // the noodles in the tray
  tray_fettuccine = this.add.sprite(165, 242, 'fettuccine').setVisible(false).setScale(0.1)
  tray_linguine = this.add.sprite(295, 242, 'linguine').setVisible(false).setScale(0.1)
  tray_macaroni = this.add.sprite(40, 242, 'macaroni').setVisible(false).setScale(0.1)
  tray_ramen_noodles = this.add.sprite(360, 242, 'ramen_noodles').setVisible(false).setScale(0.1)
  tray_lasagna_noodles = this.add.sprite(230, 242, 'lasagna_noodles').setVisible(false).setScale(0.1)
  tray_spaghetti = this.add.sprite(100, 242, 'spaghetti').setVisible(false).setScale(0.1)

  // the beans for the tray
  tray_baked_beans = this.add.sprite(40, 310, 'baked_beans').setVisible(false).setScale(0.1)
  tray_kidney_beans = this.add.sprite(100, 310, 'kidney_beans').setVisible(false).setScale(0.1)
  tray_lima_beans = this.add.sprite(165, 310, 'lima_beans').setVisible(false).setScale(0.1)
  tray_green_beans = this.add.sprite(230, 310, 'green_beans').setVisible(false).setScale(0.1)
  tray_coffee_beans = this.add.sprite(295, 310, 'coffee_beans').setVisible(false).setScale(0.1)
  tray_jelly_beans = this.add.sprite(360, 310, 'jelly_beans').setVisible(false).setScale(0.1)

  // the sauces for the tray
  tray_apple_sauce = this.add.sprite(295, 385, 'apple_sauce').setVisible(false).setScale(0.1)
  tray_mayo = this.add.sprite(165, 385, 'mayo').setVisible(false).setScale(0.1)
  tray_mustard = this.add.sprite(100, 385, 'mustard').setVisible(false).setScale(0.1)
  tray_sussy_sauce = this.add.sprite(360, 385, 'sus').setVisible(false).setScale(0.1)
  tray_tomato_sauce = this.add.sprite(40, 385, 'tomato_sauce').setVisible(false).setScale(0.1)
  tray_yum_yum_sauce = this.add.sprite(230, 385, 'yum_yum').setVisible(false).setScale(0.1)

  // the toppings for the tray
  tray_butter = this.add.sprite(230, 455, 'butter').setVisible(false).setScale(0.1)
  tray_cheese = this.add.sprite(40, 455, 'cheese').setVisible(false).setScale(0.1)
  tray_sus_meat = this.add.sprite(295, 455, 'sus_meat').setVisible(false).setScale(0.1)
  tray_radioactive_material = this.add.sprite(165, 455, 'radioactive_material').setVisible(false).setScale(0.1)
  tray_gummy_bears = this.add.sprite(100, 455, 'gummy_bears').setVisible(false).setScale
    (0.1)
  tray_sponge = this.add.sprite(360, 455, 'sponge').setVisible(false).setScale(0.1)

  // Puts these sprites in a list ... somehow this will be used for dragging controls for all at the same time
  food_items = [tray_fettuccine, tray_linguine, tray_macaroni, tray_ramen_noodles, tray_lasagna_noodles, tray_spaghetti, tray_baked_beans, tray_kidney_beans, tray_lima_beans, tray_green_beans, tray_coffee_beans, tray_jelly_beans, tray_apple_sauce, tray_mayo, tray_mustard, tray_sussy_sauce, tray_tomato_sauce, tray_yum_yum_sauce, tray_butter, tray_cheese, tray_sus_meat, tray_radioactive_material, tray_gummy_bears, tray_sponge]

  for (let i = 0; i < food_items; i++) {
    food_items[i].inputEnabled = true;
    food_items[i].input.on('pointerdown', function (pointer) {
      food_items[i].setPosition(pointer.x, pointer.y)
    });
  }

  // cutter movement ... makes the cutter follow the mouse
  this.input.on('pointermove', function (pointer) {
    gameState.cutter.setPosition(pointer.x + 100, pointer.y - 90)
  })


  // starts the game, changes the background, destroys unneeded sprites, and makes others visible
  gameState.start_button.on('pointerdown', function (pointer) {
    background.setTexture('order_screen')
    gameState.start_button.destroy();
    gameState.kevin_popup.destroy();
    gameState.customer.setVisible(true);
    counter.setVisible(true);
    gameState.star_system.setVisible(true)
    gameState.speech_bubble.setVisible(true).setInteractive();
    gameState.scene_number = 2
  })

  gameState.speech_bubble.on('pointerdown', function (pointer) {
    gameState.speech_bubble.setTexture('menu').setPosition(300, 150);
    gameState.go_cook.setVisible(true).setInteractive()
    gameState.meat.setVisible(true)
    gameState.noodle.setVisible(true)
    gameState.bean.setVisible(true)
    gameState.sauce.setVisible(true)
    gameState.topping.setVisible(true)
    gameState.bowl.setVisible(true)
    gameState.random_temp_menu.setVisible(true)
  })

  gameState.go_cook.on('pointerdown', function (pointer) {
    background.setTexture('ingredients')
    gameState.customer.setVisible(false);
    counter.setVisible(false);
    gameState.speech_bubble.setTexture('speech').setPosition(400, 90).setVisible(false);
    gameState.go_cook.setVisible(false)
    gameState.meat.setVisible(false)
    gameState.noodle.setVisible(false)
    gameState.bean.setVisible(false)
    gameState.sauce.setVisible(false)
    gameState.topping.setVisible(false)
    gameState.bowl.setVisible(false)
    gameState.random_temp_menu.setVisible(false)
    background.setTexture('freezer').setScale(.85, .9).setPosition(370, 260)
    gameState.jar_C.setVisible(true).setInteractive(true)
    gameState.jar_F.setVisible(true).setInteractive(true)
    gameState.jar_GB.setVisible(true).setInteractive(true)
    gameState.jar_L.setVisible(true).setInteractive(true)
    gameState.jar_P.setVisible(true).setInteractive(true)
    gameState.jar_S.setVisible(true).setInteractive(true)
    gameState.scene_number = 3
  })
  // jar on clicks
  gameState.jar_C.on('pointerdown', function (pointer) {
    jars_info()
    gameState.cut_meat.setTexture('cut_chicken').setVisible(true).setScale(.35)
    gameState.placeholder = 'sliced_bird'
  })

  gameState.jar_F.on('pointerdown', function (pointer) {
    jars_info()
    gameState.cut_meat.setTexture('cut_fish').setVisible(true).setScale(.35)
    gameState.chop_mark_2.setPosition('350', '160')
    gameState.chop_mark_5.setPosition('590', '290')
    gameState.placeholder = 'sliced_fish'
  })

  gameState.jar_GB.on('pointerdown', function (pointer) {
    jars_info()
    gameState.cut_meat.setTexture('cut_ground_beef').setVisible(true).setScale(.35)
    gameState.chop_mark_2.setPosition('350', '160')
    gameState.placeholder = 'sliced_beef'

  })

  gameState.jar_L.on('pointerdown', function (pointer) {
    jars_info()
    gameState.cut_meat.setTexture('cut_lamb').setVisible(true).setScale(.35)
    gameState.chop_mark_1.setPosition('330', '230')
    gameState.chop_mark_5.setPosition('580', '150')
    gameState.placeholder = 'sliced_lamb'
  })

  gameState.jar_P.on('pointerdown', function (pointer) {
    jars_info()
    gameState.cut_meat.setTexture('cut_pork').setVisible(true).setScale(.35)
    gameState.chop_mark_2.setPosition('380', '390')
    gameState.chop_mark_5.setPosition('510', '290')
    gameState.placeholder = 'sliced_pork'
  })

  gameState.jar_S.on('pointerdown', function (pointer) {
    jars_info()
    gameState.cut_meat.setTexture('cut_steak').setVisible(true).setScale(.35)
    gameState.chop_mark_2.setPosition('180', '350')
    gameState.placeholder = 'sliced_steak'
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
    background.setTexture('counter_top')
    gameState.continue_button.destroy()
    gameState.cut_meat.setPosition(200, 100).setScale(0.1)
    gameState.cutter.destroy()
    gameState.food_tray.setVisible(true)
    visible_trays()
    gameState.pot.setVisible(true)
  })


  // a function for things the jars need
  function jars_info() {
    background.setTexture('cutting_board')
    gameState.cutter.setVisible(true);
    gameState.jar_C.setVisible(false).setInteractive(false)
    gameState.jar_F.setVisible(false).setInteractive(false)
    gameState.jar_GB.setVisible(false).setInteractive(false)
    gameState.jar_L.setVisible(false).setInteractive(false)
    gameState.jar_P.setVisible(false).setInteractive(false)
    gameState.jar_S.setVisible(false).setInteractive(false)
    gameState.chop_mark_1.setVisible(true).setInteractive()
    gameState.chop_mark_2.setVisible(true).setInteractive()
    gameState.chop_mark_3.setVisible(true).setInteractive()
    gameState.chop_mark_4.setVisible(true).setInteractive()
    gameState.chop_mark_5.setVisible(true).setInteractive()
  }

  function visible_trays() {
    // tray noodles
    tray_fettuccine.setVisible(true)
    tray_linguine.setVisible(true)
    tray_macaroni.setVisible(true)
    tray_ramen_noodles.setVisible(true)
    tray_lasagna_noodles.setVisible(true)
    tray_spaghetti.setVisible(true)
    // tray beans
    tray_baked_beans.setVisible(true)
    tray_kidney_beans.setVisible(true)
    tray_lima_beans.setVisible(true)
    tray_green_beans.setVisible(true)
    tray_coffee_beans.setVisible(true)
    tray_jelly_beans.setVisible(true)
    // tray sauce
    tray_apple_sauce.setVisible(true)
    tray_mayo.setVisible(true)
    tray_mustard.setVisible(true)
    tray_sussy_sauce.setVisible(true)
    tray_tomato_sauce.setVisible(true)
    tray_yum_yum_sauce.setVisible(true)
    // tray toppings
    tray_butter.setVisible(true)
    tray_cheese.setVisible(true)
    tray_sus_meat.setVisible(true)
    tray_radioactive_material.setVisible(true)
    tray_gummy_bears.setVisible(true)
    tray_sponge.setVisible(true)
  }

function update() {
  if (gameState.checked_of1 == true && gameState.checked_of2 == true && gameState.checked_of3 == true && gameState.checked_of4 == true && gameState.checked_of5 == true) {
    gameState.chop_mark_1.setVisible(false)
    gameState.chop_mark_2.setVisible(false)
    gameState.chop_mark_3.setVisible(false)
    gameState.chop_mark_4.setVisible(false)
    gameState.chop_mark_5.setVisible(false)
    gameState.continue_button.setVisible(true).setInteractive()
    gameState.checked_of1 = false
    gameState.cut_meat.setTexture(gameState.placeholder)
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
  if (gameState.star_points == 0) {
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
  if (gameState.star_points == 75) {
    gameState.star_system.setTexture('5_star')
  }

  // makes start_button go side to side
  if (gameState.rotation == 1) {
    gameState.start_button.angle += 0.5
    if (gameState.start_button.angle > 25) {
      gameState.rotation = 2
    }
  }
  if (gameState.rotation == 2) {
    gameState.start_button.angle -= 0.5
    if (gameState.start_button.angle < -25) {
      gameState.rotation = 1
    }
  }
  // determines size of start_button
  // increases size of start_button
  if (size_loop == 1) {
    gameState.size_of_button += 0.001
    gameState.start_button.setScale(gameState.size_of_button)
    if (gameState.size_of_button > 0.5) {
      size_loop = 2
    }
  }
  // decreases size
  if (size_loop == 2) {
    gameState.start_button.setScale(gameState.size_of_button)
    gameState.size_of_button -= 0.001
    if (gameState.size_of_button < 0.3) {
      size_loop = 1
    }
  }

  // works if it is stark screen
  if (gameState.scene_number == 1) {
    // comes out from top left
    if (gameState.kevin_animation == 1) {
      gameState.kevin_popup.y += 0.75;
      if (gameState.kevin_popup)
        if (gameState.kevin_popup.y > 80) {
          gameState.kevin_animation = 2
        }
    }
    // goes back from top left
    if (gameState.kevin_animation == 2) {
      gameState.kevin_popup.y -= 0.75;
      // moves to bottom right
      if (gameState.kevin_popup.y < -200) {
        gameState.kevin_popup.setPosition(500, 750).setAngle(0).setScale(-2, 2);
        gameState.kevin_animation = 3
      }
    }
    // comes out of bottom right
    if (gameState.kevin_animation == 3) {
      gameState.kevin_popup.y -= 20;

      if (gameState.kevin_popup.y < 400) {
        gameState.kevin_animation = 4
      }
    }
    // goes back from bottom right
    if (gameState.kevin_animation == 4) {
      gameState.kevin_popup.y += 1
      // moves to left side
      if (gameState.kevin_popup.y > 750) {
        gameState.kevin_popup.setPosition(-100, 150).setAngle(90).setScale(1, 1);
        gameState.kevin_animation = 5
      }
    }
    // comes out of left side
    if (gameState.kevin_animation == 5) {
      gameState.kevin_popup.x += 0.75
      if (gameState.kevin_popup.x > 90) {
        gameState.kevin_animation = 6
      }
    }
    // goes back from left side
    if (gameState.kevin_animation == 6) {
      gameState.kevin_popup.x -= 0.75
      // moves to right side
      if (gameState.kevin_popup.x < -150) {
        gameState.kevin_popup.setPosition(850, 300).setAngle(90).setScale(2, -2);
        gameState.kevin_animation = 7
      }
    }
    // comes out of right side
    if (gameState.kevin_animation == 7) {
      gameState.kevin_popup.x -= 20;
      if (gameState.kevin_popup.x < 600) {
        gameState.kevin_animation = 8
      }
    }
    // goes back to right side
    if (gameState.kevin_animation == 8) {
      gameState.kevin_popup.x += 1
      // moves back to the top left or beginning point and repeats 

      if (gameState.kevin_popup.x > 950) {  
        gameState.kevin_popup.setPosition(200, -200).setScale(1, 1).setAngle(180)
        gameState.kevin_animation = 1
    }
      }
    // Stop here
  }
}

const config = {
  type: Phaser.AUTO,
  width: 750,
  height: 525,
  backgroundColor: "b9eaff",
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
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);