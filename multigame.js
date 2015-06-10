$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	//space invaders vars
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	var screen;
	var sisx, sisy, sisw, sish;
	var status;
	var shoot;
	var speeds;
	var Enemy = new Array();
	var Enemyx = new Array();
	var Enemyy = new Array();
	var path;
	var playerx;
	var stage;
	var laserx = new Array();
	var lasery = new Array();
	var vely;
	var Alien1 = new Image();
	var Alien2 = new Image();
	var Alien3 = new Image();
	var Ex, Ey;
	var Score;
	var EnemyShoot = new Array();
	var EnemyLy = new Array();
	var EnemyLx = new Array();
	var LaserSound = new Audio();
	var EnemyExplode = new Audio();
	var BackgroundMusic = new Audio();
	
	//the pong vars
	var ballx, bally;
	var speeds = 0;
	var radius;
	var velX, velY;
	var pdl1x, pdl1y, pdl2x, pdl2y;
	var pongsx, pongsy, pongsw, pongsh;
	pdlh = new Array();
	pdlw = new Array();
	pdlx = new Array();
	pdly = new Array();
	score = new Array();
	
	//Head-head vars
	var p1shoot, p2shoot;
	var playerx, player2x;
	var covery;
	var coverx = new Array();
	var p1lives, p2lives;
	var p1livesx = new Array();
	var p2livesx = new Array();
	var victorysound = new Audio();
	var CannonSound = new Audio();
	var Playerexplode = new Audio();
	var sound = new Array();
	
	
	//use functions to draw, and a for loop to make them
	
	
	
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{

	Alien1.src = 'space invaders alien 1.png'
	Alien2.src = 'space invaders alien 2.png'
	Alien3.src = 'space invaders alien 3.png'
	LaserSound.src = '87402^LASER.mp3'
	EnemyExplode.src = 'enemy explode.mp3'
	BackgroundMusic.src = 'Space Invaders Soundtrack.mp3'
		
		//to have a title screen
		screen = 1;
		startx = w/2 - 90;
		starty = 250;
		startw = 150;
		starth = 75;
		sisx = 225;
		sisy = 165;
		sisw = 160;
		sish = 40;
		
		//space invaders vars
		playerx = 260;
		
		Score = 0;
		lasery.push (460);
		vely = 15;

		
		mA(50,-300000);
		mA(50, 40);
		mA(90, 40);
		mA(130, 40);
		mA(170, 40);
		mA(210, 40);
		mA(250, 40);
		mA(290, 40);
		mA(330, 40);
		mA(370, 40);
		mA(410, 40);
		
		
		mA(50,90);
		mA(90, 90);
		mA(130, 90);
		mA(170, 90);
		mA(210, 90);
		mA(250, 90);
		mA(290, 90);
		mA(330, 90);
		mA(370, 90);
		mA(410, 90);
		
		mA(50,140);
		mA(90, 140);
		mA(130, 140);
		mA(170, 140);
		mA(210, 140);
		mA(250, 140);
		mA(290, 140);
		mA(330, 140);
		mA(370, 140);
		mA(410, 140);
		
		mA(50,190);
		mA(90, 190);
		mA(130, 190);
		mA(170, 190);
		mA(210, 190);
		mA(250, 190);
		mA(290, 190);
		mA(330, 190);
		mA(370, 190);
		mA(410, 190);
		
		stage = 1;
		path = -0.25;
		EnemyShoot = false;

	status = 0;

	
	shoot = false;
	sound[0] = false;
	
	
	
	//pong vars
	pongsx = 265;
	pongsy = 210;
	pongsw = 70;
	pongsh = 35;
	
	pdlh[0] = 100;
	pdlw[0] = 15;
	pdlx[0] = 50;
	pdly[0] = 200;
	
	
	pdlh[1] = 100;
	pdlw[1] =15;
	pdlx[1] = 590;
	pdly[1] = 200;
	ballx = 250;
	bally = 300;
	radius = 15;
	velX = -17;
	velY = -4;
	
	score[0] = 0;
	score[1] = 0;
	
	//Head-Head vars
		p1livesx.push (10);
		p1livesx.push(28);
		p1livesx.push (46);
		
		p2livesx.push (580);
		p2livesx.push (598);
		p2livesx.push (616);

		player2x = 260;
		p1lives = 3;
		p2lives = 3;
		p1shoot = false;
		p2shoot = false;	

		sound[1] = false;
		CannonSound.src = 'Cannon shot.mp3'
		Playerexplode.src = 'Playerexplode.mp3'
		victorysound.src = 'queen-we_are_the_champions.mp3';
	
	//////////
	///STATE VARIABLES
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	

	
	
	//ALL THE KEY CODES
	
	

	//space invaders keys
	//to move the player left and right
addEventListener("keydown", function(event) {
    if (event.keyCode == 37){
	playerx -= 5;
	}else if(event.keyCode == 39){
	playerx += 5;
	}
});
	
	//press space to shoot
	addEventListener("keydown", function(event) {
	if(event.keyCode == 32 && screen == 3){
	shoot = true;
	sound[0] = true;
	}
	});
		addEventListener("keyup", function(event) {
	if(event.keyCode == 32 && screen == 3){
	sound[0] = false;
	}
	});
	
	


	
	
	
	//pong keys
	addEventListener("keydown", function(event) {
    if (event.keyCode == 40){
	pdly[1] += 20;
	}else if(event.keyCode == 38){
	pdly[1] -= 20;
	}
	});
	
	addEventListener("keydown", function(event) {
    if (event.keyCode == 83){
	pdly[0] -= 20;
	}else if(event.keyCode == 88){
	pdly[0] += 20;
	}
	});
	

	
	
	
	
	
	//Head-Head keys
	//to move the first player left and right
addEventListener("keydown", function(event) {
    if (event.keyCode == 37){
	playerx -= 5;
	}else if(event.keyCode == 39){
	playerx += 5;
	}
});
	
	//to move the second player left and right
addEventListener("keydown", function(event) {
    if (event.keyCode == 88){
	player2x += 5;
	}else if(event.keyCode == 90){
	player2x -= 5;
	}
});
	
	//press space to shoot
	addEventListener("keydown", function(event) {
	if(event.keyCode == 32 && screen == 7){
	p2shoot = true;
	sound[1] = true;
	}
	});
	
	addEventListener("keyup", function(event) {
	if(event.keyCode == 32){
	sound[1] = false;
	}
	});
	
	//press up arrow to shoot
	addEventListener("keydown", function(event) {
	if(event.keyCode == 38 && screen == 7){
	p1shoot = true
	sound[1] = true;
	}
	});
	
		//press up arrow to shoot
	addEventListener("keyup", function(event) {
	if(event.keyCode == 38){
	sound[1] = false;
	}
	});
	
	
	//ALL THE FUNCTIONS
	
	//a function to control all the sounds
	function Sound(){
		
		if(screen == 3){
			BackgroundMusic.play();
		}
		if(sound[0] == true){
			LaserSound.play();
		}
		
		if(sound[1] == true){
			CannonSound.play();
		}
	}

	//to give coordinates to the aliens to make them
	function mA(x,y){
			Enemyx.push (x);
			Enemyy.push (y);
			EnemyLx.push(x);
			EnemyLy.push(y);
	}

	//to work the laser
	function Laser(){
	//to make the laser appear from the middle of the player and move up
			
	
				if(shoot == true){
					
					ctx.fillStyle = 'white';
					ctx.fillRect(laserx, lasery, 5, 10);
					lasery -=  vely;
				}else{
						lasery = 460;
					laserx = playerx + 33;
				}//to make the bullet return to the player if you miss
				if(lasery <= 0){
					shoot = false;
				}
				if(lasery <=  0 && shoot == false){
						lasery = 460;
						lasery  -= 0;
				}
	}
		
		
		function HeadLaser(){


	//to make the laser appear from the middle of the player

				if(p1shoot == true){

					ctx.fillStyle = 'green';
					ctx.fillRect(laserx[0], lasery[0], 5, 10);
					lasery[0] -=  vely;
				}
				if(lasery[0] <= 0){
					p1shoot = false;
				}
		
			if(p2shoot == true){
					ctx.fillStyle = 'red';
					ctx.fillRect(laserx[1], lasery[1], 5, 10);
					lasery[1] +=  vely;
				}
				if(lasery[1] >= 480){
					p2shoot = false;
				}
				}
	
	//to control when an alien is hit/what to do
	function Hit(){
			for(var i = 0; i < Enemyx.length; i ++){
				if(laserx > Enemyx[i] && laserx < Enemyx[i] + 30 && lasery > Enemyy[i] && lasery < Enemyy[i] + 30){
					Enemyx.splice(i, 1);
					Enemyy.splice(i, 1);
					shoot = false;
					lasery = 460;
					lasery += 0;
					Score += 100;
					EnemyExplode.play();
				}
			}
		}
	
	function Restart(){
		if(Score == 4000){
			screen = 9;
		}
	}

	

	function Pathing(){
			//to make the aliens move and go right and bounce

			if(Enemyx[0] <= w - 400){
					Enemyx[0] += path;
					Enemyx[1]	+= path;
					Enemyx[2] += path;
					Enemyx[3] += path;
					Enemyx[4] += path;
					Enemyx[5] += path;
					Enemyx[6] += path;
					Enemyx[7] += path;
					Enemyx[8] += path;
					Enemyx[9] += path;
					Enemyx[10] += path;
					Enemyx[11] += path;
					Enemyx[12] += path;
					Enemyx[13] += path;
					Enemyx[14] += path;
					Enemyx[15] += path;
					Enemyx[16] += path;
					Enemyx[17] += path;
					Enemyx[18] += path;
					Enemyx[19] += path;
					Enemyx[20] += path;
					Enemyx[21] += path;
					Enemyx[22] += path;
					Enemyx[23] += path;
					Enemyx[24] += path;
					Enemyx[25] += path;
					Enemyx[26] += path;
					Enemyx[27] += path;
					Enemyx[28] += path;
					Enemyx[29] += path;
					Enemyx[30] += path;
					Enemyx[31] += path;
					Enemyx[32] += path;
					Enemyx[33] += path;
					Enemyx[34] += path;
					Enemyx[35] += path;
					Enemyx[36] += path;
					Enemyx[37] += path;
					Enemyx[38] += path;
					Enemyx[39] += path;
					Enemyx[40] += path;
//makes the aliens drop
				}else if(Enemyx[0] >= w - 400){
					path *= -1;

					Enemyy[0] += 40;
					Enemyy[1] += 40;
					Enemyy[2] += 40;
					Enemyy[3] += 40;
					Enemyy[4] += 40;
					Enemyy[5] += 40;
					Enemyy[6] += 40;
					Enemyy[7] += 40;
					Enemyy[8] += 40;
					Enemyy[9] += 40;
					Enemyy[10] += 40;
					Enemyy[11] += 40;
					Enemyy[12] += 40;
					Enemyy[13] += 40;
					Enemyy[14] += 40;
					Enemyy[15] += 40;
					Enemyy[16] += 40;
					Enemyy[17] += 40;
					Enemyy[18] += 40;
					Enemyy[19] += 40;
					Enemyy[20] += 40;
					Enemyy[21] += 40;
					Enemyy[22] += 40;
					Enemyy[23] += 40;
					Enemyy[24] += 40;
					Enemyy[25] += 40;
					Enemyy[26] += 40;
					Enemyy[27] += 40;
					Enemyy[28] += 40;
					Enemyy[29] += 40;
					Enemyy[30] += 40;
					Enemyy[31] += 40;
					Enemyy[32] += 40;
					Enemyy[33] += 40;
					Enemyy[34] += 40;
					Enemyy[35] += 40;
					Enemyy[36] += 40;
					Enemyy[37] += 40;
					Enemyy[38] += 40;
					Enemyy[39] += 40;
					Enemyy[40] += 40;

					stage += 1;
		
				}
		//to make the aliens move and go left and bounce
				if(Enemyx[0] >= 200){
					Enemyx[0] += path;
				}else if(Enemyx[0] <= 50){
					path *= -1;
					Enemyx[0] += path;
				}
			}
			
	// a random number generator function i can call on for the next function
	// generates a random number which will be pick which alien has a chance to shoot
	function AlienToShoot(){
		return Math.round((Math.random() * Enemyx.length) + 1);
	}
//to make it so the alien chosen wont always be firing lasers
	function ChanceToShoot(){
		return Math.round((Math.random()* 6) + 1);
	}


	//a function to make the aliens fire at random times		
	//WIP
	function Invasion(){
 
		for(var i = AlienToShoot() ; i < Enemyx.length; i++){
 
			if(AlienToShoot() <= 40 ){
				EnemyShoot[i] == true
			
			}

			if(EnemyShoot[i] == true){

 
					ctx.fillStyle = 'red';
					ctx.fillRect(EnemyLx[i] + 13, EnemyLy[i] + 13 , 5, 10);
					EnemyLy[i] +=  15;
				}
				if(EnemyLy[i] >= 460){
					EnemyShoot[i] = false;
				}
				if(EnemyLy[i] >=  460 && EnemyShoot[i] == false){
						EnemyLy[i] = 300000;
						EnemyLy[i]  -= 0;
				}
 
		}
	}			
			
			
			
	
	//to speed up the aliens when the get lower
	//WIP
	function Stage(){
		if((Enemyy.length - 2) >= 310){
			ctx.fillStyle='red';
			ctx.fillText("You Lose", 150, 300)
	
		}
		
	}
	
	
		//Head-Head functions
	//the function for making the laser work(i.e fire, then return
	function HeadLaser(){


	//to make the laser appear from the middle of the player
			laserx[0] = playerx + 33;
			laserx[1] = player2x + 33;
				if(p1shoot == true){

					ctx.fillStyle = 'green';
					ctx.fillRect(laserx[0], lasery[0], 5, 10);
					lasery[0] -=  vely;
				}
				if(lasery[0] <= 0){
					p1shoot = false;
				}
		
			if(p2shoot == true){
					ctx.fillStyle = 'red';
					ctx.fillRect(laserx[1], lasery[1], 5, 10);
					lasery[1] +=  vely;
				}
				if(lasery[1] >= 480){
					p2shoot = false;
				}
	
	//to return the lasers
			if(p1shoot == false){
				lasery[0] = 460;
			lasery[0]  -= 0;
			}
			if(p2shoot == false){
				lasery[1] = 20;
				lasery[1]  += 0;
			}
	
	}	
	
	
	
	//the hit code for head to head
	function HeadHit(){

				if(laserx[1] > playerx && laserx[1] < playerx + 75 && lasery[1] > 460 && lasery[1] < 460 + 20){
					p1shoot = false;
					p1lives -= 1;
					Playerexplode.play();
				}
				if(laserx[0] > player2x && laserx[0] < player2x + 75 && lasery[0] > 5 && lasery[0] < 5 + 20){
					p2shoot = false;
					p2lives -= 1;
					Playerexplode.play();
				}
			
		}
		//to make the game be able to end
		function Lives(){
		
			for(var i = 0; i < p2lives; i ++){
		
				ctx.fillStyle='red';
				ctx.fillRect(p2livesx[i] , 20, 15, 4);
				//the cannon
				ctx.fillRect(p2livesx[i] + 6, 12, 2, 10);

			}
			
			for(var i = 0; i < p1lives; i ++){
		
				ctx.fillStyle = 'green';
				ctx.fillRect(p1livesx[i] , 460, 15, 4);
				//the cannon
				ctx.fillRect(p1livesx[i] + 6 , 454, 2, 10);

			}
		
		
		}
		//to make the game not just point and shoot	
	function Cover(){
		for(var i = 0; i < 10; i++){
			ctx.fillStyle='white';
			ctx.fillRect(coverx[i] * i + 10, covery, 30, 5);

		}
	
		}
//To decide who wins the head-head	
	function Win(){
		if (p1lives == 0){
			screen = 8;
		}else if(p2lives == 0){
			screen = 8;
		}
	}
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	
	//FOR THE ALIENS MAKE THEM IN COLUMNS SO YOU CAN GET RID OF 1 EXACT ALIEN 
	//ALSO MAKE STAGES SO THAT AT A DIFFERENT STAGE THE ALIENS ARE AT A DIFFERENT Y SO YOU LOSE WHEN THEY REACH STAGE 6 EX
	//USE .SPLICE TO GET RID OF THE EXACT ALIEN
	function paint()
	{

	if(screen == 1){	
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0,w,h);
		ctx.font = '12pt stencil';
	//the pong start button boxes	
		ctx.fillStyle= 'black';
		ctx.fillRect(pongsx + 1, pongsy , pongsw - 2, pongsh + 2);
	//pong start button boxes		
			ctx.fillStyle= 'white';
			ctx.fillRect(pongsx + 5, pongsy + 4, 60, 27);
	//space invaders start button boxes	
		ctx.fillStyle= 'black';
		ctx.fillRect(sisx, sisy, sisw, sish);
	//space invaders start boxes	
			ctx.fillStyle= 'white';
			ctx.fillRect(sisx + 5, sisy + 4, sisw - 10, sish - 10);
	//space invaders start boxes	
		ctx.fillStyle='black';
		ctx.fillRect(w/2- 70, 250, 100, sish);
			ctx.fillStyle='white';
			ctx.fillRect(w/2- 67, 255, 93, sish - 10);
	
	//the words for the start buttons
		ctx.fillStyle ='black';
		ctx.fillText("Welcome to multi-game!", w/2 - 100, 100);
		ctx.fillText("Space Invaders", w/2 - 80, 190, 139);
		ctx.fillText("Pong", w/2 - 40, 234, 139);
		ctx.fillText("Head-Head", w/2 - 65, 275);
	
	}



	if(screen == 2){
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0,w,h);
		//title
		ctx.fillStyle='black';
		ctx.fillText("SPACE INVADERS", w/2 - 80, 100)
	//to start the game, boxes for buttons
		ctx.fillRect(startx, starty, startw, starth);
		ctx.fillStyle='white'
		ctx.fillRect(w/2 - 85, 254, 139, 67);
		//text explaining the game
		ctx.fillStyle='black'
		ctx.font='15pt comic sans';
		ctx.fillText("PRESS TO PLAY", w/2 - 85, 290, 139, 67)
		ctx.fillText("Every Enemy is worth 100 points", 150, 430);
		ctx.fillText("Move using the arrow keys, and press SPACE to fire", 150, 450);


		

}


//space invaders game code
 if(screen == 3){
		ctx.fillStyle = 'black';
		ctx.fillRect(0,0, w, h);	
		
		ctx.font='15pt comic sans';
		ctx.fillStyle='white';
		ctx.fillText("Score:  "+ Score, 20, 20);
//calling on functions for the game
Sound();

//the actual line to draw the aliens
			for(var i = 0; i < Enemyx.length; i++){
				ctx.drawImage(Alien1, Enemyx[i] , Enemyy[i], 30, 30);
				ctx.drawImage(Alien1, Enemyx[i] , Enemyy[i], 30, 30);
				ctx.drawImage(Alien2, Enemyx[i] , Enemyy[i], 30, 30);
				ctx.drawImage(Alien3, Enemyx[i] , Enemyy[i], 30, 30);
			}
		
//more functions
	Stage();
	Laser();
	Restart();
setInterval( Invasion(), 500000);





//the aliens move slowly if you remove the for loop	
//older code to draw the aliens/ functions to move the aliens...might use draw code later
	for (var i = 0; i < 10; i ++){

		/*ctx.drawImage(Alien3, Enemyx[0] + 40 *i, Enemyy[0] , 30, 30);
	
		ctx.drawImage(Alien2, Enemyx[0] + 40 *i, Enemyy[1] , 30, 30);
		
		ctx.drawImage(Alien1,Enemyx[0] + 40 *i, Enemyy[2] , 30, 30);
		
		ctx.drawImage(Alien1,Enemyx[0] + 40 *i, Enemyy[3] , 30, 30);
		
		
		//First row of aliens
		ctx.drawImage(Alien3, Enemyx[0], Enemyy[0], 50, 50);
		ctx.drawImage(Alien3, Enemyx[1], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[2], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[3], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[4], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[5], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[6], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[7], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[8], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[9], Enemyy[0], 30, 30);
		
		//Second row of aliens
		ctx.drawImage(Alien2, Enemyx[1], Enemyy[1], 30, 30);
		
		//Second bottom row of aliens
		ctx.drawImage(Alien1, Enemyx[1], Enemyy[2], 30, 30);
		
		//Bottom row of aliens
		ctx.drawImage(Alien1, Enemyx[1], Enemyy[3], 30, 30);
		
		*/
		
		



	//calling the functions to work in the paint
	//cant use the laser here because then it produces a giant line of lasers. maybe a power up
		Pathing();
		Hit();
		
		

		

		
		
/*
	
*/
	}
	//the player model
		ctx.fillStyle = 'green';
		ctx.fillRect(playerx, 460, 75, 20);
		ctx.fillRect(playerx + 32.5, 442, 10, 50);
		//to try and not let him off the stage
		if(playerx + 75 == 640){
		playerx -= 0;
		}else if(playerx  - 75 == 0){
		playerx += 0;
		}
		}
	
	if(screen == 9){
		ctx.fillStyle='white';
		ctx.fillRect(0,0,w,h);
		ctx.font='15pt comic sans';
		ctx.fillStyle='black';
		ctx.fillText("YOU HAVE WON, CONGRATS", 175, 100);
		
		ctx.fillStyle= 'black';
		ctx.fillRect(sisx, sisy + 200, sisw - 55, sish);
		ctx.fillStyle= 'white';
		ctx.fillRect(sisx + 5, sisy + 205, sisw - 65, sish - 10);
		ctx.fillStyle='black';
		ctx.fillText("Play Again?", sisx + 5, sisy + 224);
		
	}
	
	
	//the pong start screen code
	 if(screen == 4){ 
	ctx.fillStyle='white';
	ctx.fillRect(0,0,w,h);
	//instructions/ start button
		ctx.fillStyle='black';
		ctx.fillText("WELCOME TO PONG", w/2 - 100, 100)
		ctx.fillText("Press ENTER to play!", w/2 -100, 170);
		ctx.fillRect(startx - 10, starty, startw, starth);
		ctx.fillStyle='white'
		ctx.fillRect(w/2 - 95, 254, 139, 67);
		ctx.fillStyle='black'
		ctx.font='15pt comic sans';
		ctx.fillText("PRESS TO PLAY", w/2 - 95, 290, 139, 67)
		ctx.fillText("P1(Left) Moves using 'S' and 'X'", w/2 - 140, 420);
		ctx.fillText("P2(Right) Moves using Left and Right Arrows", w/2 - 140, 440);
	
	
	
	}


//pong game screen
	if(screen == 5){
		
		ctx.fillStyle='white';
		ctx.fillRect(0,0,w,h);
			// the left paddle
		ctx.fillStyle='black';
		ctx.fillRect(pdlx[0] , pdly[0], pdlw[0], pdlh[0]);
		//right paddle
		ctx.fillStyle='black';
		ctx.fillRect(pdlx[1], pdly[1], pdlw[1], pdlh[1]);

		ctx.fillText("PONG", 290, 35)


	for(var i = 0; i < 7; i ++){
		ctx.font='15pt comic sans'
		ctx.fillText(score[0], 250, 35, 50, 50);

		ctx.fillText(score[1], 370, 35, 50, 50);
		//to change the score
		if(ballx <= -50){
			score[1] += 1;
			ballx = 250;
			velX *= -1;
		}else if(ballx >= 690){
			score[0] += 1;
			ballx = 350;
			velX *= -1;
		}
	}


//to make a circle. (x, y, radius, 2* 180 basically,)
	

	ctx.beginPath();
	ctx.arc(ballx, bally, radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = 'black';
	ctx.fill();
	ctx.closePath();
	
	 ballx += velX;
	 bally+= velY;
	 
//pong code, some commented out in case there was time to make 1 player practice pong	 
	 

//bounces the ball off the left side of the screen	 take out to make actual pong
/*if(ballx + radius >  ctx.width|| ballx - radius < 0){
velX *=  -1;
}*/
	
	//bounces the ball off the top
		if(bally + radius > ctx.height || bally - radius < 0){
			velY *=  -1;
		}
		
		
//bounces the ball off the right take out to make actual pong
/*if(ballx + radius <  ctx.width|| ballx - radius > 620){
velX *=  -1;
}*/
	
	
	//bounces the ball off the bottom
		if(bally + radius < ctx.height || bally - radius > 450){
			velY *=  -1;
		}

	//for paddle to not go off the canvas
		if(pdly[0] + pdlh[0] > h || pdly[0] + pdlh[0] > 450){
			pdly[0] += 0;
			pdly[0] -= 0;
		}

//to make the ball bounce if it hits the left paddle
//fix the bug where it goes halfway through before bouncing
		if(ballx + radius < pdlx[0] + pdlw[0] + 35&& ballx + radius > pdlx[0] && bally + radius > pdly[0] && bally + radius < pdly[0] + pdlh[0]){
			velX *= -1;
		}

/*
//makes the ball change course a little depending on where it is hit. fix the invisible wall on left paddle first
if(ballx  + radius > pdlx[0] && ballx + radius< pdlx[0] + pdlh[0] && bally + radius > pdly[0]/3 ){
velY += 1;
}else if(ballx  + radius > pdlx[0] && ballx + radius< pdlx[0] + pdlh[0] && bally + radius < pdly[0]/3 ){
velY -= 1;
}
*/
	
	
	//to make the ball bounce if it hits the right paddle
		if(ballx + radius > pdlx[1] - 5 && ballx  + radius< pdlx[1] + pdlw[1] && bally + radius > pdly[1] && bally + radius < pdly[1] +pdlh[1] + 20){
			velX *= -1;
		}
		
		
		
		
		
		
	}
	//Head - head start screen code
if(screen == 6){
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0,w,h);
		
		ctx.fillStyle='black';
		ctx.fillText("Head-Head", w/2 - 60, 100)

		ctx.fillRect(startx, starty, startw, starth);
		ctx.fillStyle='white'
		ctx.fillRect(w/2 - 85, 254, 139, 67);
		ctx.fillStyle='black'
		ctx.font='15pt comic sans';
		ctx.fillText("PRESS TO PLAY", w/2 - 85, 290, 139, 67)
		ctx.fillText("Shoot at you oppnenet and try to hit them", 150, 410);
		ctx.fillText("p1(bottom) moves using arrow keys. shoot with up arrow", 130, 440);
		ctx.fillText("p2(top) moves using the 'Z' and 'X' keys. shoot with space", 130, 470);
}

		
		
		
		//Head-Head game code
		if(screen == 7){
			ctx.fillStyle = 'black';
			ctx.fillRect(0,0, w, h);	
		

			Sound();
			Lives();
			HeadLaser();
			HeadHit();
			Win();


		ctx.fillStyle='red';
		ctx.fillRect(p2livesx  , 20, 15, 4);
//the cannon
		ctx.fillRect(p2livesx + 6, 12, 2, 10);

		ctx.fillRect(p2livesx  + 18 , 20, 15, 4);
//the cannon
		ctx.fillRect(p2livesx + 24, 12, 2, 10);

		ctx.fillRect(p2livesx  + 36 , 20, 15, 4);
//the cannon
		ctx.fillRect(p2livesx + 42, 12, 2, 10);


	
	
	
	

		ctx.fillStyle = 'green';
		ctx.fillRect( p1livesx , 460, 15, 4);
		//the cannon
		ctx.fillRect(p1livesx + 6 , 454, 2, 10);
		
		ctx.fillRect( p1livesx + 18 , 460, 15, 4);
		//the cannon
		ctx.fillRect(p1livesx + 24 , 454, 2, 10);
		
		ctx.fillRect( p1livesx + 36 , 460, 15, 4);
		//the cannon
		ctx.fillRect(p1livesx + 42 , 454, 2, 10);

		





//player 1
		ctx.fillStyle = 'green';
		ctx.fillRect(playerx, 460, 75, 20);
//the cannon
		ctx.fillRect(playerx + 32.5, 435, 10, 60);
//player 2	
		ctx.fillStyle = 'red';
		ctx.fillRect(player2x, 5, 75, 20);
//the cannon
		ctx.fillRect(player2x + 32.5,5 , 10, 50);
		
	}
	//game over screen for both players winning
		if(screen == 8){
			ctx.fillStyle='white';
			ctx.fillRect(0,0,w,h);
		if(p1lives == 0){
			ctx.fillStyle='red';
			ctx.fillText("CONGRATULATIONS! YOU ARE THE BETTER PLAYER! GO RED GO!", 7, 250);
		}else if(p2lives == 0){
			ctx.fillStyle='green';
			ctx.fillText("CONGRATULATIONS! YOU ARE THE BETTER PLAYER!GO GREEN!", 20, 250);
		}
		
	ctx.fillStyle= 'black';
	ctx.fillRect(sisx, sisy + 200, sisw - 55, sish);
	ctx.fillStyle= 'white';
	ctx.fillRect(sisx + 5, sisy + 205, sisw - 65, sish - 10);
	ctx.fillStyle='black';
	ctx.fillText("Play Again?", sisx + 5, sisy + 224);
		
		victorysound.play();
		}	
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	/*if(Enemyy[0] == 80 && Enemyy[1] == 130 && Enemyy[2] == 180 && Enemyy[3] == 230 ){
		Stage();
		}*/
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){

//click codes to change screen for the various games
	if(screen == 1){ 
		if(mx > sisx && mx < sisx + sisw &&  my > sisy && my < sisy + sish){
			screen =2;
		}else if(mx > pongsx && my < pongsx + pongsw && my > pongsy && my < pongsy + pongsh){
			screen = 4;
		}else if(mx < w/2 + 30 && mx < w/2 - 67 + 93 && my > 255 && my < 255 + sish-10){
			screen = 6;
		}
	}else if(screen == 2){	
				if(mx > startx && mx < startx + startw && my > starty && my < starty + starth){
					screen = 3;
				}
	  }else if(screen == 4){
			if(mx > startx && mx < startx + startw && my > starty && my < starty + starth){
				screen = 5;
			}else{
				screen = 4;
	}}else if(screen == 6){
		if(mx > startx && mx < startx + startw && my > starty && my < starty + starth){
			screen = 7;
			playerx = 260;
			player2x = 260;
	}}else if(screen == 8){
		if(mx > sisx && mx < sisx + sisw - 55 && my > sisy + 200 && my < sisy + 200 + sish){
			screen = 6;
			p1lives = 3;
			p2lives = 3;
			victorysound.pause();
			victorysound.currentTime = 0;
	}
	if(mx > sisx && mx < sisx + sisw - 55 && my > sisy + 200 && my < sisy + 200 + sish && screen == 9){
		screen = 2;
	}
}
	  
	}, false);
	


	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		
	}, false);




})