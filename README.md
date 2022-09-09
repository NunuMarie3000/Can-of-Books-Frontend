# Can of Books Frontend

**Author**: Storm O'Bryant
**Version**: 1.0.2
[VisitDeployedSite](https://can-of-books-stormy.netlify.app/)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

1.Clone a template of the Code Fellows' Can-of-Books frontend and backend repositories on Github
2.Review the `.gitignore` files to ensure they align with standard content for the repos, and add blank `.env` files, which **must be** in your `.gitignore` so as to not get pushed to GitHub.
3.Deploy BOTH the front-end and the back-end of your app to the cloud. It won't do much, but check for a proof-of-life indicator that the code is running.
4.Add Mongoose to your server. Ensure your local Mongo database is running. Connect to the Mongo database from within your server code.
5.Build a Mongoose 'Book' schema with valid keys for `title`, `description`, and `status`.
6.Use your schema to craft a 'Book' model
7.Modularize your code by putting your schema and model in its own separate file and requiring the schema into your server.
8.Seed your database. Create at least three Book objects with all available attributes.
9.Create a `/books` route. Use a REST client to hit the route, so you can continually verify what your server is returning.
10.When a client sends a `GET` to the `/books` route, your server should retrieve all of the books from the `books` collection, and return them as JSON in the response object.
11.In the `BestBooks` component, make a `GET` request to your server `/books` route, in the `componentDidMount` function.
12.Store the book data returned from the server in the application `state`.
13.Use conditional logic to only render the books when there are more than 0 books stored in the application state.
14.When the server does return some books, use a Bootstrap carousel to render all the books returned.
15.When the server returns no books, then render a message that the book collection is empty.
16.Use React Router to add ability for user to navigate between Home and About "pages".
17.Add an About page at path `/about` that displays the project developer's information.
18.Add a new route and handler function to your server, to respond to `POST` requests to `/books`. This is your book-creation end point. Verify it's working by sending a raw POST request via your REST Client.
19.Grab the properties of the book to be created from the request object. Create an object-literal representation of a Book with these book properties. Verify the server is doing this correctly with your REST Client.
20.Add your new book object to the database. Respond to the request with a JSON representation of the newly-saved book. With your REST Client, verify that this is working.
21.Be sure to include server-side error checking, in case something goes wrong. Respond with appropriate status codes, if anything goes wrong. Verify with your REST Client.
22.Now that your server is ready for requests, write the front-end code to send such requests. Start by creating an "Add Book" button component to your React app. When it's clicked, an application `state` property should be updated, indicating the "New Book" form should be revealed.
23.Create a `BookFormModal` component that contains the form elements required to collect the user input needed for creating a new book. Reveal this modal when the "Add Book" button is clicked, and hide the modal when the modal is closed.
24.When the form is submitted, use Axios to send a `POST` request to the server's `/books` endpoint, including the data from the form. The server should respond with the new book that was successfully saved, which you should pass up to the `BestBooks` component, save to state, to allow React to re-render the list of all books.
25.Be sure your front end will handle any errors, in case something goes wrong.
26.Add a server end point to handle `DELETE` requests to `/books/:id`.
27.Verify that you can access the book id from the `request.params` object.
28.Use the id of the book to delete that book from the database.
29.If all goes well, send back a success response. Handle any errors with proper error messages and response status codes.
30.In your front-end Book component, add a "Delete" button component for every book in the list.
31.When the user clicks the delete button, send a `DELETE` request to `/books/:id`, replacing `:id` with the id of that book.
32.Make sure that state is updated, and the book is removed from the user's list as soon as you get a success message back from the server, and that it stays removed when you reload the page.
33.STRETCH: While the server is processing the delete request, the button may remain active and the book will show in the list. Configure your button component to go inactive as soon as it's clicked, and maybe even show a spinner. If the server hits an error while attempting to delete the book, display a helpful message and reactivate the button so that the user can try again.
34.Add server code to handle `PUT` requests to a `/book/:id` route. Return the updated book.
35.Add a form in the front end to let the user edit an existing book's details. When the form is submitted, send the new data to the server, and update the page according to the response.
36.Add Auth0 to your `index.js` file, so that your application can use the authentication service.
37.Copy over the given authentication components into the React application's file structure.
38.Add the `Auth0Provider` component as a wrapper for your `App` component. Be sure to include your Auth0 secrets in your `.env` file.
39.Conditionally render the `BestBooks` component, if the user is logged in. Otherwise, show the `Welcome` component.
40.Utilize the `AuthButtons` component in your `Header`. This will show `Login` to users not signed in. When a signed-in user clicks the logout button, it should log the user out of the application.
41.Include the JSON web token (JWT) in the header of all requests to the server.
42.In your `App` component, use the imported `BrowserRouter` component to create routes for `/profile`.
43.Create a `Profile` page that is only visible when a user is logged in. This component should display information about the user provided by Auth0, such as name, profile picture, and email address.
44.Style your app nicely using `react-bootstrap`.
45.BACKEND: Integrate the provided authorization middleware into your server. In the route handler functions, you will now have access to a `request.user.email` from the signed-in user.
46.Modify ALL of the database calls to utilize the user's email address. Users should only be able to CRUD their own books!
47.Deploy your application and ensure functionality is working correctly in your production environment.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

09/02/22 2:05pm - Application renders carousel of books from mongodb database via axios.get request to server
9/02/22 2:39pm - Implemented cards on the carousel, display looks waaaay better
9/02/22 6:24pm - User can create new books and the the application automatically rerenders the carousel with new book
9/03/22 4:00pm - User can delete books and the application automatically rerenders the carousel without deleted book
9/03/22 4:40pm - Delete button is disabled while axios request is requesting, is enabled when the request is finished
9/06/22 10:33am - User can update their books, the application automatically updates the carousel with updated information
9/08/22 5:28pm - User must sign in to use the application, user can only CRUD their own books
9/08/22 9:22pm - Removed PUT/DELETE route from backend auth middleware, should work fine in after deploy
9/08/22 9:49pm - More user friendly for new users, bestBooks is a bit more clunky, but i'll fix later

## Estimates

1.Name of feature: Book Component: As a user, I'd like to see the list of books, so that I can see what's recommended to me.

Estimate of time needed to complete: 2 hours

Start time: approx. 1pm

Finish time: 2:05pm

Actual time needed to complete: approx. 1 hour

2.Name of feature: Create: As a user, I'd like to add a new book to the shelf, so that I can update the list with my own recommendations.

Estimate of time needed to complete: 5 hours

Start time: 2:48pm

Finish time:6:24pm

Actual time needed to complete: approx. 4 hours

3.Name of feature: Delete: As a user, I want to remove books from my list, so that only the most important books are on my shelf.

Estimate of time needed to complete: 6 hours

Start time: 2:50pm

Finish time: 4:00pm

Actual time needed to complete: 1 hour, 10 minutes

4.Name of feature: Update: As a user, I want to update book details on my list, so that I can change the book status, or update the book details as I learn more about it.

Estimate of time needed to complete: 6 hours

Start time: 10:03am

Finish time: 10:33am

Actual time needed to complete: 30 minutes

## Credit and Collaborations

Code Fellows for the Can-of-Books frontend and backend template starter code
