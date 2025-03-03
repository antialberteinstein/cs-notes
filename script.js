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
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = ''; // Xóa danh sách cũ trước khi hiển thị lại

  // Duyệt qua các danh mục trong dữ liệu
  for (const category in data) {
    const categoryNotes = data[category];

    // Tạo phần tử div cho mỗi danh mục
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');

    // Tiêu đề danh mục
    const categoryTitle = document.createElement('h3');
    categoryTitle.innerText = category;
    categoryDiv.appendChild(categoryTitle);

    // Duyệt qua các ghi chú trong danh mục
    categoryNotes.forEach(note => {
      const noteCard = document.createElement('div');
      noteCard.classList.add('note-card');

      noteCard.innerHTML = `
        <div class="card note-card">
          <div class="card-body">
            <h5 class="card-title"><a href="${note.note_url}">${note.note_name}</a></h5>
          </div>
        </div>
      `;
      categoryDiv.appendChild(noteCard);
    });

    // Thêm danh mục vào phần tử chính trên trang
    notesList.appendChild(categoryDiv);
  }
}

// Gọi hàm tải dữ liệu và hiển thị ghi chú khi trang được load
window.onload = loadNotesData;
