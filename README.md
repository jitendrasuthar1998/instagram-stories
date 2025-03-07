# **Story Viewer App**

A React and TypeScript-based Story Viewer application that allows users to view and navigate through user-generated stories, similar to Instagram stories.

## **🚀 Live Demo**

🔗 [Deployment Link](https://insta-stories-feature-by-jitendra.netlify.app/)

## **🎯 Features Implemented**

1. **⏳ Story Progress Indicator**

- A **progress bar** at the top of the screen visually indicates how much time is left for the story.
- Progress pauses when the story is paused.

2. **Story Navigation**

   - Clicking on the left or right areas of the screen moves between stories.

3. **Pause & Resume**

   - **Mobile:** Holding down (touch start) on the image pauses playback, and releasing (touch end) resumes it.
   - **Desktop:** Hovering over the story pauses playback, and moving the cursor away resumes it.

4. **Auto Progression**

   - Each story automatically progresses to the next after a set time (5 seconds).
   - Uses a **progress bar** to indicate remaining time.
   - If the last story of a user is completed, it moves to the next user's stories.

5. **Keyboard Shortcuts**

   - `ArrowLeft (←)`: Moves to the **previous** story.
   - `ArrowRight (→)`: Moves to the **next** story.
   - `Escape (Esc)`: Closes the story viewer.

6. **Lazy Loading**

   - The story image loads dynamically, displaying a `"Loading..."` message until fully loaded.

7. **Memoization & Performance Optimizations**

   - `useCallback` is used to optimize navigation (`goToNextStory` and `goToPrevStory`).
   - Uses **`useEffect`** to update progress only when necessary, reducing unnecessary state updates.

8. **💻 Responsive Design**

- Fully responsive for **mobile and desktop** viewing.
- Optimized for touch gestures on mobile devices.

---

## **🛠 Setup & Installation**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/jitendrasuthar1998/instagram-stories.git
cd instagram-stories
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Start the Development Server**

```bash
npm run dev
```

### **4️⃣ Run Tests**

```bash
npm test
```

---

## **📂 Project Structure**

```
📦 story-viewer-app
├── 📂 src
│   ├── 📂 components  # UI components (StoryViewer, StoryContainer, etc.)
│   ├── 📂 data        # Mock story data
│   ├── 📂 tests       # Unit tests for components
│   ├── 📂 styles      # CSS/styling files
│   ├── App.tsx        # Main entry component
│   ├── main.tsx      # React entry point
├── 📜 package.json   # Project dependencies
├── 📜 README.md      # Project documentation
```

---

## **💡 Design & Optimization Choices**

### **1️⃣ Performance Optimizations**

- **Debounced Story Navigation**: Reduces unnecessary renders and state updates.
- **Lazy Loading**: Stories load only when required, improving initial page load speed.
- **Memoization**: `useCallback` to optimize component re-renders.

### **2️⃣ Scalability Enhancements**

- **Component-Based Architecture**: `StoryViewer` and `StoryContainer` are modular, making it easy to extend functionality.
- **State Management**: Uses `useState` and `useEffect` efficiently. Can be replaced with Redux for large-scale apps.
- **Testing Coverage**: Ensures reliability with `@testing-library/react` tests for components.

## **📌 Contribution Guidelines**

1. Fork the repository
2. Create a new branch: `git checkout -b feature-new-update`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-new-update`
5. Open a pull request

---

## **📧 Contact**

📩 **Your Name** - [jitendrasuthar995@gmail.com](mailto:jitendrasuthar995@gmail.com)  
🔗 **LinkedIn** - [https://www.linkedin.com/in/jitendrasuthar1998](https://www.linkedin.com/in/jitendrasuthar1998)
