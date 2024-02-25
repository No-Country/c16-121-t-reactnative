//creo un contexto global en mi aplicacion (seria como un redux en react js) para poder hacer las funciones y
//pasarse a todos mis componentes sin tener que volver a escribir codigo

import * as React from "react";
import { Auth ,  DataStore, API, graphqlOperationp } from "aws-amplify";
import { Usuarios } from '../models';

const AuthContext = React.createContext({
  authState: "SignIn",
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
  name: "",
  setName: ()=>{},
  firstName: "",
  middlename: "",
  setMiddleName: ()=>{},
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
  const [authSTate, setAuthState] = React.useState(null);
  const [dbUser, setDbUser] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [middlename, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [verificationCode, setVerificationCode] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const sub = authSTate?.attributes?.sub;

  React.useEffect(()=> {
    Auth.currentAuthenticatedUser({bypassCache: true}).then(setAuthState);
  }, [])

console.log(authSTate, "user");


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
      setAuthState("confirmSignUp");
      setIsLoading(false);

      // Redirigir a la pantalla de verificación
      navigation.navigate("Verification");
    } catch (err) {
      setIsLoading(false);
      alert(err.message);

      console.log(e);
    }
  }

  async function handleConfirmSignUp() {
    if (!email || !password) {
      alert("Por favor ingresa email y contraseña");
      return;
    }
    try {
      setIsLoading(true);
      await Auth.confirmSignUp(email, verificationCode);
      alert("Confirmado", "Ya puedes iniciar sesión");
      setAuthState("signIn");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err.message);
      console.log(err);
    }
  }
  return (
    <Provider
      value={{
        authSTate,
        setAuthState,
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        handleSignUp,
        handleConfirmSignUp,
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