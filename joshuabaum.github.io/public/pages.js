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
highResRun = 0;
function higherRes(){
	images = document.querySelectorAll(".img-tall, .img-wide");
	if(highResRun == 0){
		for(i=0, len = images.length; i<len; i++){
            var newSrc = images[i].src
            upRes = newSrc.slice(0, newSrc.length - 4) + "_big.jpg";
			images[i].src= upRes;
		}
		highResRun += 1;
	}
	else{};
};

