export let notes = [];

export function addNote(note) {
  notes.unshift(note);
}

export function updateNote(id, updatedNote) {
  const index = notes.findIndex(n => n.id === id);
  if (index !== -1) notes[index] = updatedNote;
}

export function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
}

export function setNotes(data) {
  notes = data;
}
