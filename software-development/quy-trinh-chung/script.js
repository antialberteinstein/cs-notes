// JavaScript sẽ xử lý các hành động như lưu nội dung khi người dùng thay đổi

// Lắng nghe sự kiện khi người dùng thay đổi nội dung
document.querySelector('.content').addEventListener('input', function() {
  console.log('Nội dung đã thay đổi: ', this.innerHTML);
  // Bạn có thể thêm các chức năng để lưu lại nội dung hoặc xử lý thêm ở đây
});
