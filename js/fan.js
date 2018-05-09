var numOfPhotos = 7;
var currentPic=0;



function hidePhotos() {
	for (var p = 1; p<numOfPhotos; p++)
	{
		var photoID = "image" + p;
		document.getElementById(photoID).style.display ="none";


	}
}

function doRightClick(){
	//alert("You clicked the Right Arrow");//
	var photoID="image" + currentPic;
	document.getElementById(photoID).style.display ="none";
	currentPic--;
	if(currentPic<0)
	{
		currentPic=numOfPhotos-1;
	}

	photoID="image" + currentPic;
	document.getElementById(photoID).style.display ="block";


}

function doLeftClick(){
	//alert("You clicked the Left Arrow");//
	var photoID="image" + currentPic;
	document.getElementById(photoID).style.display ="none";
	currentPic++;
	if(currentPic >= numOfPhotos)
	{
		currentPic=0;
	}

	photoID="image" + currentPic;
	document.getElementById(photoID).style.display ="block";

}
hidePhotos();

