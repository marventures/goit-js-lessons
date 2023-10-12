/* 
Example 4 - Notes

Write a Notes class that manages the collection of notes in the items property. 

A note is an object with text and priority properties. 


Add a static property Priority to the class, which will store the object with priorities.
    {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
    }

methods

addNote(note) - receives a new note and adds it to the end of the current ones.

removeNote(text) - receives the Note and, if it exists, removes it from the current.

updatePriority(text, newPriority) - receives the Note and, if it exists set to newPriority
*/

class Notes {
  // write code below this line
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(arr) {
    this.items = arr;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const inArr = this.items.find(item => item.text === text);

    if (inArr) {
      const idx = this.items.findIndex(item => item.text === text);

      this.items.splice(idx, 1);
    }
  }

  updatePriority(text, newPriority) {
    const inArr = this.items.find(item => item.text === text);

    if (inArr) {
      inArr.priority = newPriority;
    }
  }
  // write code above this line
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'My second note',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('My first note');
console.log(myNotes.items);

myNotes.updatePriority('My second note', Notes.Priority.HIGH);
console.log(myNotes.items);
