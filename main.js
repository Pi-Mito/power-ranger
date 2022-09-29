
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas')
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_image(getImage)
{
	// para enviar imagens
	fabric.Image.fromURL(getImage, function(Img){
		blockImageObject = Img;
		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top : blockY,
			left : blockX
		})
		canvas.add(blockImageObject)
	}
	);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		blockX = 100;
		new_image('rr1.png');
		console.log("r");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('gr.png');
		console.log("g");
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('yr.png');
		console.log("y");
		// enviar ranger amarelo
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('pr.png');
		console.log("p");
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('br.png');
		console.log("b");
	// enviar ranger índigo
	}
	window.addEventListener("keydown", myKeyDown);
}

