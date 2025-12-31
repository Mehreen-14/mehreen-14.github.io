# 🎨 Portfolio - Bento Grid Layout

A stunning portfolio website with a unique bento grid layout, featuring a beautiful green and yellow color theme with smooth animations and hover effects.

![Portfolio Preview](https://via.placeholder.com/800x500/0a0a0a/22c55e?text=Portfolio+Preview)

## ✨ Features

- **Unique Bento Grid Layout** - Inspired by modern dashboard designs
- **Green & Yellow Theme** - Vibrant, eye-catching color scheme
- **Smooth Animations** - Powered by Framer Motion
- **Hover Effects** - Interactive boxes with glow effects
- **Responsive Design** - Works on all devices
- **Floating Particles** - Subtle background animation
- **React + Node.js** - Modern tech stack

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Manual Installation

If you prefer to install manually:

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install

# Go back to root and run
cd ..
npm run dev
```

## 📁 Project Structure

```
Portfolio_Mine/
├── client/                 # React frontend
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── App.jsx        # Main component
│   │   ├── App.css        # Styles
│   │   ├── index.css      # Global styles
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── index.js           # Express server
│   └── package.json
├── package.json           # Root scripts
└── README.md
```

## 🎨 Customization

### Add Your Image
Replace the placeholder in `client/src/App.jsx`:

```jsx
<div className="image-placeholder">
  <img src="/your-image.jpg" alt="Your Name" />
  <div className="image-border"></div>
</div>
```

### Update Your Info
Edit the hero section in `App.jsx`:

```jsx
<h1 className="hero-name">Your Name</h1>
<p className="hero-title">Your Title</p>
```

### Change Colors
Modify CSS variables in `client/src/index.css`:

```css
:root {
  --green-primary: #22c55e;
  --yellow-primary: #eab308;
  /* ... */
}
```

## 🛠️ Built With

- **React 18** - UI Framework
- **Vite** - Build Tool
- **Framer Motion** - Animations
- **Express** - Backend Server
- **CSS3** - Styling with custom properties

## 📱 Responsive Breakpoints

- **Desktop**: 3-column grid layout
- **Tablet** (< 1024px): 2-column layout
- **Mobile** (< 640px): Single column stack

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/portfolio` | GET | Portfolio data |
| `/api/contact` | POST | Contact form submission |

## 📄 License

MIT License - feel free to use for your own portfolio!

---

Made with 💚 and 💛

