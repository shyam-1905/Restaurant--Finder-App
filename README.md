

# Restaurant Finder App

Welcome to the Restaurant Finder App! This Next.js 14 web application helps users find restaurants based on their dietary preferences across different cities and states in the United States.

## Features

- **Dynamic Route Generation:** Pages are dynamically generated based on city and state URLs (`yourwebsite.com/city/state`) using [...slug] catch-all routing.
- **Search Functionality:** Users can search for restaurants by selecting a city and state from dropdown menus.
- **Responsive Design:** The application is designed to be responsive and accessible on various devices.

## Technologies Used

- **Frontend:** React.js, Next.js 14 (with App Router)
- **Styling:** Tailwind CSS
- **Data Management:** JSON data (dummy restaurant data)

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shyam-1905/Restaurant--Finder-App.git
   cd restaurant-finder-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- **Home Page:** Navigate to the home page where you can search for restaurants by selecting a city and state.
- **City/State Pages:** Once a city and state are selected, you'll be directed to a page listing restaurants in that location.
- **404 Page:** If an invalid URL is entered, you'll be redirected to a custom 404 page.

## SEO Optimization

The project includes SEO optimizations such as:
- Meta tags for title, description, keywords

## Folder Structure

The folder structure of the project is as follows:

```
restaurant-finder-app/
│
├── app/                 # Next.js 14 App Router structure
│   ├── [...slug]/       # Catch-all dynamic route
│   │   └── page.js      # Restaurant list page
│   ├── layout.js        # Root layout
│   ├── page.js          # Home page
│   └── not-found.js     # Custom 404 page
│
├── components/          # React components used throughout the app
│
├── data/                # Dummy restaurant data (JSON format)
│
├── public/              # Static assets (images, etc.)
│
└── styles/              # Tailwind CSS configuration and global styles
```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please create a GitHub issue or submit a pull request.

