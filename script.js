// document.addEventListener('DOMContentLoaded', appStart)

// function appStart() { 
//     let btnSubmit = document.querySelector('#newNote')
//     btnSubmit.addEventListener('click', addNewNote)
//     }
    
//     function addNewNote (e) {   
//         e.preventDefault()
        
//         // pobierz tytuł i treść z formularza
//         const title = document.querySelector('#title')
//         const content = document.querySelector('#content')
//         // utwórz div z notatką
//         const newNote = document.createElement('div')
//         newNote.classList.add('note')    
//         // wepchnij do div tytuł i treść
//         newNote.innerHTML = `<h2>${title.value}</h2>
//                             <section>${content.value}</section>` 
//         // dołącz notatkę do main

//         const notesContainer = document.querySelector('main')
//         notesContainer.appendChild(newNote)

//         title.value = ''
//         content.value = ''
//     } 

let notes = []
let titleHtmlNode
let contentHtmlNode

class Note {
    constructor(title, content) {
        this.title = title
        this.content = content
        this.date = Date.now()
    }
}
document.addEventListener('DOMContentLoaded', appStart)

function appStart() {
    const btnSubmit = document.querySelector('#newNote')
    titleHtmlNode = document.querySelector('#title')
    contentHtmlNode = document.querySelector('#content')

    btnSubmit.addEventListener('click', addNewNote)
 
    getNotesFromLocalStorage()
}

function getNotesFromLocalStorage() {
    notes = JSON.parse(localStorage.getItem('notes'))
    if (notes && notes.length) {
        notes.forEach(note => {
            createDivNote(note)
        })
    } else {
        notes = []
    }
}

function addNewNote(e) {
    const note = new Note(titleHtmlNode.value, contentHtmlNode.value)
    addNoteToStorage(note)
    createDivNote(note)
    cleanForm()
}

function cleanForm() {
    titleHtmlNode.value = ''
    contentHtmlNode.value = ''
}
function addNoteToStorage(note) {
    notes.push(note)
    updateLocalStorage()
}
function updateLocalStorage(){
    localStorage.setItem('notes', JSON.stringify(notes))
}

function createDivNote(note) {
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.id = 'note' + note.date
    
    const removeBtn = document.createElement('i')
    removeBtn.className = 'fas fa-times'
    removeBtn.addEventListener('click', removeNote)
    
    const header = document.createElement('h2')
    header.innerHTML = note.title
    
    const content = document.createElement('section')
    content.innerHTML = note.content
    
    const formattedDate = new Date(note.date)
    const date = document.createElement('div')
    date.innerHTML = formattedDate.toLocaleString()

    newNote.appendChild(removeBtn)
    newNote.appendChild(header)
    newNote.appendChild(content)
    newNote.appendChild(date)

    const notesContainer = document.querySelector('main')
    const firstNote = notesContainer.firstChild
    notesContainer.insertBefore(newNote, firstNote)
    // notesContainer.appendChild(newNote)
}

function removeNote() {
    const noteDiv = this.parentElement
    const id = noteDiv.id.slice(4)
    const idx = notes.findIndex((el) => {
        return el.date == id
    })
    notes.splice(idx, 1)
    updateLocalStorage()
    removeDivNote(this.parentElement)
}

function removeDivNote(noteDiv) {
    const notesContainer = noteDiv.parentElement
    notesContainer.removeChild(noteDiv)
}