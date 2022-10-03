//This function will  take the value of the title input and the body input
// then send a PUT request to update the post with title and body

async function editFormHandler(event) {
	event.preventDefault();

	const title = document.querySelector('input[name="edit-title"]').value.trim();
	const postBody = document
		.querySelector('input[name="edit-body"]')
		.value.trim();
	const id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];
	console.log(title, postBody);
	const response = await fetch(`/api/posts/${id}`, {
		method: "PUT",
		body: JSON.stringify({
			title,
			postBody,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		document.location.replace("/dashboard/");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector(".edit-post-form")
	.addEventListener("submit", editFormHandler);
