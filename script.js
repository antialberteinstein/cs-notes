// Hàm để tải dữ liệu từ file JSON và hiển thị danh sách ghi chú
function loadNotesData() {
  fetch('notes_data.json')  // Đảm bảo rằng file JSON này có trong thư mục của bạn
    .then(response => response.json())
    .then(data => {
      notes = data;  // Lưu dữ liệu từ JSON vào mảng notes
      displayNotes();  // Gọi hàm hiển thị ghi chú sau khi dữ liệu được tải
    })
    .catch(error => {
      console.error('Error loading JSON data:', error);
    });
}

// Hàm hiển thị danh sách ghi chú
function displayNotes() {
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = ''; // Xóa danh sách cũ trước khi hiển thị lại

  notes.forEach(note => {
    const noteCard = document.createElement('div');
    noteCard.classList.add('col-md-4');
    noteCard.innerHTML = `
      <div class="card note-card">
        <div class="card-body">
          <h5 class="card-title"><a href="${note.category}/${note.title}.html">${note.category}/${note.title}</a></h5>
          <p class="card-text">${note.content}</p>
        </div>
      </div>
    `;
    notesList.appendChild(noteCard);
  });
}

// Lắng nghe sự kiện khi form tạo ghi chú mới được submit
document.getElementById('noteForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const category = document.getElementById('noteCategory').value;
  const title = document.getElementById('noteTitle').value;
  const content = document.getElementById('noteContent').value;

  // Thêm ghi chú mới vào mảng notes
  notes.push({ category, title, content });

  // Hiển thị lại danh sách ghi chú
  displayNotes();

  // Đóng modal
  const modal = new bootstrap.Modal(document.getElementById('createNoteModal'));
  modal.hide();

  // Reset form
  document.getElementById('noteForm').reset();
});

// Gọi hàm tải dữ liệu và hiển thị ghi chú khi trang được load
window.onload = loadNotesData;
