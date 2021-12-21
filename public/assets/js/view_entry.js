async function renderDiaryEntry() {
    const response = await fetch("/api/diary", {
        headers: {
            "Content-Type": "application/json"
        }
    } )

    const entries = await response.json()
    console.log(entries);
    // console.log(entry[0]);
    const diaryListContainer = document.querySelector("#diary-container");
    entries.forEach((entry)=> {
        const entryContainer = document.createElement('div');
        const entryDescription = document.createElement('p');
        // const entryMood 
        entryDescription.textContent = entry.description;
        
        entryContainer.append(entryDescription);
        diaryListContainer.append(entryContainer);
    })
}
renderDiaryEntry();