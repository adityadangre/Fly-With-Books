# Fly With Books

Fly With Books is a React Native mobile application designed to simplify the process of buying and selling second-hand books. The platform provides a categorized marketplace experience where students and readers can discover books across different genres and educational categories while offering an easy way for sellers to list their books.

## Overview

Textbooks and educational resources can be expensive and difficult to access. Fly With Books aims to create a community-driven marketplace where users can browse, discover, and sell books in a simple and organized way.

The application features category-based navigation, search functionality, user authentication through Google Sign-In, and a dedicated interface for listing books.

## Features

### User Authentication
- Google Sign-In integration
- Firebase Authentication
- Persistent user sessions
- Automatic login handling

### Browse Books
- Explore books through categorized sections
- Horizontally scrollable book collections
- Simple and intuitive marketplace interface

### Book Categories
The platform organizes books into categories such as:

- Academic
- Fiction
- Non-Fiction
- Exam Preparation
- Other

### Search Functionality
- Search bar for discovering books
- Quick access to available listings

### Sell Books
- Dedicated "Sell" section
- Simple interface for adding books to the marketplace
- Designed to make book selling accessible and straightforward

### User Dashboard
- Home feed with featured categories
- Personal profile section
- Marketplace navigation through bottom tabs

## Screens

### Login Screen
Users authenticate using their Google account to access the platform.

### Home Screen
The main marketplace view featuring:
- Search bar
- Book categories
- Featured books
- Quick navigation options

### Sell Book Screen
Allows users to initiate the process of listing books for sale.

### Profile Screen
Provides a dedicated area for user-related information and future account management features.

## Tech Stack

### Frontend
- React Native
- Expo

### Navigation
- React Navigation
- Bottom Tab Navigation

### Authentication
- Google Sign-In
- Firebase Authentication

### Backend Services
- Firebase

### UI Components
- React Native Vector Icons
- Responsive Font Size

## Libraries Used

- expo
- firebase
- expo-google-app-auth
- @react-navigation/native
- @react-navigation/material-bottom-tabs
- react-navigation
- react-navigation-tabs
- react-native-vector-icons
- react-native-responsive-fontsize

## Project Structure

```text
Fly-With-Books/
│
├── assets/
│   ├── academic.png
│   ├── exam.png
│   ├── friction.png
│   ├── nonfriction.png
│   ├── sell.png
│   └── plusicon.png
│
├── components/
│   ├── HomeHeader.js
│   ├── HomeCategory.js
│   └── HomeCItem.js
│
├── navigation/
│   └── TabNavigation.js
│
├── screens/
│   ├── Dashboard/
│   │   ├── Home.js
│   │   ├── AddItem.js
│   │   └── Mine.js
│   │
│   └── Login/
│       ├── Login.js
│       ├── Loading.js
│       └── Dashboard.js
│
├── config.js
├── App.js
└── package.json
```

## Installation

### Prerequisites

- Node.js
- npm
- Expo CLI
- Firebase Project

### Clone the Repository

```bash
git clone <repository-url>
cd Fly-With-Books
```

### Install Dependencies

```bash
npm install
```

### Firebase Setup

Create a Firebase project and configure:

- Firebase Authentication
- Google Sign-In

Update the Firebase configuration inside:

```javascript
config.js
```

with your Firebase project credentials.

### Start the Application

```bash
npm start
```

or

```bash
expo start
```

### Run on Mobile Device

1. Install Expo Go on your Android or iOS device.
2. Start the Expo development server.
3. Scan the generated QR code.
4. Launch the application.

## Application Flow

1. User opens the application.
2. Google Sign-In authentication is performed.
3. User enters the marketplace dashboard.
4. Browse books through categories.
5. Search for desired books.
6. Navigate to the Sell section to list books.
7. Access personal information through the profile section.

## Future Enhancements

- Complete book listing functionality
- Book details page
- Wishlist and favorites
- In-app messaging between buyers and sellers
- Image uploads for book listings
- Price filtering
- Advanced search and sorting
- User ratings and reviews
- Order management
- Payment integration
- Real-time notifications

## Learning Outcomes

This project demonstrates:

- React Native mobile application development
- Firebase Authentication integration
- Google OAuth implementation
- Component-based architecture
- Navigation using bottom tab navigators
- Responsive UI design
- State and session management
- Marketplace application design principles

## License

This project was developed for educational and portfolio purposes. Feel free to explore, modify, and extend it for learning and experimentation.
