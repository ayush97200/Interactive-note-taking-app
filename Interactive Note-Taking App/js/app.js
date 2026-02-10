import { setNotes, notes } from "./modules/noteModule.js";
import { loadNotes } from "./modules/storageModule.js";
import { renderNotes } from "./modules/domUpdateModule.js";
import { setupEvents } from "./modules/eventHandlingModule.js";

const el = {
  title: document.getElementById("titleInput"),
  content: document.getElementById("contentInput"),
  category: document.getElementById("categoryInput"),
  saveBtn: document.getElementById("saveBtn"),
  list: document.getElementById("notesList"),
  error: document.getElementById("errorMsg"),
  filter: document.getElementById("filterCategory"),
  clearAll: document.getElementById("clearAllBtn"),
  form: document.querySelector(".note-form")
};

const savedNotes = loadNotes();
setNotes(savedNotes);
renderNotes(el.list, notes);
setupEvents(el);
