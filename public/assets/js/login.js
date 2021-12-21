async function loginFunc() {
    console.log("This is loginFunc");
    const response = await fetch("/api/login", {
        
        headers: {
            "Content-Type": "application/json"
            
        }
    } )
}
console.log("this isa test");
const loginSubmitBtn = document.querySelector(".btn-primary");
loginSubmitBtn.addEventListener("submit", loginFunc);