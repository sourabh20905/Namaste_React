import React from "react";

class ClassComponent extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      count:0,
    }
  }
  render() {
    return (
      <div>
        Hello i am class component
        <div>Name:{this.props.name}</div>
        <div>{this.state.count}</div>
        <button onClick = {()=>{
          this.setState({
              count:this.state.count + 1,
          })
        }}>Increase</button>
      </div>
    );
  }

}

export default ClassComponent;