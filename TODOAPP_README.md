# ✨ To-Do List App with Local Storage

A modern, responsive to-do list application built with React featuring local storage functionality to persist your tasks.

## Features

✅ **Task Management**
- Add new tasks easily
- Mark tasks as completed
- Delete tasks
- Clear all completed tasks

💾 **Local Storage**
- All tasks are automatically saved to browser's local storage
- Tasks persist even after closing the browser
- No backend required

📊 **Statistics**
- View total number of tasks
- See active tasks count
- Track completed tasks

🔍 **Filtering**
- View all tasks
- Filter to show only active tasks
- Filter to show only completed tasks

🎨 **Modern Design**
- Dark theme with elegant styling
- Smooth animations and transitions
- Responsive layout for all devices
- Professional UI with gradient effects

⚡ **Performance**
- Fast and lightweight
- Real-time task updates
- Optimized local storage operations

## Tech Stack

- **React 18** - UI library
- **React Icons** - Icon library
- **CSS3** - Styling with animations
- **Local Storage API** - Data persistence
- **JavaScript ES6+** - Modern JavaScript

## Getting Started

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/zareufce-sys/trb-digital-wallet.git
cd trb-digital-wallet
git checkout todo-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Adding a Task
1. Type your task in the input field
2. Press Enter or click the Add button
3. Task appears at the top of the list

### Completing a Task
1. Click the circle icon next to a task
2. The task will be marked as completed (strikethrough text)
3. Status updates in statistics

### Deleting a Task
1. Click the trash icon on the right side of the task
2. Task is immediately removed

### Filtering Tasks
1. Click "All" to see all tasks
2. Click "Active" to see only incomplete tasks
3. Click "Completed" to see finished tasks

### Clearing Completed Tasks
1. Click "Clear X Completed Tasks" button
2. All completed tasks will be removed

## How Local Storage Works

### Saving Tasks
```javascript
// Tasks are automatically saved after each change
local Storage.setItem('todos', JSON.stringify(todos));
```

### Loading Tasks
```javascript
// Tasks are loaded when the app starts
const savedTodos = localStorage.getItem('todos');
if (savedTodos) {
  setTodos(JSON.parse(savedTodos));
}
```

## Project Structure

```
src/
├── pages/
│   ├── TodoApp.js          # Main to-do app component
│   └── TodoApp.css         # Styling
├── App.js                  # Main app entry
├── index.js               # React entry point
└── index.css              # Global styles
```

## Features in Detail

### Local Storage Benefits
- ✅ No internet required after initial load
- ✅ Data persists between sessions
- ✅ Instant saving (no server calls)
- ✅ Private (data stays on your device)
- ✅ No sign-up or login required

### Task Properties
Each task stores:
- `id` - Unique identifier (timestamp)
- `text` - Task description
- `completed` - Boolean status
- `createdAt` - Creation timestamp

### Statistics
- **Total** - All tasks count
- **Active** - Incomplete tasks count
- **Completed** - Finished tasks count

## Keyboard Shortcuts
- **Enter** - Add new task (when input is focused)
- **Click circle** - Toggle task completion
- **Click trash** - Delete task

## Responsive Design
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Data Storage Info
- **Storage Type:** Browser Local Storage
- **Max Size:** ~5-10MB (varies by browser)
- **Duration:** Until manually cleared
- **Clearing Data:** Clear browser cache or use DevTools

## Tips

1. **Back Up Your Tasks**
   - Export to JSON file before clearing browser data

2. **Multiple Devices**
   - Tasks are device-specific (different local storage)
   - Use cloud sync for multi-device access

3. **Performance**
   - Works smoothly with 100+ tasks
   - Optimized rendering for large lists

## Customization

### Change Colors
Edit `src/pages/TodoApp.css` to modify:
- Primary color: `#ff4444`
- Background: `#0a0a0a`
- Accent: `#00ff88`

### Add Features
- Task categories/tags
- Due dates
- Priority levels
- Recurring tasks
- Task search
- Undo/Redo functionality

## Build for Production

```bash
npm run build
```

Creates optimized production build in the `build` folder.

## License

MIT License - Open source and free to use

## Support

For issues or suggestions, open an issue on GitHub.

---

**Made with ❤️ using React & Local Storage**
