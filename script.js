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

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}