# Claude Code Configuration

## Project Overview

This is a React news application built with Vite that displays random science news articles using the GNews API. The app features a clean, modern interface with Tailwind CSS styling and fetches 3 random science articles from the US.

## Key Technologies

- **Frontend**: React 19.1.1 with Vite 7.1.2
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **API**: GNews API for news data
- **Build Tool**: Vite with React plugin
- **Linting**: ESLint with React hooks and refresh plugins

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Environment Setup

Create a `.env` file in the project root with:
```
VITE_GNEWS_API_KEY=your_api_key_here
```

Get a free API key from [GNews.io](https://gnews.io/)

## Project Structure

```
src/
├── App.jsx          # Main application component with news fetching logic
├── App.css          # Component-specific styles
├── index.css        # Global styles with Tailwind imports
├── main.jsx         # React app entry point
└── assets/
    ├── react.svg    # React logo
    └── images/
        └── icons8-news.svg  # News icon
```

## Key Features

- Fetches random science news articles from GNews API
- Displays 3 random articles with images, titles, descriptions, and sources
- Shuffle button to fetch new random articles
- Responsive design with Tailwind CSS
- Loading states and error handling
- Article cards with external link functionality

## Code Quality

The project uses:
- ESLint for code linting
- React hooks and refresh plugins for development
- Modern React patterns with hooks (useState, useEffect)
- Error boundaries and loading states

## API Integration

- Uses GNews API v4 for fetching science category news
- Implements pagination with random page selection
- Selects 3 unique random articles from the response
- Handles API errors and rate limiting gracefully

## Deployment Notes

- Built with Vite for optimal performance
- Requires VITE_GNEWS_API_KEY environment variable
- Static site ready for deployment to Vercel, Netlify, or similar platforms