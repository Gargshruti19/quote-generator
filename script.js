const apiUrl = "https://api.quotable.io/random";
const newquote = document.querySelector("#new");
const tweet = document.querySelector("#tweet");
async function getQuote(url) {
	const response = await fetch(url);
	var data = await response.json(url);
	console.log(data);
	document.querySelector("blockquote").innerHTML = data.content;
	document.querySelector("span").innerHTML = data.author;
}
getQuote(apiUrl);
newquote.addEventListener("click", function () {
	getQuote(apiUrl);
});

tweet.addEventListener("click", function () {
	window.open(
		"https://twitter.com/intent/tweet?text=" +
			document.querySelector("blockquote").innerHTML +
			"~ by " +
			document.querySelector("span").innerHTML,
		"Tweet window",
		"width = 600, height=300"
	);
});
