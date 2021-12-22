var dt = new Date();
var mm = (dt.getMonth()+ 1).toString().padStart(2, '0');
var dd = dt.getDate().toString().padStart(2, '0');
var yyyy = dt.getFullYear();
var dateStr = mm+"-"+dd+"-"+yyyy;
console.log(dt);
console.log(mm);
console.log(dd);
console.log(yyyy);
console.log(mm+"-"+dd+"-"+yyyy);
console.log(dateStr);

async function createDescriptionFunc(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value.trim();
    const mood = document.querySelector("#mood").value.trim();
    const description = document.querySelector("#text-area").value.trim();
    console.log(mood);
    // const description = document.querySelector("#text")
    console.log("This is createDescriptionFunc");
    const response = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        date_created: dateStr,
        title: title,
        description: description,
        mood_id: mood
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
  const createEntryForm = document.getElementById("form-description");//targets our form in html
  console.log(createEntryForm);
createEntryForm.addEventListener("submit", createDescriptionFunc);