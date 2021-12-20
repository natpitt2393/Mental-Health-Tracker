// // fetch/api/diary

// //

// // const block_to_insert = document.createElement('div');//creates empty div

// // const elemText = document.createTextNode('this is a div'); // creates text in elemText
// // elem.appendChild(elemText);// appends elemText to elem
// // var emptyDiary = document.getElementById('diary-list-container');
// // emptyDiary.appendChild(block_to_insert);
// var someText = 'This is text 1';
// function createDiaryEntry(someParams){
//     const block_to_insert = document.createElement('div');
//     var emptyDiary = document.getElementById('diary-list-container');
//     block_to_insert.innerHTML = someParams;
//     console.log(block_to_insert);
//     emptyDiary.appendChild(block_to_insert);
// }

// createDiaryEntry(someText);
// someText = "Something";
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

        // on click redirect to single entry
        spanEl.addEventListener('click', someOtherFunction);//create some function



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
                entryContainer.style.border = "5px solid #0c0c"
             //  entryContainer.style.borderColor = "black"
                break;
            case 6:
                entryContainer.style.border = "5px solid #0c0c"
             //  entryContainer.style.borderColor = "black"
                break;
            case 7:
                entryContainer.style.border = "5px solid #0c0c"
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