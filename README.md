# Dashboard Project

This project is a simple **dashboard** built using HTML, CSS, and JavaScript. It dynamically loads components using `fetch()`, so it requires running on a local server.

## 📌 Features
- Modular structure with separate HTML components (Sidebar, Header, Overview, etc.)
- Dynamic content loading using JavaScript `fetch()`
- Responsive design
- Interactive analytics chart (using Chart.js)

## 🚀 How to Run the Project

### Using Live Server 
1. Install **[Visual Studio Code](https://code.visualstudio.com/)** if not already installed.
2. Open VS Code and install the **Live Server** extension:
   - Go to **Extensions** (`Ctrl + Shift + X`)
   - Search for **Live Server** and install it
3. Open the project folder in **VS Code**.
4. Right-click `index.html` and select **"Open with Live Server"** OR click **"Go Live"** at the bottom-right corner.
5. The project will open in the browser at:
   ```
   http://127.0.0.1:5500/index.html
   ```
## ⚠️ Important Note
Opening `index.html` directly (by double-clicking) **will not work** because browsers block `fetch()` requests to `file://` paths due to security restrictions. **Live Server or a local server is required**.

## 📂 Project Structure
```
/project-folder
│── index.html
│── css/
|   |──style.css
│── js/
|   ├── main.js
│── components/
│   ├── header.html
│   ├── sidebar.html
│   ├── main-content.html
│   ├── overview.html
│   ├── saving-plan.html
│   ├── analytics.html
│   ├── recent-transaction.html
├── images
```

## 🛠️ Technologies Used
- **HTML, CSS, JavaScript**
- **Chart.js** (for analytics visualization)
