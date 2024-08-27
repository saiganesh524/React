import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //count: 0,
      userInfo: {
        // name: "",
        // location: "",
        // avatar_url: "",
      },
    };

    console.log("child Constructor");
  }

  async componentDidMount() {
    console.log("child Component Did Mount");
    //API call
    const data = await fetch("https://api.github.com/users/saiganesh524");
    const json = await data.json();

    this.setState({ userInfo: json });
    console.log(json);
    // this.interval = setInterval(() => {
    //   console.log("something happened");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("child Component Did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
    console.log("child Component Will Unmount");
  }
  render() {
    console.log("child Rendered");
    //const { name, location } = this.props;
    //const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count Increase
        </button> */}
        <img src={avatar_url} alt="User Avatar" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <p>Contact @saiganesh524</p>
      </div>
    );
  }
}

export default UserClass;
