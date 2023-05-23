import React, { useContext } from 'react';
import './Blog.css';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';


const Blog = () => {
    const {convertToPDF}=useContext(AuthenticationContext);
    return (
        <div>
            <div className='qna'>
                <h1 className='text-center'>Some QNA</h1>
            </div>
            <div className="container d-flex margins" >
               <div  id="page" > <h4><b>Question:</b>Tell us the differences between uncontrolled and controlled components.</h4>
                <p><b>Answer:</b>Uncontrolled components and controlled components are two approaches used in React for managing form inputs and their associated state. In uncontrolled components, the form inputs maintain their own internal state, which is accessed through the HTML DOM rather than React. This approach is suitable for simple forms and situations where direct DOM access is necessary. On the other hand, controlled components have their state managed by React</p>
                <h4><b>Question:</b>How to validate React props using PropTypes</h4>
                <p><b>Answer:</b>To validate React props using PropTypes, first,we have to install the prop-types package. Then,we have to import the PropTypes module into our component file.then we have to Define the expected prop types by adding a propTypes property to the component's definition. Inside the propTypes object,we have to specify the expected type and validations for each prop using the available PropTypes validators. </p>
                <h4><b>Question:</b>Tell us the difference between nodejs and express js.</h4>
                <p><b>Answer:</b>Node.js is a JavaScript runtime that allows us to execute JavaScript code on the server-side. It provides a platform for building scalable and high-performance applications using JavaScript. On the other hand, Express.js is a web application framework that runs on top of Node.js. It simplifies the process of building web applications by providing a set of features and middleware for handling routing, request/response handling, and other common web development tasks</p>
                <h4><b>Question:</b>What is a custom hook, and why will you create a custom hook?</h4>
                <p><b>Answer:</b>A custom hook is a JavaScript function in React that allows us to reuse stateful logic across multiple components. It enables us to extract and encapsulate complex logic into a reusable hook that can be shared and used in various components throughout our application.</p>
                </div>
               <div>
                <button onClick={convertToPDF} className='btn btn-danger'>PDF</button>
               </div>
            </div>
            
        </div>
    );
};

export default Blog;