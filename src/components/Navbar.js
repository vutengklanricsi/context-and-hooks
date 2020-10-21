import React from "react";
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
  return (
    <AuthContext.Consumer>{(AuthContext) => {
      const {isAuthenticated, toggleAuth} = AuthContext;
      const ChangeLogin = () => {
        return toggleAuth;
      }
      return(
      <ThemeContext.Consumer>{(ThemeContext) => {
        const { isLightTheme, light, dark } = ThemeContext;
				const theme = isLightTheme ? light : dark;
        return(
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={ChangeLogin()}>
              {isAuthenticated ? 'logged in' : 'logged out'}
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        );
      }}</ThemeContext.Consumer>
      )}}</AuthContext.Consumer>
  );
};

export default Navbar;
