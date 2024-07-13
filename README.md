# Next.js Project with Server Actions, RSC, and Redux Toolkit
This project is a Next.js application that leverages server actions, 
React Server Components (RSC), and Redux Toolkit for state management. 
TailwindCSS is used for styling, and the project includes a functional 
carousel, countdown timer, and an admin panel with login, 
registration, and user management features. The application also 
demonstrates expertise by being responsive, even though it was not a 
requirement.

## Key Features
- Next.js: Utilized for its powerful React-based framework features, including server-side rendering and static site generation.
- Server Actions: Implemented to handle server-side logic seamlessly.
- React Server Components (RSC): Used for efficient server-side rendering and performance optimization.
- Redux Toolkit: Integrated for robust state management across the application.
- TailwindCSS: Used for rapid UI development with utility-first CSS.
- Functional Carousel: Includes a dynamic and user-friendly carousel.
- Countdown Timer: A functional countdown timer for specific events or promotions.
- Admin Panel: Fully functional administrative interface for user management, including login and registration.
- Responsive Design: Ensured a simple yet functional responsive design.

## Installation

1. Clone the Repository:
```sh
git clone https://github.com/ReylanLugo/GrabLanding.git
cd GrabLanding
```

2. Install Dependencies:

````sh
npm install
````

3. Setup Environment Variables:
````dotenv
API="http://localhost:7000/api/v1"
NEXT_PUBLIC_API_URL=http://localhost:7000/api/v1
SECRET="mandoca"
````

4. Run the Development Server:
````shell
npm run dev
````
Open http://localhost:3000 with your browser to see the result.

## Key Technologies
### Next.js
- Server Actions: Utilized for handling server-side operations such as data fetching and form submissions.
- React Server Components (RSC): Implemented to enhance performance by rendering components on the server.

### Redux Toolkit
- State Management: Used to manage the application state efficiently.
- Slices: Created slices for different features, e.g., userSlice for user-related state management.

### TailwindCSS
- Utility-First CSS: TailwindCSS is used to style the application rapidly and maintain a consistent design.

### Functional Components
- Carousel: A dynamic carousel component for showcasing items.
- Countdown Timer: A countdown timer component to display time-sensitive promotions.
- Admin Panel: Includes login, registration, and user management functionalities.

### Responsive Design
Despite not being a requirement, the application includes a responsive design to ensure it looks good on various devices.

## Areas for Improvement
- Modular Assets: Ensure all assets are obtained and organized modularly.
- Responsive Bugs: Refine and fix responsive design bugs, particularly during desktop resizes.
- Real Data Integration: Replace placeholder data with real project data.
- Modal Design: Design and implement modals for various interactions, or use distinct routes for buttons and links.
- Admin Panel Design: Enhance and refine the design and user experience of the administrative panel.

## Conclusion
This Next.js project demonstrates the power and flexibility of Next.js when combined with server actions, React Server Components, and Redux Toolkit. TailwindCSS is used to streamline styling, and the project includes functional components such as a carousel and countdown timer, as well as a responsive design. The administrative panel offers comprehensive user management features, showcasing expertise beyond the initial project requirements.