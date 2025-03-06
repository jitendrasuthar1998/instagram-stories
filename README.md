# **Story Viewer App**

A React-based Story Viewer application that allows users to view and navigate through user-generated stories, similar to Instagram or WhatsApp stories.

## **🚀 Live Demo**

🔗 [Deployment Link](https://sparkling-moonbeam-f935cc.netlify.app/)

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

---

## **🔍 Running Lint Checks & Formatting**

```bash
npm run lint  # Check for linting issues
npm run format  # Auto-format code
```

---

## **📌 Contribution Guidelines**

1. Fork the repository
2. Create a new branch: `git checkout -b feature-new-update`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-new-update`
5. Open a pull request

---

## **📧 Contact**

📩 **Your Name** - [jitendrasuthar995@gmail.com](mailto:jitendrasuthar995@gmail.com)  
🔗 **LinkedIn** - [Your LinkedIn Profile](#)
