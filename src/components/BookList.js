import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const {books} = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }} >
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default BookList;

// const BookList = () => {
//   return (
//     <ThemeContext.Consumer>
//       {(context) => {
//         const { isLightTheme, light, dark } = context;
//         const theme = isLightTheme ? light : dark;
//         return (
//           <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//             <ul>
//               <li style={{ background: theme.ui }}>the way of the kings</li>
//               <li style={{ background: theme.ui }}>the name of the wind</li>
//               <li style={{ background: theme.ui }}>the final empire</li>
//             </ul>
//           </div>
//         );
//       }}
//     </ThemeContext.Consumer>
//   );
// };

