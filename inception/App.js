/**
 * <div class = "parent">
 * <div class= "child">
 * <h1>"it is heading</h1>
 * </div>
 * </div>
 */
 
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"It is heading"),React.createElement("h2",{},"It is h2")]));  //it returns js object
const root = ReactDOM.createRoot(document.getElementById("root")); //create root

root.render(parent); //understand the parent object and create a tags
console.log(parent); 

// const heading = React.createElement("h1",{id:"heading"},"Hello From react"); //{}-> attributes to the tag
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);
 
