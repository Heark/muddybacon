var pigSprite;

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	// Loading the soon to be drawn pig
	 game.load.image('pig', 'pig.png');
}
function create() {
	// Drawing the pig
	 pigSprite = game.add.sprite(game.world.centerX, 0, 'pig');
	 pigSprite.body.collideWorldBounds = true;
}
function update() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		pigSprite.velocity.x = -50;
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		pigSprite.velocity.x = 50;
	}

}
function render() {

}
