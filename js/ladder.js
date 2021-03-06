
/* global Phaser*/
/* global player*/

var Ladder = (function () {
    function Ladder(startX, startY, game, player, group){
        this.sprite = game.add.sprite(startX, startY, "ladderSheet", 1);
        
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		
		this.sprite.body.immovable = true;
		this.sprite.body.allowGravity = false;
		group.add(this.sprite);
		
        Ladder.ladders.push(this);
    }
    
    Ladder.ladders = [];
    
    
    
    var p = Ladder.prototype;
    function onContactPlayer(argument) {
        // body...
    }
    
    
    return Ladder;
})();
