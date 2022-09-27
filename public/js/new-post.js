// this function will add a new post. It takes the values from the title and body,
// then sends a POST request to add the new post and replaces the location with the dashboard

async function newPostHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const postBody = document.querySelector('input[name="post-body"]').value;
  
    console.log(title, postBody);
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        postBody
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('#new-post-button').addEventListener('submit', newPostHandler);
  