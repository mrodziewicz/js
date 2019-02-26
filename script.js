document.addEventListener('DOMContentLoaded', appStart)

function appStart() { 
    let btnSubmit = document.querySelector('#newNote')
    btnSubmit.addEventListener('click', addNewNote)
    }
    
    function addNewNote (e) {   
        e.preventDefault()
        
        // pobierz tytuł i treść z formularza
        const title = document.querySelector('#title')
        const content = document.querySelector('#content')
        // utwórz div z notatką
        const newNote = document.createElement('div')
        newNote.classList.add('note')    
        // wepchnij do div tytuł i treść
        newNote.innerHTML = `<h2>${title.value}</h2>
                            <section>${content.value}</section>` 
        // dołącz notatkę do main

        const notesContainer = document.querySelector('main')
        notesContainer.appendChild(newNote)

        title.value = ''
        content.value = ''
    } 