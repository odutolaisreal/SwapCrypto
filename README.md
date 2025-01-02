# Cryptocurrency Converter  

A modern cryptocurrency converter web application built using **React.js**, **Tailwind CSS**, and the [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies).  

## 🚀 Features  
- **Real-Time Conversion**: Convert cryptocurrencies to fiat currencies and vice versa.  
- **Dynamic Rates**: Fetches the latest exchange rates using the Currency API.  
- **Responsive Design**: Fully responsive UI built with Tailwind CSS for seamless usage across all devices.  
- **User-Friendly Interface**: Intuitive and minimalistic design for an effortless experience.  

## 🛠️ Tech Stack  
- **React.js**: Frontend framework for building a dynamic and interactive user interface.  
- **Tailwind CSS**: For styling and responsive design.  
- **Currency API**: Fetches real-time currency data.  

## 📦 Installation and Setup  

### Prerequisites  
- **Node.js** installed on your machine.  
- **npm** or **yarn** as your package manager.  

Install Dependencies
bash
Copy code
npm install  
# or  
yarn install  
Start the Development Server
bash
Copy code
npm start  
# or  
yarn start  
The application will run on http://localhost:3000 by default.

🧑‍💻 Usage
Open the app in your browser.
Select the cryptocurrency and fiat currency from the dropdown menu.
Enter the amount you wish to convert.
View the converted value instantly.
🌐 API Details
This project uses the Currency API to fetch the latest exchange rates. The API endpoint structure is as follows:

bash
Copy code
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${default_value}.json  
Replace ${default_value} with the desired base currency (e.g., btc, usd, etc.).

For example:

To fetch Bitcoin rates:
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.json
# SwapCrypto
