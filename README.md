# TRB Bank - Digital Wallet

A modern, responsive banking dashboard application built with React. Features a sleek dark theme with red accents, inspired by professional financial applications.

## Features

✨ **Modern Design**
- Dark theme with gradient backgrounds
- Smooth animations and transitions
- Responsive layout for all devices
- Professional UI components

💰 **Financial Dashboard**
- Digital wallet display with balance
- Account details and card information
- Statistics cards for transaction monitoring
- Real-time financial information display

🎨 **User Interface**
- Collapsible sidebar navigation
- Search functionality
- Header with user greeting
- Status indicators
- Payment method badges

## Tech Stack

- **React 18** - UI library
- **React Icons** - Icon library
- **CSS3** - Styling with animations
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
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Navigation sidebar
│   ├── Sidebar.css
│   ├── Header.js           # Top header with search
│   ├── Header.css
│   ├── Dashboard.js        # Main dashboard content
│   ├── Dashboard.css
│   ├── WalletCard.js       # Digital wallet display
│   ├── WalletCard.css
│   ├── StatsCard.js        # Statistics cards
│   └── StatsCard.css
├── App.js                  # Main app component
├── App.css
├── index.js               # React entry point
└── index.css              # Global styles
```

## Features Breakdown

### Sidebar Navigation
- Logo and branding section
- Main menu items (Dashboard, Transfers, Transactions, etc.)
- Bottom menu with Account, Help, and Log Out
- Collapsible functionality for responsive design

### Header
- Welcome greeting
- Search functionality
- Gold Member button
- Menu toggle for mobile

### Wallet Card
- Large balance display
- Account number (masked)
- Card expiration date
- Active status indicator
- Positive flow indicator
- Animated gradient background

### Stats Cards
- Monthly transaction volume
- Savings target tracking
- Wallet security status

## Customization

### Colors
Edit the CSS files to change the color scheme:
- Primary Red: `#ff4444`
- Background: `#0a0a0a`
- Accent Green: `#00ff88`

### Content
Update component props and state to display real financial data

### Icons
Import more icons from `react-icons` library as needed

## Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## License

This project is open source and available under the MIT License.

## Support

For support, open an issue on the GitHub repository.

---

**Built with ❤️ using React**
