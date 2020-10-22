import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

// class Navbar extends Component {
// 	static contextType = ThemeContext
//   render() {
// 		// console.log(this.context);
// 		const {isLightTheme, light, dark} = this.context;
// 		const theme = isLightTheme ? light : dark;
// 		return (
//       <nav style={{background: theme.ui, color: theme.syntax}}>
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }
const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  const ChangeLogin = () => {
    return toggleAuth;
  };
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={ChangeLogin()}>
        {isAuthenticated ? "logged in" : "logged out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
