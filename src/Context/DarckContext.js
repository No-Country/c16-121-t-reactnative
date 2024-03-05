import React from "react";

const Darck = {
  
 
    background: "black",
    colorText: "white",
    inputDarck:'white',
    borderDarck: 'white',
    height: '%100',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    margin:565,


  
};

const Ligth = {
    background: "#F3305F",
    color: "black",
    height: 210,
    borderBottomRightRadius: 900,
    borderBottomLeftRadius: 900,
    
    
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


