const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const removedNotes = notes.filter((note) => note.title !== title)

    if (removedNotes.length === notes.length) {
        console.log(chalk.bgRed('No note found!'))
    } else {
        saveNotes(removedNotes)
        console.log(chalk.bgGreen('Note removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue.inverse('Your notes:'))
    notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()

    const noteToRead = notes.find(note => note.title === title)
    if (noteToRead) {
        console.log(chalk.green.inverse(noteToRead.body))
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}