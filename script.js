var username = document.getElementById("username");
var commentText = document.getElementById("commentText");
var revealButton = document.getElementById("generate");
var output = document.getElementById("output");
var pfp = document.getElementById("pfp");

function generate(){

	var myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID {{clientId}}");

var formdata = new FormData();
formdata.append("image", pfp.files[0]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.imgur.com/3/image", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


fetch(`https://some-random-api.ml/canvas/youtube-comment?avatar=https://cdn.discordapp.com/avatars/560789882738573324/bc220b0eeeabbe234026e4881f3c3b9c.png&username=${username.value}&comment=${commentText.value}`)
   .then(res => { 
		console.log(res.url)
		output.src = res.url
		 

})

	
}