# Authentications

Secrets is a full-stack web application that allows users to anonymously share secrets. It uses local authentication along with social logins (Google and Facebook) by leveraging Passport, Passport‑Local‑Mongoose, and OAuth strategies. Secrets are stored in a MongoDB database where each user can submit multiple secrets.

## Features

- **User Authentication:**
  - Local registration and login using username (email) and password.
  - Social authentication with Google and Facebook.
- **Session Management:**
  - Uses express-session and Passport to persist user login sessions.
- **Secrets Submission:**
  - Authenticated users can submit secrets anonymously.
  - Each user can store multiple secrets, now displayed in a new, engaging layout.
- **Enhanced UI:**
  - Built with EJS for templating and Bootstrap for responsive design.
  - Custom CSS with transitions and animations that provide a modern look and feel.
  - Redesigned secrets display that highlights each secret in its own styled card.

## Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** Passport, Passport‑Local‑Mongoose, passport-google-oauth20, passport-facebook, express-session
- **Frontend:** EJS templates, Bootstrap, Font Awesome, custom CSS
- **Environment Management:** dotenv

## Getting Started

### Prerequisites

Before you begin, ensure you have these installed on your local machine:
- [Node.js and npm](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/talhahossa1n/authentications.git
   cd secrets
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Setup Environment Variables:**

   Create a `.env` file in the root folder and add your credentials:

   ```
   CLIENT_ID=your_google_client_id
   CLIENT_SECRET=your_google_client_secret
   FACEBOOK_APP_ID=your_facebook_app_id
   FACEBOOK_APP_SECRET=your_facebook_app_secret
   SECRET=your_session_secret
   ```

4. **Start MongoDB:**

   Ensure MongoDB is running (e.g., run `mongod` from the command line).

5. **Run the Application:**

   ```sh
   npm start
   ```

6. **Open in Browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to explore the application.

## Project Structure

```
Secrets/
├── app.js                  # Main application file with route definitions and Passport configuration
├── package.json            # Project dependencies and scripts
├── .gitignore              # Files to ignore in Git
├── .env                    # Environment variables (should not be committed)
├── public/                 
│   └── css/                
│       ├── bootstrap-social.css  # Social button styles
│       └── styles.css              # Updated custom styles including new transitions and layout for secrets
└── views/                  
    ├── home.ejs            # Homepage with navigational links
    ├── login.ejs           # Login form
    ├── register.ejs        # Registration form
    ├── secrets.ejs         # Redesigned display for submitted secrets
    ├── submit.ejs          # Secret submission form
    └── partials/           
        ├── header.ejs      # Common header for all pages (includes Bootstrap and Font Awesome)
        └── footer.ejs      # Common footer for all pages
```

## Routes Overview

- **GET /**  
  Renders the home page.
  
- **GET /register & POST /register**  
  Renders the registration page and handles user registration using Passport‑Local‑Mongoose.

- **GET /login & POST /login**  
  Renders the login page and handles user authentication.
  
- **GET /secrets**  
  Protected route that displays all secrets submitted by authenticated users, using the new layout.
  
- **GET /submit & POST /submit**  
  Allows authenticated users to submit a secret.
  
- **GET /auth/google & /auth/google/secrets**  
  Routes to handle Google OAuth authentication.
  
- **GET /auth/facebook & /auth/facebook/secrets**  
  Routes to handle Facebook OAuth authentication.
  
- **GET /logout**  
  Logs out the current user and ends their session.

## Customization & Styling

- Updated custom styling in `public/css/styles.css` introduces smooth transitions (using the `transition` property) and subtle scaling (via `transform`) to bring the secrets to life.
- The secrets are now displayed in an engaging layout that makes each secret stand out individually.

## Troubleshooting

- **Social Authentication Issues:**  
  Double-check your OAuth credentials in the `.env` file.
  
- **Database Connection:**  
  Ensure MongoDB is running and accessible at `mongodb://localhost:27017/userDB`.
  
- **UI/Styling Adjustments:**  
  If the UI doesn't render as expected, verify your Bootstrap and custom CSS classes are correctly applied and review the updated styling rules.

## Resources

- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Passport Documentation](http://www.passportjs.org/docs/)
- [Bootstrap Documentation](https://getbootstrap.com/)

## Contributing

Feel free to fork this project and submit pull requests. Please open an issue first to discuss any major changes or improvements.

## License

This project is licensed under the ISC License.

## Acknowledgements

- Thanks to various open source libraries and tutorials that guided the development of this project.
- Special thanks to Angela Yu and her Web Development Bootcamp course on Udemy for the inspiration and guidance.