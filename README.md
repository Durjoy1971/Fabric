## 🚀 How to Install & Run

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Durjoy1971/Toast-UI-Image-Editor.git
   cd Toast-UI-Image-Editor
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

---

## 🧠 React + Fabric.js Image Editor - Developer Documentation

### 1. 📌 Project Overview

This project is a **web-based graphical editor** built with **React** and **Vite**, designed for creating and manipulating images and vector graphics directly in the browser. It uses **Fabric.js** for powerful canvas rendering and drawing capabilities and **FontAwesome** for modern UI icons. The app features an interactive canvas where users can draw, add shapes, images, and apply filters. Optimized with **hot module replacement** and **ESLint** for faster development and cleaner code, this project serves as a strong foundation for browser-based image editing or annotation tools.

### 🔗 Project Repository

[GitHub – Fabric (Customized)](https://github.com/Durjoy1971/Toast-UI-Image-Editor)

---

### 2. 🚀 Feature List

| Feature            | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| Interactive Canvas | Users can draw, move, and manipulate objects directly on the canvas |
| Freehand Drawing   | Pencil brush with configurable color and width                      |
| Add Images         | Supports PNG, JPG, JPEG uploads to the canvas                       |
| Add Shapes         | Users can add rectangles, circles, and text                         |
| Apply Filters      | Apply image filters (e.g., grayscale, blur) using Fabric.js         |
| Toolbox UI         | A responsive panel to access drawing tools and actions              |
| FontAwesome Icons  | Integrated for modern, clean UI                                     |
| Vite + ESLint      | Fast development setup with linting support                         |

---

### 3. 🗂️ File & Folder Structure

| File/Folder        | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `index.html`       | Main HTML entry point, loads the React app             |
| `package.json`     | Declares dependencies, scripts, and project metadata   |
| `vite.config.js`   | Configuration for Vite build and dev environment       |
| `src/`             | Main source folder containing all logic and components |
| `src/main.jsx`     | React entry point where the app is rendered            |
| `src/index.css`    | Global stylesheet                                      |
| `src/components/`  | Contains all reusable React components                 |
| `App.jsx`          | Main app logic and state management                    |
| `App.css`          | Styles for layout, toolbox, and canvas container       |
| `EditorCanvas.jsx` | Core canvas logic with Fabric.js integration           |
| `Toolbox.jsx`      | UI tools for drawing, shape creation, and filters      |
| `assets/`          | Local assets like logos or SVGs                        |
| `public/`          | Publicly served static files (e.g., favicon)           |

---

### 4. 🧩 Open Source Libraries Used & Customization

- **Fabric.js**: Used for creating a dynamic canvas; supports drawing, shape rendering, filters. Brush size and color are configurable. Fabric filters are applied through UI.
- **FontAwesome**: Integrated with `@fortawesome/react-fontawesome` for UI icons.
- **React**: Main frontend library to build component-based UI.
- **Vite**: Ultra-fast dev server and build tool used in place of Create React App.
- **ESLint**: Integrated for code quality and standardization.
- **Customization Highlights**:
  - Configured `PencilBrush` from Fabric.js.
  - Filters and object interactions handled via React state and event listeners.
  - Clean, responsive toolbox UI built using modern layout techniques.

---

### 5. ⏱️ Task Estimation

- **Estimated time for a trainee or beginner (without AI):** 5 working days
  This includes project setup, learning Fabric.js, integrating drawing tools and filters, and building a responsive UI.
- **Estimated time with AI tools (GitHub Copilot, ChatGPT, Claude):** 2 working days
  AI support can significantly speed up integration, component logic, Fabric API exploration, and UI development.

---

### 6. 🧠 Potential AI Hallucinations / Debugging Notes

| Area                        | Possible Issue                                                           | Debugging Tip                                                                        |
| --------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Fabric.js Brush/Canvas APIs | Copilot may suggest incorrect instantiation of `Canvas` or outdated APIs | Refer to the [Fabric.js Docs](http://fabricjs.com/docs/) for the correct class usage |
| React-Fabric Integration    | AI may assume state is reactive by default; Fabric canvas is imperative  | Use refs and side effects (e.g., `useEffect`) carefully for syncing                  |
| Filter Application          | AI might hallucinate filter chaining logic or unsupported filter types   | Always check the full list of supported Fabric filters                               |
| Image Upload                | AI might suggest `FileReader` usage without handling onload properly     | Ensure image is loaded before adding it to canvas; wrap in async/await               |
| Vite Config                 | AI may suggest webpack-specific setup                                    | Stick to Vite-compatible configuration patterns only                                 |

---

### 7. 🌱 Suggested Features

1. **Undo/Redo Functionality**

   Allow users to revert or redo actions on the canvas using a history stack.

2. **Export/Save Canvas**

   Add an option to download the canvas as PNG/JPEG or serialize the canvas state to JSON.

3. **Multi-object Selection & Grouping**

   Support selecting multiple objects and grouping them for batch manipulation.
