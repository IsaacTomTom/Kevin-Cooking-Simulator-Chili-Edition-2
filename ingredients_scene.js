/* Disclaimer: We know we should add multiple things of text for the menu and tray to tell what something is, we are just waiting till we can actually start making new code again.
*/
class ingredients_scene extends Phaser.Scene {
  constructor() {
    super({ key: 'ingredients_scene' })
  }

  //when player clicks start:


  preload() {

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
    this.load.image('reset', 'all_images_assets/ingredients_assets/reset.png');
    this.load.image('continue', 'all_images_assets/cutting_assets/continue.png');
  }

  create() {


    gameState.reset_ingredients = false

    // All sprites
    // title screen sprites
    gameState.background = this.add.sprite(400, 300, 'title_screen');

    gameState.con_butt = this.add.sprite(600, 50, 'continue').setVisible(true).setInteractive().setScale(.5)

    // Meat that you cut ... placeholder sprite looks weird but DONT DELETE

    gameState.pot = this.add.sprite(600, 310, 'bowl').setVisible(false).setScale(0.2).setInteractive()

    gameState.cut_meat = this.add.sprite(375, 260, gameState.placeholder).setScale(.75).setInteractive()
    gameState.move_cut_meat = this.add.sprite(200, 100, gameState.placeholder).setScale(.1).setVisible(false)

    gameState.ingredients_scene = false

    // Ingedients station sprites
    gameState.food_tray = this.add.sprite(200, 350, 'food_tray').setVisible(false).setScale(0.1)
    this.add.text(420, 222, 'N').setScale(2).setColor("#000000")
    this.add.text(420, 290, 'B').setScale(2).setColor("#000000")
    this.add.text(420, 365, 'S').setScale(2).setColor("#000000")
    this.add.text(420, 435, 'T').setScale(2).setColor("#000000")

    // the foods in the tray in the ingredients station
    // the noodles in the tray
    gameState.tray_fettuccine = this.add.sprite(165, 242, 'fettuccine').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_fettuccine = this.add.sprite(165, 242, 'fettuccine').setVisible(false).setScale(0.1)
    gameState.tray_linguine = this.add.sprite(295, 242, 'linguine').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_linguine = this.add.sprite(295, 242, 'linguine').setVisible(false).setScale(0.1)
    gameState.tray_macaroni = this.add.sprite(40, 242, 'macaroni').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_macaroni = this.add.sprite(40, 242, 'macaroni').setVisible(false).setScale(0.1)
    gameState.tray_ramen_noodles = this.add.sprite(360, 242, 'ramen_noodles').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_ramen_noodles = this.add.sprite(360, 242, 'ramen_noodles').setVisible(false).setScale(0.1)
    gameState.tray_lasagna_noodles = this.add.sprite(230, 242, 'lasagna_noodles').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_lasagna_noodles = this.add.sprite(230, 242, 'lasagna_noodles').setVisible(false).setScale(0.1)
    gameState.tray_spaghetti = this.add.sprite(100, 242, 'spaghetti').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_spaghetti = this.add.sprite(100, 242, 'spaghetti').setVisible(false).setScale(0.1)

    // the beans for the tray
    gameState.tray_baked_beans = this.add.sprite(40, 310, 'baked_beans').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_baked_beans = this.add.sprite(40, 310, 'baked_beans').setVisible(false).setScale(0.1)
    gameState.tray_kidney_beans = this.add.sprite(100, 310, 'kidney_beans').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_kidney_beans = this.add.sprite(100, 310, 'kidney_beans').setVisible(false).setScale(0.1)
    gameState.tray_lima_beans = this.add.sprite(165, 310, 'lima_beans').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_lima_beans = this.add.sprite(165, 310, 'lima_beans').setVisible(false).setScale(0.1)
    gameState.tray_green_beans = this.add.sprite(230, 310, 'green_beans').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_green_beans = this.add.sprite(230, 310, 'green_beans').setVisible(false).setScale(0.1)
    gameState.tray_coffee_beans = this.add.sprite(295, 310, 'coffee_beans').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_coffee_beans = this.add.sprite(295, 310, 'coffee_beans').setVisible(false).setScale(0.1)
    gameState.tray_jelly_beans = this.add.sprite(360, 310, 'jelly_beans').setVisible(false).setScale(0.1).setInteractive()
    gameState.move_jelly_beans = this.add.sprite(360, 310, 'jelly_beans').setVisible(false).setScale(0.1)

    // the sauces for the tray
    gameState.tray_apple_sauce = this.add.sprite(295, 385, 'apple_sauce').setVisible(false).setScale(0.1)
    gameState.move_apple_sauce = this.add.sprite(295, 385, 'apple_sauce').setVisible(false).setScale(0.1)
    gameState.tray_mayo = this.add.sprite(165, 385, 'mayo').setVisible(false).setScale(0.1)
    gameState.move_mayo = this.add.sprite(165, 385, 'mayo').setVisible(false).setScale(0.1)
    gameState.tray_mustard = this.add.sprite(100, 385, 'mustard').setVisible(false).setScale(0.1)
    gameState.move_mustard = this.add.sprite(100, 385, 'mustard').setVisible(false).setScale(0.1)
    gameState.tray_sussy_sauce = this.add.sprite(360, 385, 'sus').setVisible(false).setScale(0.1)
    gameState.move_sussy_sauce = this.add.sprite(360, 385, 'sus').setVisible(false).setScale(0.1)
    gameState.tray_tomato_sauce = this.add.sprite(40, 385, 'tomato_sauce').setVisible(false).setScale(0.1)
    gameState.move_tomato_sauce = this.add.sprite(40, 385, 'tomato_sauce').setVisible(false).setScale(0.1)
    gameState.tray_yum_yum_sauce = this.add.sprite(230, 385, 'yum_yum').setVisible(false).setScale(0.1)
    gameState.move_yum_yum_sauce = this.add.sprite(230, 385, 'yum_yum').setVisible(false).setScale(0.1)

    // the toppings for the tray
    gameState.tray_butter = this.add.sprite(230, 455, 'butter').setVisible(false).setScale(0.1)
    gameState.move_butter = this.add.sprite(230, 455, 'butter').setVisible(false).setScale(0.1)
    gameState.tray_cheese = this.add.sprite(40, 455, 'cheese').setVisible(false).setScale(0.1)
    gameState.move_cheese = this.add.sprite(40, 455, 'cheese').setVisible(false).setScale(0.1)
    gameState.tray_sus_meat = this.add.sprite(295, 455, 'sus_meat').setVisible(false).setScale(0.1)
    gameState.move_sus_meat = this.add.sprite(295, 455, 'sus_meat').setVisible(false).setScale(0.1)
    gameState.tray_radioactive_material = this.add.sprite(165, 455, 'radioactive_material').setVisible(false).setScale(0.1)
    gameState.move_radioactive_material = this.add.sprite(165, 455, 'radioactive_material').setVisible(false).setScale(0.1)
    gameState.tray_gummy_bears = this.add.sprite(100, 455, 'gummy_bears').setVisible(false).setScale(0.1)
    gameState.move_gummy_bears = this.add.sprite(100, 455, 'gummy_bears').setVisible(false).setScale(0.1)
    gameState.tray_sponge = this.add.sprite(360, 455, 'sponge').setVisible(false).setScale(0.1)
    gameState.move_sponge = this.add.sprite(360, 455, 'sponge').setVisible(false).setScale(0.1)


    gameState.reset_scene = this.add.sprite(25, 25, 'reset').setInteractive().setScale(.25);
    gameState.moved = true
    gameState.selected_placeholder = ' '


    this.input.on('pointermove', function (pointer) {
      gameState.move_fettuccine.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_linguine.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_macaroni.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_ramen_noodles.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_lasagna_noodles.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_spaghetti.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_baked_beans.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_green_beans.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_coffee_beans.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_jelly_beans.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_lima_beans.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_kidney_beans.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_apple_sauce.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_mayo.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_mustard.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_sussy_sauce.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_tomato_sauce.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_yum_yum_sauce.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_butter.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_sponge.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_gummy_bears.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_sus_meat.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_radioactive_material.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_cheese.setPosition(pointer.x, pointer.y)
    })
    this.input.on('pointermove', function (pointer) {
      gameState.move_cut_meat.setPosition(pointer.x, pointer.y)
    })


    function visible_trays() {
      // tray noodles
      gameState.pot.setInteractive()
      gameState.tray_fettuccine.setVisible(true).setInteractive()
      gameState.tray_linguine.setVisible(true).setInteractive()
      gameState.tray_macaroni.setVisible(true).setInteractive()
      gameState.tray_ramen_noodles.setVisible(true).setInteractive()
      gameState.tray_lasagna_noodles.setVisible(true).setInteractive()
      gameState.tray_spaghetti.setVisible(true).setInteractive()
      // tray beans
      gameState.tray_baked_beans.setVisible(true).setInteractive()
      gameState.tray_kidney_beans.setVisible(true).setInteractive()
      gameState.tray_lima_beans.setVisible(true).setInteractive()
      gameState.tray_green_beans.setVisible(true).setInteractive()
      gameState.tray_coffee_beans.setVisible(true).setInteractive()
      gameState.tray_jelly_beans.setVisible(true).setInteractive()
      // tray sauce
      gameState.tray_apple_sauce.setVisible(true).setInteractive()
      gameState.tray_mayo.setVisible(true).setInteractive()
      gameState.tray_mustard.setVisible(true).setInteractive()
      gameState.tray_sussy_sauce.setVisible(true).setInteractive()
      gameState.tray_tomato_sauce.setVisible(true).setInteractive()
      gameState.tray_yum_yum_sauce.setVisible(true).setInteractive()
      // tray toppings
      gameState.tray_butter.setVisible(true).setInteractive()
      gameState.tray_cheese.setVisible(true).setInteractive()
      gameState.tray_sus_meat.setVisible(true).setInteractive()
      gameState.tray_radioactive_material.setVisible(true).setInteractive()
      gameState.tray_gummy_bears.setVisible(true).setInteractive()
      gameState.tray_sponge.setVisible(true).setInteractive()
    }

    gameState.ingredients_scene = false
    gameState.background.setTexture('counter_top')
    gameState.cut_meat.setPosition(200, 100).setScale(0.1)
    gameState.food_tray.setVisible(true)
    gameState.pot.setVisible(true)

    gameState.con_butt.on('pointerdown', function (pointer) {
      gameState.ingredients_scene = true
    })
    visible_trays()

    gameState.score_noodle = ' '
    gameState.score_bean = ' '
    gameState.score_sauce = ' '
    gameState.score_topping = ' '
    
    gameState.reset_scene.on('pointerdown', function (pointer) {
      gameState.reset_ingredients = true
    })

  }

  update() {
    if (gameState.ingredients_scene == true) {
      this.scene.stop('ingredients_scene')
      this.scene.start('cooking_station')
    }
    if (gameState.reset_ingredients == true) {
      this.scene.stop('ingredients_scene')
      this.scene.start('ingredients_scene')
    }
    gameState.tray_fettuccine.on('pointerdown', function (pointer) {
      gameState.tray_fettuccine.destroy()
      gameState.move_fettuccine.setVisible(true)
      gameState.selected_placeholder = "fett"
      gameState.moved = false
    })

    gameState.tray_linguine.on('pointerdown', function (pointer) {
      gameState.tray_linguine.destroy()
      gameState.move_linguine.setVisible(true)
      gameState.selected_placeholder = "lin"
      gameState.moved = false
    })

    gameState.tray_lasagna_noodles.on('pointerdown', function (pointer) {
      gameState.tray_lasagna_noodles.destroy()
      gameState.move_lasagna_noodles.setVisible(true)
      gameState.selected_placeholder = "lasag"
      gameState.moved = false
    })

    gameState.tray_spaghetti.on('pointerdown', function (pointer) {
      gameState.tray_spaghetti.destroy()
      gameState.move_spaghetti.setVisible(true)
      gameState.selected_placeholder = "spag"
      gameState.moved = false
    })

    gameState.tray_ramen_noodles.on('pointerdown', function (pointer) {
      gameState.tray_ramen_noodles.destroy()
      gameState.move_ramen_noodles.setVisible(true)
      gameState.selected_placeholder = "ram"
      gameState.moved = false
    })

    gameState.tray_macaroni.on('pointerdown', function (pointer) {
      gameState.tray_macaroni.destroy()
      gameState.move_macaroni.setVisible(true)
      gameState.selected_placeholder = "mac"
      gameState.moved = false
    })

    gameState.tray_kidney_beans.on('pointerdown', function (pointer) {
      gameState.tray_kidney_beans.destroy()
      gameState.move_kidney_beans.setVisible(true)
      gameState.selected_placeholder = "kidneys"
      gameState.moved = false
    })

    gameState.tray_baked_beans.on('pointerdown', function (pointer) {
      gameState.tray_baked_beans.destroy()
      gameState.move_baked_beans.setVisible(true)
      gameState.selected_placeholder = "bakebeans"
      gameState.moved = false
    })

    gameState.tray_lima_beans.on('pointerdown', function (pointer) {
      gameState.tray_lima_beans.destroy()
      gameState.move_lima_beans.setVisible(true)
      gameState.selected_placeholder = "lima"
      gameState.moved = false
    })


    gameState.tray_green_beans.on('pointerdown', function (pointer) {
      gameState.tray_green_beans.destroy()
      gameState.move_green_beans.setVisible(true)
      gameState.selected_placeholder = "green"
      gameState.moved = false
    })

    gameState.tray_coffee_beans.on('pointerdown', function (pointer) {
      gameState.tray_coffee_beans.destroy()
      gameState.move_coffee_beans.setVisible(true)
      gameState.selected_placeholder = "coffee"
      gameState.moved = false
    })

    gameState.tray_jelly_beans.on('pointerdown', function (pointer) {
      gameState.tray_jelly_beans.destroy()
      gameState.move_jelly_beans.setVisible(true)
      gameState.selected_placeholder = "jelly"
      gameState.moved = false
    })

    gameState.tray_tomato_sauce.on('pointerdown', function (pointer) {
      gameState.tray_tomato_sauce.destroy()
      gameState.move_tomato_sauce.setVisible(true)
      gameState.selected_placeholder = "toma"
      gameState.moved = false
    })

    gameState.tray_mustard.on('pointerdown', function (pointer) {
      gameState.tray_mustard.destroy()
      gameState.move_mustard.setVisible(true)
      gameState.selected_placeholder = "must"
      gameState.moved = false
    })

    gameState.tray_mayo.on('pointerdown', function (pointer) {
      gameState.tray_mayo.destroy()
      gameState.move_mayo.setVisible(true)
      gameState.selected_placeholder = "may"
      gameState.moved = false
    })

    gameState.tray_yum_yum_sauce.on('pointerdown', function (pointer) {
      gameState.tray_yum_yum_sauce.destroy()
      gameState.move_yum_yum_sauce.setVisible(true)
      gameState.selected_placeholder = "yum"
      gameState.moved = false
    })

    gameState.tray_apple_sauce.on('pointerdown', function (pointer) {
      gameState.tray_apple_sauce.destroy()
      gameState.move_apple_sauce.setVisible(true)
      gameState.selected_placeholder = "app"
      gameState.moved = false
    })

    gameState.tray_sussy_sauce.on('pointerdown', function (pointer) {
      gameState.tray_sussy_sauce.destroy()
      gameState.move_sussy_sauce.setVisible(true)
      gameState.selected_placeholder = "sus"
      gameState.moved = false
    })

    gameState.tray_cheese.on('pointerdown', function (pointer) {
      gameState.tray_cheese.destroy()
      gameState.move_cheese.setVisible(true)
      gameState.selected_placeholder = "chee"
      gameState.moved = false
    })

    gameState.tray_gummy_bears.on('pointerdown', function (pointer) {
      gameState.tray_gummy_bears.destroy()
      gameState.move_gummy_bears.setVisible(true)
      gameState.selected_placeholder = "gum"
      gameState.moved = false
    })

    gameState.tray_butter.on('pointerdown', function (pointer) {
      gameState.tray_butter.destroy()
      gameState.move_butter.setVisible(true)
      gameState.selected_placeholder = "butt"
      gameState.moved = false
    })

    gameState.tray_sus_meat.on('pointerdown', function (pointer) {
      gameState.tray_sus_meat.destroy()
      gameState.move_sus_meat.setVisible(true)
      gameState.selected_placeholder = "susme"
      gameState.moved = false
    })
    gameState.tray_radioactive_material.on('pointerdown', function (pointer) {
      gameState.tray_radioactive_material.destroy()
      gameState.move_radioactive_material.setVisible(true)
      gameState.selected_placeholder = "radi"
      gameState.moved = false
    })

    gameState.tray_sponge.on('pointerdown', function (pointer) {
      gameState.tray_sponge.destroy()
      gameState.move_sponge.setVisible(true)
      gameState.selected_placeholder = "spon"
      gameState.moved = false
    })

    gameState.cut_meat.on('pointerdown', function (pointer) {
      gameState.cut_meat.destroy()
      gameState.move_cut_meat.setVisible(true)
      gameState.selected_placeholder = "cutmeat"
      gameState.moved = false
    })

    if (gameState.moved == false) {
      if (gameState.selected_placeholder == "lin") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_linguine.destroy()
          gameState.moved = true
          gameState.score_noodle = 'linguine'
        })
      }

      if (gameState.selected_placeholder == "fett") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_fettuccine.destroy()
          gameState.moved = true
          gameState.score_noodle = 'fettuccine'
        })
      }

      if (gameState.selected_placeholder == "lasag") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_lasagna_noodles.destroy()
          gameState.moved = true
          gameState.score_noodle = 'lasagna noodles'
        })
      }


      if (gameState.selected_placeholder == "spag") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_spaghetti.destroy()
          gameState.moved = true
          gameState.score_noodle = 'spaghetti'
        })
      }

      if (gameState.selected_placeholder == "ram") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_ramen_noodles.destroy()
          gameState.moved = true
          gameState.score_noodle = 'ramen noodles'
        })
      }

      if (gameState.selected_placeholder == "mac") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_macaroni.destroy()
          gameState.moved = true
          gameState.score_noodle = 'macaroni'
        })
      }

      if (gameState.selected_placeholder == "bakebeans") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_baked_beans.destroy()
          gameState.moved = true
          gameState.score_bean = 'baked beans'
        })
      }

      if (gameState.selected_placeholder == "kidneys") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_kidney_beans.destroy()
          gameState.moved = true
          gameState.score_bean = 'kidney beans'
        })
      }

      if (gameState.selected_placeholder == "lima") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_lima_beans.destroy()
          gameState.moved = true
          gameState.score_bean = 'lima beans'
        })
      }

      if (gameState.selected_placeholder == "green") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_green_beans.destroy()
          gameState.moved = true
          gameState.score_bean = 'green beans'
        })
      }

      if (gameState.selected_placeholder == "coffee") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_coffee_beans.destroy()
          gameState.moved = true
          gameState.score_bean = 'coffee beans'
        })
      }

      if (gameState.selected_placeholder == "jelly") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_jelly_beans.destroy()
          gameState.moved = true
          gameState.score_bean = 'jelly beans'
        })
      }

      if (gameState.selected_placeholder == "toma") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_tomato_sauce.destroy()
          gameState.moved = true
          gameState.score_sauce = 'tomato sauce'
        })
      }

      if (gameState.selected_placeholder == "must") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_mustard.destroy()
          gameState.moved = true
          gameState.score_sauce = 'mustard'
        })
      }

      if (gameState.selected_placeholder == "may") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_mayo.destroy()
          gameState.moved = true
          gameState.score_sauce = 'mayo'
        })
      }

      if (gameState.selected_placeholder == "yum") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_yum_yum_sauce.destroy()
          gameState.moved = true
          gameState.score_sauce = 'yum yum sauce'
        })
      }

      if (gameState.selected_placeholder == "app") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_apple_sauce.destroy()
          gameState.moved = true
          gameState.score_sauce = 'apple sauce'
        })
      }

      if (gameState.selected_placeholder == "sus") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_sussy_sauce.destroy()
          gameState.moved = true
          gameState.score_sauce = 'sus sauce'
        })
      }

      if (gameState.selected_placeholder == "butt") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_butter.destroy()
          gameState.moved = true
          gameState.score_topping = 'butter'
        })
      }

      if (gameState.selected_placeholder == "chee") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_cheese.destroy()
          gameState.moved = true
          gameState.score_topping = 'cheese'
        })
      }

      if (gameState.selected_placeholder == "gum") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_gummy_bears.destroy()
          gameState.moved = true
          gameState.score_topping = 'gummy bears'
        })
      }

      if (gameState.selected_placeholder == "susme") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_sus_meat.destroy()
          gameState.moved = true
          gameState.score_topping = 'sus meat'
        })
      }

      if (gameState.selected_placeholder == "radi") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_radioactive_material.destroy()
          gameState.moved = true
          gameState.score_topping = 'nuclear waste'
        })
      }
      if (gameState.selected_placeholder == "spon") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_sponge.destroy()
          gameState.moved = true
          gameState.score_topping = 'sponge'
        })
      }

      if (gameState.selected_placeholder == "cutmeat") {
        gameState.pot.on('pointerdown', function (pointer) {
          gameState.move_cut_meat.destroy()
          gameState.moved = true
        })
      }

    }
  }
}