const KEY = "notesData";

export function saveNotes(notes) {
  try {
    localStorage.setItem(KEY, JSON.stringify(notes));
  } catch (e) {
    console.error("localStorage error", e);
  }
}

export function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch (e) {
    console.error("JSON parse error", e);
    return [];
  }
}

export function clearStorage() {
  localStorage.removeItem(KEY);
}
