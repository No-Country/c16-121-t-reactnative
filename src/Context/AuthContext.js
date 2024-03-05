//creo un contexto global en mi aplicacion (seria como un redux en react js) para poder hacer las funciones y
//pasarse a todos mis componentes sin tener que volver a escribir codigo

import * as React from "react";
import { Auth, DataStore, API, graphqlOperation } from "aws-amplify";
import { Usuarios } from '../models';
import { ALERT_TYPE, Dialog, Toast } from 'react-native-alert-notification';
import { createUser } from "../Utils/UserDate";
import * as queries from '../graphql/queries';
//import "@azure/core-asynciterator-polyfill";

const AuthContext = React.createContext({
  dbUserInfo: {},
  setDbUserInfo: () => { },
  authState: "signIn",
  setAuthState: () => { },
  email: "",
  setEmail: () => { },
  password: "",
  setPassword: () => { },
  verificationCode: "",
  setVerificationCode: () => { },
  isLoading: false,
  hadleSignIn: () => { },
  hadleSignUp: async () => { },
  handleChangePassword: () => { },
  handleForgotPassword: () => { },
  handleForgotPasswordSubmit: () => { },
  name: "",
  setName: () => { },
  firstName: "",
  middlename: "",
  setMiddleName: () => { },
  setFirstName: () => { },
  lastName: "",
  setLastName: () => { },
  date: "",
  setDate: () => { },
  location: "",
  setLocation: () => { },
  userSub: "",
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
  const [userSub, setUserSub] = React.useState("");
  const [dbUserInfo, setDbUserInfo] = React.useState({});


  React.useEffect(() => {

    Auth.currentAuthenticatedUser()
      .then((user) => {
        setAuthState("signedIn");
        setUserSub(user.attributes.sub);
      })
      .catch(() => {
        setAuthState("signIn");
        setUserSub("");
      });

    // Buscar el usuario por su ID
    const readInfoUser = async () => {

      if (userSub) {
        const oneTodo = await API.graphql({
          query: queries.getUserBySubQuery,
          variables: { sub: userSub }
        });
        let userdb = oneTodo.data.listUsuarios.items[0]
        console.log(userdb)
        setDbUserInfo(userdb)
      }
    }
    readInfoUser()

  }, [handleSignIn, userSub])

  // console.log(authState, "user aquiii");



  // React.useEffect(()=>{

  //   DataStore.query(Usuarios, (user) => user.sub.eq(sub))
  //     .then((users) => setDbUser(users[0]))
  //     .catch((error) => console.error('Error fetching user data: ', error));
  //   }, [sub])

  const handleSignIn = async () => {
    //se puede validar que lo ingresado sea un email o contraseña correcta
    if (!email || !password) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: 'Por favor ingresa email y contraseña',
        button: 'Cerrar',
      })
      return;

    }
    try {
      setIsLoading(true);
      const user = await Auth.signIn({
        username: email,
        password,

      });
      const username = user.attributes.name;
      setName(username)
      console.log('USEEER', username)
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: `Bienvenido ${username[0].toUpperCase() + username.slice(1)}...`,
        button: 'Cerrar',
      })
      console.log("user signed In");
      //console.log(user)
      setAuthState("signedIn");

    } catch (e) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: e.message,
        button: 'Cerrar',
      })
      setIsLoading(false);
      console.log(e);

    }
  }

  const handleSignUp = async () => {

    try {
      if (!email || !password) {
        throw Error('Por favor completar los campos vacios');
      }
      console.log('NOMBRE', name)

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

      let sub=signUpResponse.userSub

      await createUser(email,name,middlename,sub)

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

      return true

    } catch (err) {
      setIsLoading(false);
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: err.message,
        button: 'Cerrar',
      })
      return false
      console.log(err);
    }
  }

  const handleConfirmSignUp = async (verificationCode, email) => {
    if (!verificationCode || !email) {
      console.log("Este es el user: ", email);
      setIsLoading(false);
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: "Por favor ingresa el código de verificación",
        button: 'Cerrar',
      })
      return;
    }
    try {
      setIsLoading(true);
      await Auth.confirmSignUp(email, verificationCode);
      console.log("Confirmado. Ahora puedes iniciar sesión");
      setAuthState("signIn");
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Código de verificación correcto',
        button: 'Cerrar',
      })
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error: ", error);
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: error.message,
        button: 'Cerrar',
      })
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
    console.log("entro a forgotPassword")
    try {
      await Auth.forgotPassword(email);
      console.log(
        "Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña"
      );
      // navigation.navigate("VerificationPasswordChange");
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
      navigation.navigate("Login");
      // Agrega aquí la navegación a la pantalla de inicio de sesión o una pantalla de éxito si es necesario
    } catch (error) {
      console.error("Error al restablecer la contraseña:", error);
      // Manejar el error aquí
    }
  };

  return (
    <Provider
      value={{
        dbUserInfo,
        setDbUserInfo,
        userSub,
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
export { AuthContext, AuthProvider };