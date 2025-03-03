import os
import json

# Hàm để quét thư mục và lấy thông tin các ghi chú
def scan_directory(root_dir):
    data = {}
    # Lặp qua các thư mục con trong thư mục gốc
    for subdir in os.listdir(root_dir):
        full_path = os.path.join(root_dir, subdir)
        if os.path.isdir(full_path):  # Kiểm tra nếu là thư mục
            notes = []
            for note in os.listdir(full_path):
                note_path = os.path.join(full_path, note)
                if os.path.isdir(note_path):
                    notes.append({
                        'note_name': note,
                        'note_url': f'{subdir}/{note}/index.html'
                    })
            if notes:
                data[subdir] = notes
    return data

# Đường dẫn tới thư mục chứa các ghi chú
root_dir = './cs-notes'  # Thay thế với đường dẫn tới thư mục chứa các ghi chú của bạn

# Quét thư mục và lấy dữ liệu
notes_data = scan_directory(root_dir)

# Ghi dữ liệu vào file JSON
with open('notes_data.json', 'w') as json_file:
    json.dump(notes_data, json_file, indent=4)

print("Data has been written to notes_data.json")
