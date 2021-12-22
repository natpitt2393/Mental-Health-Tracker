// console.log("test");
async function renderDiaryEntries() {
    const response = await fetch("/api/diary", {
        headers: {
            "Content-Type": "application/json"
        }
    } )
    
    const entries = await response.json()
    // console.log(entries);
    const diaryListContainer = document.querySelector("#diary-list-container");
    entries.forEach((entry)=> {
        const entryContainer = document.createElement('div');
        const entryTitle = document.createElement('h2');
        const entryDate = document.createElement('h3');
        const spanEl = document.createElement('span');
        const mood = entry.mood_id
        entryTitle.textContent = entry.title;
        entryDate.textContent = entry.date_created;
        switch(mood) {
            case 1:
                entryContainer.style.border = "5px solid black"
                break;
            case 2:
                entryContainer.style.border = "5px solid darkred"
                break;
            case 3:
                entryContainer.style.border = "5px solid red"
                break;
            case 4:
                entryContainer.style.border = "5px solid orange"
                break;
            case 5:
                entryContainer.style.border = "5px solid yellow"
                break;
            case 6:
                entryContainer.style.border = "5px solid darkgreen"
                break;
            case 7:
                entryContainer.style.border = "5px solid green"
                break;
            case 8:
                entryContainer.style.border = "5px solid lightgreen"
                break;
            case 9:
                entryContainer.style.border = "5px solid #a9ff29"
                break;
            case 10:
                entryContainer.style.border = "5px solid pink"
                break;
        }
        entryContainer.append(entryTitle, entryDate);
        diaryListContainer.append(entryContainer);
    })
}
renderDiaryEntries();