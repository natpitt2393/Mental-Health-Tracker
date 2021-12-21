console.log("test");
async function renderDiaryEntries() {
    const response = await fetch("/api/diary", {
        headers: {
            "Content-Type": "application/json"
        }
    } )
    
    const entries = await response.json()
    console.log(entries);
    const diaryListContainer = document.querySelector("#diary-list-container");
    entries.forEach((entry)=> {
        const entryContainer = document.createElement('div');
        const entryTitle = document.createElement('h2');
        const entryDate = document.createElement('h3');
        const spanEl = document.createElement('span');
        const mood = entry.mood_id
        // const entryMood 
        entryTitle.textContent = entry.title;
        entryDate.textContent = entry.date_created;
        //add eventListenter on entryContainer
        //on click get id and put into fetch call to get single diary
        // entryContainer.addEventListener('click', getSingleEntry);
        




        switch(mood) {
            case 1:
                entryContainer.style.border = "5px solid #0c0c"
             //  entryContainer.style.borderColor = "black"
                break;
            case 2:
                entryContainer.style.border = "5px solid green"
             //  entryContainer.style.borderColor = "black"
                break;
            case 3:
                entryContainer.style.border = "5px solid red"
             //  entryContainer.style.borderColor = "black"
                break;
            case 4:
                entryContainer.style.border = "5px solid #0c0c"
             //  entryContainer.style.borderColor = "black"
                break;
            case 5:
                entryContainer.style.border = "5px solid blue"
             //  entryContainer.style.borderColor = "black"
                break;
            case 6:
                entryContainer.style.border = "5px solid #0c0c"
             //  entryContainer.style.borderColor = "black"
                break;
            case 7:
                entryContainer.style.border = "5px solid purple"
             //  entryContainer.style.borderColor = "black"
                break;
            case 8:
                entryContainer.style.border = "5px solid #0c0c"
             //  entryContainer.style.borderColor = "black"
                break;
            case 9:
                entryContainer.style.border = "5px solid #0c0c"
             //  entryContainer.style.borderColor = "black"
                break;
            case 10:
                entryContainer.style.border = "5px solid #0c0c"
             //  entryContainer.style.borderColor = "black"
                break;
        }
        entryContainer.append(entryTitle, entryDate);
        diaryListContainer.append(entryContainer);
    })
}
renderDiaryEntries();