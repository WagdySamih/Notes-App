const yargs = require('yargs');
const fs    = require('fs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'the content of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})


yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'Title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('here');
        notes.RemoveNote(argv.title);
    }
})

yargs.command({
    command: 'List',
    describe: 'list out all your notes',
    handler() {
        notes.ListNotes();
    }
})
yargs.command({
    command : 'Read',
    describe: 'reading a note',
    builder:{
        title:{
            describe: 'Title of note wanted to be read',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.ReadNote(argv.title);
    }
})
yargs.parse();