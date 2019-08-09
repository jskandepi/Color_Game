var numsquares=6;
var colors=generateRandomColors(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colordisplay=document.querySelector("#colordisplay");
var msgdisplay=document.querySelector("#message");
var resetbtn=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

colordisplay.textContent=pickedcolor;

easybtn.addEventListener("click",function()
{
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares=3;
	colors=generateRandomColors(numsquares);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
})
hardbtn.addEventListener("click",function()
{
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares=6;
	colors=generateRandomColors(numsquares);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function()
	{
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedcolor)
		{
			msgdisplay.textContent="JAI BALAYYA!!!!";
			changecolors(clickedColor);
			h1.style.backgroundColor=pickedcolor;
			resetbtn.textContent="Jai Jai Balayya??";
		}
		else
		{
			this.style.backgroundColor="#232323";
			msgdisplay.textContent="Try Again!";
		}
	});
}

resetbtn.addEventListener("click",function()
{
	colors=generateRandomColors(numsquares);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	msgdisplay.textContent="";
	this.textContent="New Colors";
})

function changecolors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function randomcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function generateRandomColors(num)
{
	var arr=[]
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}