import React from "react";

const Darck = {
  background: "black",
  color: "white",
};

const Ligth = {
    background: "white",
    color: "black",
};

const DarckContext = React.createContext();

export const DarckProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(Ligth);

  const toggleTheme = () => {
    setTheme(theme === Ligth ? Darck : Ligth);
  };

  return (
    <DarckContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarckContext.Provider>
  );
};

export { DarckContext, Darck, Ligth };

// import React from 'react';

// const Darck = {

//         background: 'black',
//         color:'white'

// }

// const Ligth ={
//         background: 'white',
//         color: 'black'

// }

// const DarckContext = React.createContext();

//  export const DarckProvider = ({children}) => {

//     const [theme, setTheme] = React.useState(Ligth)

//     const toggleTheme = () => {

//         setTheme( theme == Ligth ? Darck : Ligth )

//     }

//   return (
//     <DarckContext
//     value = {(
//         theme,
//         toggleTheme,
//         setTheme
//         )} >
//             {children}
//     </DarckContext>
//   )
// }

// // export const useDarckContext = () => React.useContext(DarckContext);
// export {DarckContext}
