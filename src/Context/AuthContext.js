//creo un contexto global en mi aplicacion (seria como un redux en react js) para poder hacer las funciones y
//pasarse a todos mis componentes sin tener que volver a escribir codigo

import * as React from "react";
import { Auth ,  DataStore, API, graphqlOperationp } from "aws-amplify";
import { Usuarios } from '../models';

const AuthContext = React.createContext({
  authState: "signIn",
  setAuthState: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  verificationCode: "",
  setVerificationCode: () => {},
  isLoading: false,
  hadleSignIn: () => {},
  hadleSignUp: async () => {},
  handleChangePassword: () => {},
  handleForgotPassword: () => {},
  handleForgotPasswordSubmit: () => {},
  name: "",
  setName: () => {},
  firstName: "",
  middlename: "",
  setMiddleName: () => {},
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  date: "",
  setDate: () => {},
  location: "",
  setLocation: () => {},
});

const { Provider } = AuthContext;

function AuthProvider({ children, navigation }) {
  //inicializo mis funciones con useState ya que me permite cambiar el estado de ellas
  const [authState, setAuthState] = React.useState(null);
  const [dbUser, setDbUser] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [middlename, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [verificationCode, setVerificationCode] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const sub = authState?.attributes?.sub;

  React.useEffect(()=> {
    Auth.currentAuthenticatedUser({bypassCache: true}).then(setAuthState);
  }, [])

console.log(authState, "user");


React.useEffect(()=>{

  DataStore.query(Usuarios, (user) => user.sub.eq(sub)).then((users) => setDbUser(users[0]));}, [sub])

  async function handleSignIn() {
    //se puede validar que lo ingresado sea un email o contraseña correcta
    if (!email || !password) {
      alert("Por favor ingresa email y contraseña");
      return;
    }
    try {
      setIsLoading(true);
      const user = await Auth.signIn({
        username: email,
        password,
      });
      alert("inicio sesion exitoso ")
      console.log("user signed In");
      console.log(user)
      setAuthState("signedIn");
      //hay que guardar este user en BD
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
      console.log(e);
    }
  }
  
  const handleSignUp = async () => {
    if (!email || !password) {
      alert("Por favor ingresa email y contraseña");
      return;
    }

    console.log("name, middle",  name,middlename, email )
    try {
      setIsLoading(true);
      const signUpResponse = await Auth.signUp({
        username: email.trim(),
        password,
        attributes: {
          email: email,
          name: name,
          middle_name: middlename,
        },
      });

      // await API.graphql(graphqlOperationp(createUsuarios, {
      //   input: {
      //     email: email,
      //     name: name,
      //     middle_name: middleName,
      //     sub: signUpResponse.userSub
      //   }
      // }));
      // await updateUserInDatabase(userData);

      console.log("Usuario registrado exitosamente:", signUpResponse);
      setVerificationCode(verificationCode); // Almacena el código de verificación en el estado
      console.log("verificationCode: ", verificationCode);
      setAuthState("confirmSignUp");
      setIsLoading(false);

      // Redirigir a la pantalla de verificación
      //navigation.navigate("Verification");
    } catch (err) {
      setIsLoading(false);
      alert(err.message);

      console.log(e);
    }
  }

 const handleConfirmSignUp = async (verificationCode, email) => { // Ajustamos los parámetros aquí
    if (!verificationCode || !email) {
      console.log("Este es el user: ", email);
        setIsLoading(false);
        Alert.alert("Error", "Por favor ingresa el código de verificación");
        return;
    }
    try {
        setIsLoading(true);
        await Auth.confirmSignUp(email, verificationCode);
        const currentUser = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(currentUser, {
            "userConfirmed": "true",
        });
        console.log("Confirmado. Ahora puedes iniciar sesión");
        setAuthState("signIn");
    } catch (error) {
        console.error("Error: ", error);
    } finally {
        setIsLoading(false);
    }
};

const handleChangePassword = async (currentUser, newPassword, confirmNewPassword) => {
  try {
    currentUser = await Auth.currentAuthenticatedUser();
    await Auth.completeNewPassword(currentUser, newPassword, confirmNewPassword);
    console.log("Contraseña cambiada exitosamente");
    Alert.alert("Exito", "Contraseña cambiada exitosamente");
  } catch (error) {
    console.error("Error al cambiar la contraseña:", error);
    Alert.alert("Error", error.message);
  }
};


const handleForgotPassword = async (email) => {
  try {
    await Auth.forgotPassword(email);
    console.log(
      "Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña"
    );
    // Agrega aquí la navegación a la pantalla de confirmación de restablecimiento de contraseña si es necesario
  } catch (error) {
    console.log("este es el email: ", email);
    console.error(
      "Error al enviar correo electrónico de restablecimiento de contraseña:",
      error
    );
    // Manejar el error aquí
  }
};

const handleForgotPasswordSubmit = async (email, code, newPassword) => {
  try {
    await Auth.forgotPasswordSubmit(email, code, newPassword);
    console.log("Contraseña restablecida exitosamente");
    // Agrega aquí la navegación a la pantalla de inicio de sesión o una pantalla de éxito si es necesario
  } catch (error) {
    console.error("Error al restablecer la contraseña:", error);
    // Manejar el error aquí
  }
};



  return (
    <Provider
      value={{
        authState,
        setAuthState,
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        handleSignUp,
        handleConfirmSignUp,
        handleChangePassword,
        handleForgotPassword,
        handleForgotPasswordSubmit,
        verificationCode,
        setVerificationCode,
        isLoading,
        dbUser,
        setDbUser,
        sub,
        setMiddleName,
        setName,
        navigation, // Paso navigation como parte del contexto
      }}
    >
      {children}
    </Provider>
  );
}
export {AuthContext,AuthProvider};