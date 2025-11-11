# Semrush Clone - Voyantis Webhook Proxy

Setup

1. Copy config.env.example to config.env and set VOYANTIS_API_KEY.
2. Install deps: npm install
3. Run both client and server: npm run dev:full

Development URLs

- Client: http://localhost:5173
- Server: http://localhost:4000/health

Usage

- Use the search box in the app to send a GA4-like "search" event.
- The client posts to /api/voyantis → Vite proxy → Node server → Voyantis.

Notes

- Never expose VOYANTIS_API_KEY in client code.
# SEMrush Clone - Keyword Magic Tool

A modern, feature-rich SEMrush clone built with React, Vite, and Tailwind CSS. This application provides keyword research tools similar to SEMrush's Keyword Magic Tool.

## Features

### 🔍 Keyword Research
- **Search Suggestions**: Real-time autocomplete search suggestions
- **Keyword Data**: Comprehensive keyword metrics including:
  - Search Volume
  - Keyword Difficulty (KD%)
  - Cost Per Click (CPC)
  - Competition Level
  - Search Intent

### 📊 Data Visualization
- **Quick Stats Dashboard**: Visual overview of key metrics
- **Sortable Tables**: Sort keywords by any metric
- **Export Functionality**: Download keywords as CSV or JSON

### 🛠️ Tools & Features
- **Keyword Basket**: Save and manage selected keywords
- **Database Selection**: Choose from multiple geographic databases (US, UK, CA, AU)
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Routing**: React Router DOM

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd semrush-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
semrush-clone/
├── src/
│   ├── components/
│   │   ├── Apps.jsx              # Tools grid
│   │   ├── ExportModal.jsx       # Export functionality
│   │   ├── KeywordResults.jsx    # Results table
│   │   ├── QuickStats.jsx        # Stats dashboard
│   │   ├── SearchSuggestions.jsx # Search bar
│   │   └── Sidebar.jsx           # Navigation
│   ├── data/
│   │   └── demoKeywords.js       # Demo data
│   ├── services/
│   │   └── appsApi.js            # API services
│   ├── styles/
│   │   └── utilities.css         # Utility styles
│   ├── utils/
│   │   └── cookies.js            # Cookie utilities
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── public/                       # Static assets
├── index.html                    # HTML template
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
└── package.json                  # Dependencies
```

## API Integration

The application uses SEMrush API endpoints:

- **Search Suggestions**: `/search-bar/api/search`
- **Keyword Data**: `/kwm/rpc` (KeywordsData method)
- **Keyword Suggestions**: `/kwm/rpc` (KeywordSuggestions method)
- **Basket Operations**: `/kwm/rpc` (baskets.KeywordsCheckPresence method)

### API Configuration

API credentials are configured in `src/services/appsApi.js`:
- API Key: Configured via environment variables
- User ID: Configured via environment variables
- Database: Selectable via UI (US, UK, CA, AU)

## Key Components

### SearchSuggestions
Provides autocomplete search functionality with debouncing and keyboard navigation.

### QuickStats
Displays key metrics in a card-based layout with trend indicators.

### KeywordResults
Sortable table component for displaying keyword data with add-to-basket functionality.

### Sidebar
Navigation sidebar with menu items and database selector.

### ExportModal
Modal for exporting keywords in CSV or JSON format.

## Customization

### Styling
- Edit `tailwind.config.js` for theme customization
- Modify `src/styles/utilities.css` for custom utility classes
- Update component-specific styles in individual component files

### API Endpoints
Update API endpoints in `src/services/appsApi.js`

### Demo Data
Modify `src/data/demoKeywords.js` to change fallback data

## Development

### Running in Development Mode
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
```

Output will be in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgments

- SEMrush for inspiration
- All the open-source contributors
