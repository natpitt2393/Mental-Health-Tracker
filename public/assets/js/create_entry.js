async function createDescriptionFunc(event) {
    event.preventDefault();
    const name = document.querySelector("#text-area").value.trim();
    console.log("This is createDescriptionFunc");
    const response = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        date_created: "New date",
        title: "new title",
        description: "description",
        mood_id: 2,
        // user_id: This is provided by backend
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
    //   document.location.replace("/diary");
    console.log("entry added");
    } else {
      const resData = await response.json();
    }
  }
  const createEntryForm = document.getElementById("form-id");
  console.log(createEntryForm);
createEntryForm.addEventListener("submit", createDescriptionFunc);