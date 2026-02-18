// Hàm để tải dữ liệu từ file JSON và hiển thị danh sách ghi chú
function loadNotesData() {
  fetch('notes_data.json')  // Đảm bảo rằng file JSON này có trong thư mục của bạn
    .then(response => response.json())
    .then(data => {
      console.log(data);  // In ra dữ liệu nhận được từ JSON để kiểm tra
      displayNotes(data);  // Gọi hàm hiển thị ghi chú sau khi dữ liệu được tải
    })
    .catch(error => {
      console.error('Error loading JSON data:', error);
    });
}

// Hàm hiển thị danh sách ghi chú
function displayNotes(data) {
  const notesList = document.getElementById('other-notes-list');
  if (!notesList) return;
  
  notesList.innerHTML = ''; // Xóa danh sách cũ trước khi hiển thị lại

  // Duyệt qua các danh mục trong dữ liệu
  for (const category in data) {
    const categoryNotes = data[category];

    // Duyệt qua các ghi chú trong danh mục
    categoryNotes.forEach(note => {
      // Create wrapper div for layout
      const colDiv = document.createElement('div');
      colDiv.className = 'col-md-6 col-lg-4';
      
      colDiv.innerHTML = `
          <a href="${note.note_url}" class="card-link">
            <div class="card topic-card h-100 p-4">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                   <span class="badge bg-primary me-2">${category}</span>
                </div>
                <h3 class="card-title h5 fw-bold mb-2">${note.note_name}</h3>
                <p class="card-text text-muted small">Legacy note from previous collection.</p>
              </div>
            </div>
          </a>
      `;
      notesList.appendChild(colDiv);
    });
  }
}

// Gọi hàm tải dữ liệu và hiển thị ghi chú khi trang được load
window.onload = loadNotesData;
