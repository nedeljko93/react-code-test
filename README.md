# Posts CRUD application

An application includes all CRUD (Create, Read, Update and Delete) functionality for the post. The application has three pages. The posts page is where all posts are displayed with a search bar and lazy load of the data (list of posts). If the user wanna delete or edit some post he needs to hover over that particular post and then the bar with three icons will be visible. The first icon will redirect the user to the UpdatePost page. The second is for deleting the post, dialog with buttons is added for double-checking if the user wants to delete the post. The third one is for displaying the body of the post. Add post page is where users can add a new post. I also added the notification modal if the post is successfully created. Update post is where users can update the post and it also includes notification modal. Add post and edit post have the same form for their functionality. Both of the pages have Formik validation. Every API call will trigger the spinner and the spinner will be visible until the API call is executed.

Application has two Mobix stores. One is for posts and the other is for notification modal. Fetch api is function for handling all API requests with Axios library. In the common folder are all components that are or maybe will be used in multiple places. The custom router is where all paths to the pages are defined. The Pages folder also have common components folder for shared components between pages. Hooks contains function for mockup the pagination of the list of posts.

## Installation and Setup Instructions

### Example:

1. Clone down this repository. You will need node and npm installed globally on your machine.

2. Installation:
   npm install

3. To Start Server:
   npm start

## Credits

Nedeljko Avramovic
ln: https://www.linkedin.com/in/nedeljko-avramovi%C4%87-ba9095138/
