var username = document.getElementById("username");
var commentText = document.getElementById("commentText");
var revealButton = document.getElementById("generate");
var output = document.getElementById("output");
// var file = document.getElementById("myFile");



function generate(){


fetch(`https://some-random-api.ml/canvas/youtube-comment?avatar=https://pasteboard.co/64prAodKCixt.png&username=a&comment=a`)
   .then(res => { 
		console.log(res.url)
		output.src = res.url
		 

})
}