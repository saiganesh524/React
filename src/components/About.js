// import User from "./User";
// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component Did Mount");
  }

  render() {
    console.log("parent render");
    return (
      <div className="body">
        <h1>About Us</h1>
        <p>This is a simple React app with a header and a body.</p>
        <div>
          LoggedIn User :
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <div className="users-container">
          {/* <User name={"Sai Ganesh (fn)"} /> */}
          {/* <UserClass name={"Sai Ganesh (cls)"} location={"Repalle (cls)"} /> */}
          {/* <User /> */}
          <UserClass />
        </div>
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div className="body">
//       <h1>About Us</h1>
//       <p>This is a simple React app with a header and a body.</p>
//       <div className="users-container">
//         {/* <User name={"Sai Ganesh (fn)"} /> */}
//         <UserClass name={"Sai Ganesh (cls)"} location={"Repalle (cls)"} />
//       </div>
//     </div>
//   );
// };

export default About;
