// Bạn có thể thêm các chức năng động ở đây, ví dụ như tự động lưu nội dung khi thay đổi
document.querySelector('.post-body').addEventListener('input', function() {
  console.log('Nội dung đã thay đổi: ', this.innerHTML);
});
