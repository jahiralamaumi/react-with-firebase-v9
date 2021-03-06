<h1>In this project we'll use React with Firebase V9 to setup authentication for an application</h1>

<p><strong>Features</strong></p>
<ul>
    <li>Firebase functions for Login and Register</li>
    <li>Toast messages for errors</li>
    <li>We will add private routes using session-based authentication</li>
</ul>

<p><strong>Ingredients</strong></p>
<ol><li>Firebase V9.</li><li>React Router V6.</li><li>Material UI.</li><li>React Toastify.</li></ol>

<p>Here, we are using the same Form component for both Login and Register. Also passing props to the component to make them into Login and Register Screens.</p>
<p>We store the token response in the session storage. We do this because we are going to create private routes.</p>
<p><strong>Issue(useNavigate() may be used only in the context of a /&lt;Router&gt; component):</strong> useNavigate() only works inside a router component. App.js is not a router component so move BrowserRouter to index.js</p>
<p>In the Home.js component, create a useEffect hook. useEffect is a function that runs every time our component loads or mounts.</p>
<p>If the token exists, we will remain on the Home Page. Otherwise we will be pushed back to the Login screen unless we find a way to destroy the token.

Now, we will create the same check in the App.js file.</p>

<h2>Handle Errors using Catch Block and React Toastify</h2>
<p>
If we try to login with an incorrect email or password, we will get errors. 
<code>npm i react-toastify</code>

<h2>Create the Logout Functionality</h2>
<p>Just destroy the token from the session, and it will push us back to the Login Page.</p>
<small>Inspired from freecodecamp's React Authentication Tutorial – How to Set Up Auth with Firebase V9 and React Router V6- Nishant Kumar</small>#   r e a c t - w i t h - f i r e b a s e - v 9  
 