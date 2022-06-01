function music() {
	window.location.replace("https://open.spotify.com/playlist/5fMz4zWOWqgEuBiApu8YPn?si=f5ea12fc6b3d43c4");
}

function small_people() {
	window.location.href = 'small_people.html';
}

function sarah(){
	window.location.href = 'sarah.html';
}

function artifacts(){
	window.location.href = 'artifacts.html';
}

function home(){
	window.location.href = 'index.html';
}

function people(){
	window.location.href = 'people.html';
}

function grand() {
	window.location.href = 'grand.html';
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

function college4hosp(){
	window.location.href = 'college4_hosp.html';
}

function maybe(){
	window.location.href = 'maybe.html';
}


function pax_amer(){
	window.location.href = 'pax_amer.html';
}

function uc_berkeley(){
	window.location.href = 'uc_berkeley.html';
}

function michaelseh() {
	window.location.replace("https://michaelseh.com/");
}

function silver() {
	window.location.href = 'silverlake.html';
}

function la() {
	window.location.href = 'la.html';
}

function france() {
	window.location.href = 'france.html';
}

function hk() {
	window.location.href = 'hk.html';
}

function tokyo() {
	window.location.href = 'tokyo.html';
}

//Following code has been depricated because I'm just gonna make all photos 4mb or smaller lol

//this part allows lower res images to load first then they are replaced gradually by the higher res images
images = document.getElementsByClassName("img");
highResRun = 0;
function higherRes(){
	if(highResRun == 0){
		for(i=0, len = images.length; i<len; i++){
			var newSrc = images[i].src.split("/");
			targetSrc = newSrc.length;
			newSrc = newSrc[targetSrc-1].slice(5);
			//alert(newSrc);
			images[i].src= newSrc;
		}
		highResRun += 1;
	}
	else{};
};

function homeHigherRes(){
	background = document.getElementsById("body");
	var newSrc = images[i].src.split("/");
	targetSrc = newSrc.length;
	newSrc = newSrc[targetSrc-1].slice(5);
}
