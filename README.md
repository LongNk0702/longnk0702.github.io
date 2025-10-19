# Personal Academic Website – LONG Nguyen Khac

A complete repository for maintaining both a **LaTeX-generated CV** and a **responsive personal academic website** built using **HTML + CSS**.  
Whenever you update your CV or site content, this repo automatically rebuilds and publishes the latest version to **GitHub Pages**.

> 🔗 **Live Website:** [https://longnk0702.github.io/](https://longnk0702.github.io/)

---

## 🧩 Repository Overview
.
├── index.html        # Main personal website
├── styles.css        # Website styling
├── cv.tex            # LaTeX CV source
├── citations.bib     # BibTeX references
├── Makefile          # For building CV locally
└── README.md         # Project documentation

---

## ✨ Features

- 🧠 **autoCV LaTeX template**  
  Automatically compiles `cv.tex` → `cv.pdf` and publishes to GitHub Pages on each commit.  
  Includes support for:
  - Font Awesome icons in the header  
  - Publications auto-imported from `citations.bib`  
  - Clean tabular layout for Education, Experience, and Projects  

- 💻 **Personal Website (HTML + CSS)**  
  - Sections for Education, Research, Teaching, Work, Awards, and Skills  
  - Font Awesome + Academicons integration  
  - Responsive and lightweight (no JavaScript)  

- ⚙️ **Continuous Deployment**  
  - GitHub Actions auto-build your LaTeX CV on push  
  - Deploys both your website and PDF CV to GitHub Pages  

---

## 🚀 Quickstart

### 1️⃣ Setup
- Fork this repository *(or click **Use this template**)*
- Give workflow **write permissions**:  
  `Settings → Actions → General → Workflow permissions → Read and Write`
- Modify:
  - `cv.tex` → update your CV content
  - `index.html` and `styles.css` → personalize your website
- Commit and push changes.

### 2️⃣ Build & Publish
- The GitHub Action automatically compiles your LaTeX CV to PDF.
- The compiled CV will appear under the **`build` branch**.
- Set GitHub Pages to deploy from that branch:

  **Settings → Pages → Source → `Deploy from a branch` → Branch: `build`**

Your CV will then be accessible at:  
👉 [https://longnk0702.github.io/](https://longnk0702.github.io/)


---

## 🧠 Compiling Locally

To compile your CV manually on your computer:
```bash
make
make clean     # removes intermediate files
make distclean # full cleanup

---

## 👤 Author

**Long Nguyen Khac**  
📧 [nk.long723@gmail.com](mailto:nk.long723@gmail.com)  
🔗 [GitHub](https://github.com/LongNK0702) | [LinkedIn](https://www.linkedin.com/in/longnk0702/)

> A passionate robotics learner and developer from Vietnam.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to reuse and modify with attribution.

