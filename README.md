# News App

A modern, responsive React application that displays random science news articles using the GNews API. Built with Vite and styled with Tailwind CSS for a clean, fast user experience.

## Features

- 📰 Fetches random science news articles from GNews API
- 🎲 Shuffle functionality to get new random articles
- 📱 Responsive design that works on all devices
- ⚡ Fast loading with Vite build tool
- 🎨 Modern UI with Tailwind CSS
- 🔄 Loading states and error handling
- 🔗 Direct links to full articles

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- GNews API key (free at [gnews.io](https://gnews.io/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RajarsiGit/news-app.git
   cd news-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_GNEWS_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.14
- **API**: GNews API v4
- **Linting**: ESLint with React plugins

## Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Component styles
├── index.css        # Global styles and Tailwind imports
├── main.jsx         # Application entry point
└── assets/          # Static assets (images, icons)
```

## API Configuration

The app uses the GNews API to fetch science category news articles. The API configuration includes:

- **Category**: Science news
- **Language**: English
- **Country**: United States
- **Max Results**: 10 articles per request
- **Random Selection**: 3 unique articles displayed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Recent Activity
<!--START_SECTION:activity-->
<!--END_SECTION:activity-->

## Acknowledgments

- [GNews API](https://gnews.io/) for providing news data
- [Vite](https://vitejs.dev/) for the excellent build tool
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React](https://reactjs.org/) for the component framework