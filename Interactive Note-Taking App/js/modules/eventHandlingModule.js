import { addNote, updateNote, deleteNote, notes } from "./noteModule.js";
import { saveNotes, clearStorage } from "./storageModule.js";
import { renderNotes } from "./domUpdateModule.js";
import { showError, clearError } from "./errorHandlingModule.js";

let editId = null;

export function setupEvents(el) {

  el.saveBtn.addEventListener("click", () => {
    const title = el.title.value.trim();
    const content = el.content.value.trim();
    const category = el.category.value;

    if (!title || !content) {
      showError(el.error, "Title and content cannot be empty.");
      return;
    }

    clearError(el.error);

    if (editId) {
      updateNote(editId, { id: editId, title, content, category });
      editId = null;
    } else {
      addNote({ id: Date.now(), title, content, category });
    }

    saveNotes(notes);
    renderNotes(el.list, notes);
    el.form.reset();
  });

  el.list.addEventListener("click", e => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
      if (confirm("Delete this note?")) {
        deleteNote(id);
        saveNotes(notes);
        renderNotes(el.list, notes);
      }
    }

    if (e.target.classList.contains("edit-btn")) {
      const note = notes.find(n => n.id === id);
      el.title.value = note.title;
      el.content.value = note.content;
      el.category.value = note.category;
      editId = id;
    }
  });

  el.filter.addEventListener("change", () => {
    const value = el.filter.value;
    const filtered = value === "All"
      ? notes
      : notes.filter(n => n.category === value);
    renderNotes(el.list, filtered);
  });

  el.clearAll.addEventListener("click", () => {
    if (confirm("Clear all notes?")) {
      clearStorage();
      location.reload();
    }
  });
}
