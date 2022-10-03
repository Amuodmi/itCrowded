// NewformHandler will run on submit of create-post-button and redirect to /create-post route

function newFormHandler() {
	document.location.replace("/create-post");
}

document
	.querySelector("create-post-button")
	.addEventListener("submit", newFormHandler);
