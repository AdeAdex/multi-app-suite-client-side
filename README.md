# MultiApp Suite (Jokes App, Question and Answer Quiz App, Dictionary App, LiveScore Soccer: Football Match Updates )

This project consists of many distinct applications, each designed to serve a unique purpose and provide valuable functionality.

**Jokes App**

**Description:**
The Jokes App is a simple web application that provides you with a random joke every time you visit the page. It's a fun and light-hearted way to brighten your day with some humor.

**Features**
Random joke generation.
Easy-to-use interface.
Technologies Used
React: A JavaScript library for building user interfaces.
Axios: A popular HTTP client for making API requests.
Joke API: The app fetches jokes from the "joke.deno.dev" API.



**Question and Answer Quiz App**

**Description:**
The Question and Answer Quiz App is an interactive quiz application that tests your knowledge on a variety of topics. It provides multiple-choice and true/false questions for you to answer and keeps track of your score.

**Features**
Randomized quiz questions.
Score tracking.
Multiple-choice and true/false questions.
Technologies Used
React: A JavaScript library for building user interfaces.
Axios: A popular HTTP client for making API requests.
Open Trivia Database API: The app fetches quiz questions from the "opentdb.com" API.


**Dictionary App**

**Description:**
The Dictionary App is a web application that allows you to search for word definitions and phonetics. It provides detailed information about the word, including its meanings and pronunciations.

**Features**
Word definition lookup.
Phonetic information display.
User-friendly interface.
Technologies Used
React: A JavaScript library for building user interfaces.
Axios: A popular HTTP client for making API requests.
Dictionary API: The app fetches word definitions and phonetics from the "api.dictionaryapi.dev" API.



** LiveScore Soccer: Football Match Updates**

**Overview:**
The FootballMatches component is a React-based web component designed to display and organize football (soccer) match information. It fetches data from an external API using Axios and provides a dynamic, visually engaging user interface to present the data. The component also categorizes matches by league and provides real-time match details, including team information, scores, and match start times.

**Key Features:**

Data Fetching: The component uses Axios to make an asynchronous GET request to an API endpoint (https://multi-app-suite-server-side-adex2210.vercel.app/api/football-matches) to retrieve football match data.

Data Grouping: The fetched match data is grouped by leagues. The component intelligently categorizes matches into various leagues and "Others" if the league information is missing. This grouping ensures that users can easily find matches of their interest.

Conditional Rendering: Depending on the availability of match data, the component employs conditional rendering to display either a message indicating no available match data or the organized matches by league.

Responsive Design: The component offers a responsive design, adapting to various screen sizes and ensuring a consistent user experience across devices.

**Functions:**

fetchData: An asynchronous function responsible for fetching football match data from the API. It utilizes axios.get and updates the matches state with the retrieved data.

groupMatchesByLeague: A utility function that categorizes the matches into different leagues, including "Premier League," "La Liga," "Serie A," and more. It accounts for matches without league information and assigns them to the "Others" category.

**Rendering:**

The component dynamically renders match information based on the available data, displaying:

Match league names, country flags, and emblems.
Team crests, names, and match scores (if available).
Match start times (if the match is not yet finished).
A "Winner" indicator for the winning team (if applicable).
