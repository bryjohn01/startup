# BakeOff Board

[My Notes](notes.md)

BakeOff Board is a simple social web app for home cooks and bakers to log what they make, rate recipes, and share results with others. Users can post photos of their finished bakes, leave notes about what worked (or didn’t), and see a live feed of what the community is cooking in real time.

> [!NOTE]
> This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

BakeOff Board is a lightweight social log for home cooks and bakers. Users can save recipes they try, upload photos of finished dishes, rate them, and write notes for next time. A live community feed shows what others are baking in real time, making it easy to discover new ideas and stay inspired.

### Design

![Login page](/bakeoffboard_login.jpg)
![Feed page](/bakeoffboard_feed.jpg)

The application begins with a login/register screen. After authentication, users are taken to a main feed showing recent bakes posted by other users. Each bake appears as a card containing a photo, recipe name, rating, notes, and timestamp. Navigation links allow users to add a new bake, view their personal cookbook, or view their profile.

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant Backend
    User->>Frontend: Submit login credentials
    Frontend->>Backend: POST /login
    Backend-->>Frontend: Authenticated session
    User->>Frontend: Submit new bake
    Frontend->>Backend: POST /bakes
    Backend-->>Frontend: Save bake to DB
    Backend-->>Frontend: Broadcast bake via WebSocket
```

### Key features

- User registration, login, and logout
- Add and log baked dishes with photos, ratings, and notes
- Personal cookbook showing previously tried recipes
- Community feed displaying recent bakes
- Live updates when new bakes are posted
- Optional recipe lookup using a third-party API

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Semantic HTML elements will structure the application, including forms for login and bake submission, navigation bars, and accessible content layout.
- **CSS** - CSS will be used for responsive layout, card-based design for bakes, consistent color themes, and simple animations such as hover effects and new-post highlights.
- **React** - The frontend will be built as a single-page application using React. Components will represent views such as login, feed, add-bake form, and cookbook. React Router will control navigation, and state will update dynamically based on user actions.
- **Service** - A Node.js/Express backend will provide endpoints for authentication, posting and retrieving bakes, and fetching user data. The service will also call a third-party recipe API (such as TheMealDB) to assist users in adding recipe details.
- **DB/Login** - MongoDB will store user credentials (securely hashed), recipes, and bake logs. Only authenticated users will be able to create or view personalized data.
- **WebSocket** - WebSockets will broadcast new bake events to all connected clients so the feed updates in real time when someone posts a new bake.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://bakeoffboard.click/).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - Created multiple HTML pages to represent the main components of the application, including `index.html` (login/landing), `feed.html` (community feed), `add_recipe.html` (add a bake), and `cookbook.html` (user cookbook).
- [X] **Proper HTML element usage** - Used HTML elements like `header`, `nav`, `main`, `section`, `article`, `footer`, `form`, `label`, `input`, `table`, and `img` to structure the application.
- [X] **Links** - Added navigation links between all pages using a shared navigation bar so users can move between the home page, feed, add bake page, and cookbook.
- [X] **Text** - Included descriptive textual content throughout the application, like headings, labels, notes, placeholders, and text describing application features.
- [X] **3rd party API placeholder** - Added a clearly labeled placeholder section on the Add Bake page indicating where results from a third-party recipe API will be displayed.
- [X] **Images** - Included image elements on the feed and landing pages using locally stored placeholder images to represent baked goods. Also added a favicon.
- [X] **Login placeholder** - Added a login form with email and password inputs on the landing page. Also included option to create account for new users.
- [X] **DB data placeholder** - Represented database-backed content on the Cookbook page using a table of previously logged bakes labeled as data loaded from the database.
- [X] **WebSocket placeholder** - Included a live updates section on the feed page showing placeholder real-time messages that will eventually be sent via WebSocket.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Visually appealing colors and layout. No overflowing elements.**  
  Applied a consistent color palette across the application, including the header, sidebar, buttons, and content sections. Added padding, spacing, and border radius to create a clean layout with no overflowing or overlapping elements.
- [x] **Use of a CSS framework**  
  Integrated the Bootstrap CSS framework using a CDN and combined it with custom CSS to support layout structure and styling.
- [x] **All visual elements styled using CSS**  
  Styled all visible elements using CSS, including the body, header, sidebar navigation, main content sections, forms, buttons, images, and footer. No elements rely solely on default browser styling.
- [x] **Responsive to window resizing using flexbox and/or grid display**  
  Used CSS Grid for the overall application layout and Flexbox for internal layout such as the sidebar and content stack. Added media queries to adjust the layout for smaller screen sizes.
- [x] **Use of a imported font**  
  Imported custom Google Fonts (Quicksand for headings and Montserrat for body text) and applied them using CSS
- [x] **Use of different types of selectors including element, class, ID, and pseudo selectors**  
  Used a variety of CSS selectors including element selectors (`body`, `header`), class selectors (`.sidebar`, `.app-layout`), and pseudo selectors (`:hover`) to control styling and interactions.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
