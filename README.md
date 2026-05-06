# 🎓 Edutech Course Directory

A responsive frontend application built using **React** to display and filter a list of courses. This project demonstrates API integration, state management, filtering, and pagination with a clean and user-friendly UI.

---

## 🚀 Live Demo

👉 https://edutech-course-directory.netlify.app/

---

## 📂 GitHub Repository

👉 https://github.com/saisumanthvalluri/edutech-course-directory

---

## 🎯 Objective

The goal of this project is to build a scalable and user-friendly course directory interface that:

- Displays course data in a structured format
- Allows users to filter courses based on different attributes
- Handles loading, empty, and error states gracefully
- Implements pagination for better performance and usability

---

## 🛠️ Tech Stack

- **React.js** – UI development
- **TypeScript** – Type safety
- **CSS** – Styling
- **Mock API** – Simulated backend with pagination

---

## ✨ Features

### 📚 Course Listing

- Displays courses with:
    - Course Name
    - Instructor
    - Duration
    - Category
    - Rating

### 🔍 Filtering

- Filter courses by:
    - Category
    - Instructor
    - Duration
- Dynamic dropdown-based filtering
- Combined filters supported

### 📄 Pagination

- Client-side pagination
- Displays:
    - Current page
    - Total pages
    - Total items
- Prev / Next navigation with boundary checks

### ⚡ States Handling

- Loading state
- Empty state (“No courses found”)
- Error handling (simulated API failures)

### 📱 Responsive Design

- Fully responsive across devices
- Horizontal scroll for filters on mobile

---

## 🧠 Approach & Key Decisions

- **Mock API with Pagination**
    - Simulates real-world backend behavior
    - Ensures scalability and realistic data handling

- **State Management**
    - Used React Hooks and Zustand for filter state management

- **Reusable Components**
    - `DynamicSelect` for dropdowns
    - `Table` for course display
    - Modular structure for scalability

- **Separation of Concerns**
    - API logic separated from UI
    - Filters managed independently

---

## 📁 Project Structure
```

src/
│
├── api/ # API logic (mock backend)
├── components/ # Reusable UI components
├── pages/ # Main pages (Courses)
├── store/ # Zustand store for filters
├── types/ # TypeScript types
├── utils/ # Constants and helpers

````

---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/saisumanthvalluri/edutech-course-directory.git
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

---

## 🌐 Deployment

This project is deployed using:

- **Vercel**

---

## 🎥 Demo Video

👉 _(Add your Loom / Drive link here)_

The video includes:

- Application walkthrough
- Code explanation
- Key decisions and logic

---

## 🚀 Future Improvements

- Add search by name
- Debounced search input
- Server-side filtering
- Infinite scroll
- Enhanced animations and UI polish

---

## 🙌 Acknowledgment

This project was completed as part of a frontend technical assessment.

---

## 📬 Contact

**Sai Sumanth Valluri**
📧 [vsaisumanth9951@gmail.com](mailto:vsaisumanth9951@gmail.com)
🔗 https://www.linkedin.com/in/v-sai-sumanth / https://sai-sumanth-portfolio.vercel.app/
