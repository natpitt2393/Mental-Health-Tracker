
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
        const entryTitle = document.createElement('h3');
        const entryDate = document.createElement('p');
        const entryMood = document.createElement('p');
        const entryDescription = document.createElement('p');

        entryTitle.textContent = entry.title;
        entryDate.textContent = entry.date_created;
        entryDescription.textContent = entry.description;
        // entryMood.textContent = entry.mood.title;
        
        entryContainer.classList.add("entryContainer");
        entryTitle.classList.add("entryTitle");
        entryDate.classList.add("entryDate");
        entryDescription.classList.add("entryDescription");
        entryMood.classList.add("entryMood");
        
        switch(entry.mood_id) {
            case 1:
                entryContainer.style.border = "5px solid #0c0c"
                entryMood.textContent = 'Worst Day Ever';
             //  entryContainer.style.borderColor = "black"
                break;
            case 2:
                entryContainer.style.border = "5px solid green"
                entryMood.textContent = 'Really bad';
             //  entryContainer.style.borderColor = "black"
                break;
            case 3:
                entryContainer.style.border = "5px solid red"
                entryMood.textContent = 'Sad';
             //  entryContainer.style.borderColor = "black"
                break;
            case 4:
                entryContainer.style.border = "5px solid #0c0c"
                entryMood.textContent = 'Not Good';
             //  entryContainer.style.borderColor = "black"
                break;
            case 5:
                entryContainer.style.border = "5px solid blue"
                entryMood.textContent = 'Adequate';
             //  entryContainer.style.borderColor = "black"
                break;
            case 6:
                entryContainer.style.border = "5px solid #0c0c"
                entryMood.textContent = 'Pretty Good';
             //  entryContainer.style.borderColor = "black"
                break;
            case 7:
                entryContainer.style.border = "5px solid #purple"
                entryMood.textContent = 'Good';
             //  entryContainer.style.borderColor = "black"
                break;
            case 8:
                entryContainer.style.border = "5px solid #0c0c"
                entryMood.textContent = 'Happy';
             //  entryContainer.style.borderColor = "black"
                break;
            case 9:
                entryContainer.style.border = "5px solid #0c0c"
                entryMood.textContent = 'Elated';
             //  entryContainer.style.borderColor = "black"
                break;
            case 10:
                entryContainer.style.border = "5px solid #0c0c"
                entryMood.textContent = 'Best Day Ever';
             //  entryContainer.style.borderColor = "black"
                break;
        }
        entryContainer.append(entryTitle);
        entryContainer.append(entryDate);
        entryContainer.append(entryMood);
        entryContainer.append(entryDescription);
        diaryListContainer.append(entryContainer);
    })
}
renderDiaryEntry();

