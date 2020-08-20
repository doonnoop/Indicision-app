class VisibilityToggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        toggled: !prevState.toggled
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.toggled ? "hide details" : "show details"}
        </button>
        {this.state.toggled && <p>Hey.These are some details you can see now!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// const app = {
//   toggled: false
// };

// const toggleVisibility = () => {
//   app.toggled = !app.toggled;
//   render();
// };

// const render = () => {
//   const template = (
    // <div>
    //   <h1>Visibility Toggle</h1>
    //   <button onClick={toggleVisibility}>
    //     {app.toggled ? "hide details" : "show details"}
    //   </button>
    //   {app.toggled && <p>Hey.These are some details you can see now!</p>}
    // </div>
//   );

//   ReactDOM.render(template, document.getElementById("app"));
// };

// render();
