# React Portfolio Website

Welcome to my personal portfolio website built with React! This website showcases my projects, skills, and experience as a developer.

## 🚀 Technologies Used

- **React.js** - Frontend library for building user interfaces
- **CSS** - For styling and animations
- **JavaScript (ES6+)** - Programming language
- **Create React App** - Project bootstrapping

## 🛠️ Project Structure

```
src/
  ├── components/
  │   ├── About.jsx
  │   ├── Contact.jsx
  │   ├── Footer.jsx
  │   ├── Home.jsx
  │   ├── Navbar.jsx
  │   └── Projects.jsx
  ├── App.js
  ├── App.css
  └── index.js
```

## 🔧 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ParasChavan02/React-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will open in your default browser at `http://localhost:3000`.

## 📋 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🌟 Features

- Responsive design that works on desktop and mobile
- Modern and clean user interface
- Interactive project showcase
- Contact form for easy communication
- Smooth page transitions and animations

## 🚀 Components

1. **Navbar**: Navigation component for easy site traversal
2. **Home**: Landing page with introduction
3. **About**: Personal and professional information
4. **Projects**: Showcase of development projects
5. **Contact**: Contact form and information
6. **Footer**: Additional links and information

## 🔨 Building for Production

To build the app for production, run:

```bash
npm run build
```

This will create a `build` directory with optimized production files.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

For any questions or inquiries, please reach out through the contact form on the website.

## 🌐 Deployment on Render

This website can be deployed on Render as a static site. Follow these steps:

1. **Prepare for Build**
   - Ensure you have a `_redirects` file in your `public` folder with the content:
     ```
     /* /index.html 200
     ```
   - This file is crucial for handling client-side routing on Render

2. **Build the Project**
   ```bash
   npm run build
   ```
   This will create a `build` directory containing your static files.

3. **Deploy to Render**
   - Sign up/Login to [Render](https://render.com)
   - Click "New +" and select "Static Site"
   - Connect your GitHub repository
   - Fill in the deployment details:
     - **Name**: `your-portfolio` (or any name you prefer)
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `build`
     - **Environment Variables**: None required for basic setup

3. **Configuration Settings**
   - Branch: `main`
   - Auto-Deploy: Yes (Render will automatically deploy when you push to main)

Your site will be live at `https://your-site-name.onrender.com`

Note: The free tier of Render is suitable for personal portfolio websites and includes:
- Continuous deployment from GitHub
- Custom domains with SSL
- Global CDN
- DDoS protection
