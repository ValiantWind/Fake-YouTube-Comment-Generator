var username = document.getElementById("username");
var commentText = document.getElementById("commentText");
var revealButton = document.getElementById("generate");
var output = document.getElementById("output");
// var file = document.getElementById("myFile");



function generate(){


fetch(`https://some-random-api.ml/canvas/youtube-comment?avatar=https://cdn.discordapp.com/avatars/560789882738573324/bc220b0eeeabbe234026e4881f3c3b9c.png&username=ValiantWind&comment=ez`)
   .then(res => { 
		console.log(res.url)
		output.src = res.url
		 

})
}