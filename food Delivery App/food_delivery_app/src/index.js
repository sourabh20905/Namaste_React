import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider , createBrowserRouter} from 'react-router-dom';
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from './components/Error';
import Body from './components/Body';
import Cart from "./components/Cart";
import RestaurantMenu from './components/RestaurantMenu';
const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact-us",
        element:<ContactUs/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  
  
])

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
