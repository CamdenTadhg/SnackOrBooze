### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router allows you to set up client-side routing in your React app so you can run a single-page application in which the browser does not request new documents from the server each time the URL changes. 

- What is a single page application?
A single page application is a website which loads as a single page without the necessity of the browser requesting additional documents from the server each time it needs to display new content. Instead, additional content and data is retrieved from the server via fetch and displayed to the user by Javascript without the browser re-loading, even though the URL changes. 

- What are some differences between client side and server side routing?
In server side routing, the server provides the browser with a new HTML document for each new URL that the user visits, while in client side routing, a shell HTML file is provided on initial load of the page and the content of the page is changed dynamically by Javascript. Speed is also different. Client-side routing is sometimes slower on initial load, but much faster on all subsequent user interactions, while server-side routing is slower on each new page visited because of the necessity to request new documents from the server. 

- What are two ways of handling redirects with React Router? When would you use each?
The two ways to handle redirects are the useNavigate hook and the Navigate component. The useNavigate hook is used when you want to move the user forward in the process and don't care if they return to the page they are currently on. The Navigate component is used when the user tries to access a page that they shouldn't have accessed and you want to push them to a new appropriate page and avoid them returning to the forbidden page. 

- What are two different ways to handle page-not-found user experiences using React Router? 
You can either use a NotFound component to display a 404 page or use the Navigate component to redirect the user to another locatoin. 

- How do you grab URL parameters from within a component using React Router?
URL parameters are available using the useParams hook which returns an object containing all the URL paramaters. 

- What is context in React? When would you use it?
Context creates a piece of universal data that can be used across your application or across a component hierarchy, depending on where you locate your context. You use context when a piece of data is needed across multiple components that do not have a parent-child relationship or when you are trying to avoid passing a piece of state as a prop down a long list of child components. 

- Describe some differences between class-based components and function components in React.
Class-based components have a render method which returns the necessary JSX while Function components simply return the JSX. Props are added to class-based components via the constructor method instead of being passed in as arguments of the function. State is also created in the constructor instead of being created by the useState hook. There is only one state in a class-based component, an object that can hold multiple pieces of data, while in a function component you can have many pieces of state. Class based components require the use of a bind statement for event handlers to maintain the appropriate "this" while function components do not. Class based components have a variety of lifecycle methods to run code at a certain point in the component's lifecycle; function components use useEffect for this purpose. 

- What are some of the problems that hooks were designed to solve?
The biggest issues that hooks were designed to solve are the difficulty, in class-based components, of sharing and abstracting logic between components and avoiding the duplication created by needing to write separate code for each lifecycle method when you needed the code the run in more than one place. 