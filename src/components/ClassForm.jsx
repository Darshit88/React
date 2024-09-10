import { Component } from "react";

export default class ClassForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      show: null,
    };
  }
  

  handleForm = (e) => {
    e.preventDefault();
    this.setState({ show: (this.state.name, this.state.password) });
    console.log(this.state.name, this.state.password);
    e.target.reset()
  };

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleForm}>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <br /> <br />
          <button>Submit</button>
        </form>
        <br /><br />
        
           { this.state.show && (
                <>
                    <h2>Name : {this.state.name}</h2>
                    <h2>Password : {this.state.password}</h2>
                </>
            )  
        }
      </>
    );
  }
}
