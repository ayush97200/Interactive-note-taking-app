export function renderNotes(listEl, notes) {
  listEl.innerHTML = notes.map(note => `
    <li data-id="${note.id}">
      <h3>${note.title}</h3>
      <p>${note.content.slice(0, 100)}...</p>
      <small>Category: ${note.category}</small>
      <div class="note-actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    </li>
  `).join("");
}
