const fs = require('fs');
const chalk = require("chalk");

const addNote = (title, body) => {
    const notes = LoadNotes();

    const dublicate = notes.find((notes) => notes.title === title);
    if (!dublicate) {
        console.log(chalk.bgGreen('New note is added Successfully!'));
        notes.push({
            title: title,
            body: body
        });
        SaveNotes(notes);
    }
    else
        console.log(chalk.bgRed('Note title is already taken!'));
}
const LoadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return []
    }
}
const SaveNotes = (notes) => {
    const JsonData = JSON.stringify(notes);
    fs.writeFileSync('notes.json', JsonData);
}


const RemoveNote = (title) => {
    const notes = LoadNotes();
    const notes_ = notes.filter((notes) => (title != notes.title));
    if (notes_.length !== notes.length)
        console.log(chalk.bgGreen('note is deleted successfully!'));
    else
        console.log(chalk.bgRed('this title is not exsit!'));
    SaveNotes(notes_);
}

const ListNotes = () => {
    const notes = LoadNotes();
    console.log(chalk.bold.red.underline('This Is Your Notes'))
    notes.forEach(note => console.log(chalk.white.underline(note.title)));
}

const ReadNote = (title) => {
    notes = LoadNotes();
    Rnote = notes.find((note) => note.title === title)
    if (Rnote)
        console.log(chalk.bgBlue(Rnote.title) + '\n' + Rnote.body)
    else
        console.log(chalk.bgRed('No note found!!'))

}



module.exports = {
    addNote,
    RemoveNote,
    ListNotes,
    ReadNote,
};