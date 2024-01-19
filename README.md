  <h1>ViaBirds Movies</h1>
  
  <p >
Welcome to the Movie Explorer app documentation! This application is built using React with TypeScript, Tailwind CSS, and Vite. The Movie Explorer allows users to search for movies, filter them based on their ratings, view detailed information, and even watch trailers. Additionally, users can create accounts locally and add their favorite movies to a personalized favorites list.
  </p>

<br/>

## Features

1. **Search Movies and TV Series:**

   1. Utilize the powerful search functionality to find movies based on titles or keywords.
   2. The search results dynamically update as you type, providing a seamless and efficient user experience.
   3. Easily filter movies based on their ratings, allowing you to discover films that match your preferences.
   4. Access comprehensive details about each movie, including cast, crew, release date, and synopsis.
   5. Watch trailers directly from the movie details page, enhancing your overall viewing experience.
   6. Create a personalized account to unlock additional features and maintain a unique identity within the app.
   7. Build and manage your list of favorite movies locally.
   8. Add and remove movies from your favorites list with just a few clicks.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

\***\* Installing \*\***

Make sure you have all the necessary prerequisites installed on your system. Follow the below steps to install the setup the project on your machine:

- Open a terminal or command prompt and navigate to the directory where you want to clone the project.
- Run the following command to clone the project from GitHub:
  ```bash
  git clone https://github.com/NemanjaSupljeglav/viabirds-test-task
  ```
- This will create a new directory called "viabirds-test-task" in the current location, containing the code for the movie app project.
- Navigate to the project directory by running the following command:

  ```bash
  cd viabirds-test-task
  ```

- Run the following command to install the project's dependencies using npm:

  ```bash
  npm install
  ```

- Start the server

  ```bash
  npm run dev
  ```

- To use the movie project, you will need to set up some environment variables on your development machine. Here are the steps to follow:

  1. Create a **`.env`** file in the root of the project.
  2. Add the following variables to the **`.env`** file, replacing the placeholder values with your own:

  ```jsx
  VITE_API_KEY=<your-tmdb-api-key>
  VITE_TMDB_API_BASE_URL = https://api.themoviedb.org/3
  ```

  3. Save the **`.env`** file.

- Once the dependencies are installed, you can run the project locally by running the following command:
  ```bash
  npm run dev
  ```

This will start the development server and open the movie application in your default web browser.

<br/>

## Demo

This demo is for exploration purposes only and does not store any real user data. The information you enter, including account details and favorite movies, is temporary and will not persist between sessions. Enjoy your exploration of the Movie Explorer app!

URL: <a target="_blank" href="https://viabirds-test-task.vercel.app/" >View Demo</a>
