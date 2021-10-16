function home(){
	window.location.href = 'index.html';
}

function people(){
	window.location.href = 'people.html';
}

function street(){
	window.location.href = 'street.html';
}

function fav(){
	window.location.href = 'favorites.html';
}

function series(){
	window.location.href = 'series.html';
}

function about(){
	window.location.href = 'about.html';
}

function green(){
	window.location.href = 'green.html';
}

function college1(){
	window.location.href = 'college1.html';
}

function college2(){
	window.location.href = 'college2.html';
}

function college3(){
	window.location.href = 'college3.html';
}

function college4(){
	window.location.href = 'college4.html';
}

function maybe(){
	window.location.href = 'maybe.html';
}

//this part allows lower res images to load first then they are replaced gradually by the higher res images
var images = document.getElementsByClassName("img");
var highResRun = 0;
function higherRes(){
	if(highResRun == 0){
		for(var i=0, len = images.length; i<len; i++){
			var newSrc = images[i].src.split("/");
			var targetSrc = newSrc.length;
			newSrc = newSrc[targetSrc-1].slice(5);
			//alert(newSrc);
			images[i].src= newSrc;
		}
		highResRun += 1;
	}
	else{};
};

// function homeHigherRes(){
// 	var background = document.getElementsById("body");
// 	var newSrc = images[i].src.split("/");
// 	var targetSrc = newSrc.length;
// 	newSrc = newSrc[targetSrc-1].slice(5);
// }
