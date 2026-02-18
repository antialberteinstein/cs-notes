# Computer Science Notes

Welcome to the **Computer Science Notes** repository, a curated collection of deep-dive notes, resources, and documentation on various topics in Computer Science, including Artificial Intelligence, Programming Languages, and Software Engineering.

## 📚 Overview

This project serves as a comprehensive knowledge base, organizing complex technical concepts into accessible, structured notes. It covers a wide range of subjects from modern AI advancements to foundational software development principles.

- **Author**: Nhat Nguyen
- **License**: MIT License

## 🚀 Key Topics

The repository is organized into several key domains:

- **👁️ Computer Vision**: Exploration of image processing, object detection, and visual recognition systems.
- **✨ Generative AI**: In-depth looks at deep learning models for generating content, images, and text.
- **🤖 LLMs (Large Language Models)**: Study of architecture, prompting strategies, and fine-tuning techniques for LLMs.
- **🐍 Python**: Advanced Python concepts, data science libraries, and best practices for efficient coding.
- **🟣 Julia**: Notes on high-performance scientific computing and numerical analysis using Julia.
- **💻 Software Development**: Best practices, Agile methodologies, and general software engineering processes.

## 🛠️ Technology Stack

This knowledge base is built using standard web technologies for easy access and navigation:

- **HTML5 & CSS3**: Semantic markup and styling using **Bootstrap 5** and custom CSS.
- **JavaScript**: Dynamic content loading for efficient navigation.
- **Python**: Automation scripts for managing and indexing notes.
- **Google Fonts**: Typography using the "Outfit" font family.

## 📂 Project Structure

```bash
.
├── computer-vision/      # Notes on Computer Vision
├── generative-ai/        # Notes on Generative AI
├── llms/                 # Notes on Large Language Models
├── python/               # Python programming notes
├── julia/                # Julia programming notes
├── software-development/ # Software engineering principles
├── index.html            # Main entry point for the website
├── style.css             # Custom styles
├── script.js             # JavaScript for dynamic content loading
├── au.py                 # Python utility script to update note index
├── notes_data.json       # Data file containing indexed notes
└── nav_footer.js         # Shared navigation and footer components
```

## 📖 How to Use

### Viewing the Notes
Simply open the `index.html` file in any modern web browser to navigate through the topics and notes. The interface is designed to be responsive and user-friendly.

### updating the Index
The "Other Notes" section on the homepage is dynamically populated based on the directory structure. If you add new note directories:

1.  Add your new folder with notes in the root directory.
2.  Run the automation script to update the `notes_data.json` file:
    ```bash
    python au.py
    ```
3.  Refresh `index.html` to see the changes.

## 🤝 Contributing

Contributions, corrections, and improvements are welcome! Feel free to open an issue or submit a pull request if you find any errors or have valuable insights to add.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Built with ❤️ and Code by Nhat Nguyen.*