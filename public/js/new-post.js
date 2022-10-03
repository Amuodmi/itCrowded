// this function is for addinng a new post. It will take the values from the title and body inouts
// then send a POST request to add the new post and then replace location with the dashboard

async function newPostHandler(event) {
	event.preventDefault();

	const title = document.querySelector('input[name="post-title"]').value;
	const postBody = document.querySelector('input[name="post-body"]').value;

	console.log(title, postBody);
	const response = await fetch("/api/posts", {
		method: "POST",
		body: JSON.stringify({
			title,
			postBody,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		document.location.replace("/dashboard");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector("#new-post-button")
	.addEventListener("submit", newPostHandler);
