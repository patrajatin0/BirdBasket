# BirdBasket 🐔

- BirdBasket is a MERN stack e-commerce website for selling live chikens and birds varieties online
- Users can browser birds, view prices, add to cart, and place orders
- Admin can manage bird products and orders

## 💻💻 ⌨️⌨️⌨️ Tech Stack ⌨️⌨️⌨️ 💻💻

- Frontend: React
- Backend: Node.js + Express.js
- Database: MongoDB
- HTTP Client: Axios
- Image Upload: Multer/Cloudinary
- Deployment: Vercel + Render

## Project Structure

birdbasket
│
├──src
| |── config
│ ├── models
│ ├── routes
│ ├── middleware
│ └── server.js
│
│
├── src
│ ├── components
│ ├── pages
│ ├── services
│ └── App.jsx

## Features

### User Features

- Register/Login
- View bird products
- Add to cart
- Place orders
- Track Orders

### Admin Features

- Add bird varieties
- Upload bird images
- Edit price
- Delete products
- Manage orders

### Bird Categories

- Broiler Chiken
- Country Chiken
- Duck
- Turkey
- Quail
- etc...

### API Routes

POST /api/register
POST /api/login

GET /api/birds
GET /api/birds/:id

POST /api/addbird
POST /api/order

GET /api/myorders

### Database Collections

- Users
- Birds
- Orders
