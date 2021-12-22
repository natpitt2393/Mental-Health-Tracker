async function loginFunc(event) {
event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  // console.log("This is loginFunc");
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/diary");
  } else {
    const resData = await response.json();
  }
}
// console.log("this isa test");
const loginSubmitForm = document.getElementById("login-submit");
loginSubmitForm.addEventListener("submit", loginFunc);
async function singUpFunc(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#signup-email").value.trim();
    const password = document.querySelector("#signup-password").value.trim();
    // console.log("This is signUpFunc");
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/diary");
    } else {
      const resData = await response.json();
    }
  }
  const signupSubmitForm = document.getElementById("signup-submit");//targets our form in html
  console.log(signupSubmitForm);
signupSubmitForm.addEventListener("submit", singUpFunc);