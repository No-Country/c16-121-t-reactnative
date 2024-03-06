import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import MyBottom from "./MyBottom";
import MyInput from "./MyInput";
import { AuthContext } from "../Context/AuthContext";
import { Colors } from "../Constants/Colors";
import DateInput from "./DateInput";
import { Feather } from "@expo/vector-icons";

const SingUp = () => {
  const {
    setAuthState,
    setEmail,
    setPassword,
    setName,
    setMiddleName,
    setLastName,
    setDate,
    setLocation,
    handleSignUp,
    navigation,
  } = React.useContext(AuthContext);

  // Validar el correo electrónico si cumple con el formato
  const [correo, setCorreo] = React.useState("");
  const [correoError, setCorreoError] = React.useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo.trim())) {
      setCorreoError("Ingresa un correo electrónico válido");
    } else {
      setCorreoError("");
    }
  };

  // Validar que la contraseña cumpla con 6 caracteres mínimo y posea una mayúscula
  const [contraseña, setContraseña] = React.useState("");
  const [contraseñaError, setContraseñaError] = React.useState("");

  const validateContraseña = () => {
    if (contraseña.length < 6 || !/[A-Z]/.test(contraseña)) {
      setContraseñaError("Debe tener al menos 6 caracteres y una mayúscula");
    } else {
      setContraseñaError("");
    }
  };

  // Validar que las contraseñas sean iguales
  const [confirmarContraseña, setConfirmarContraseña] = React.useState("");
  const [confirmarContraseñaError, setConfirmarContraseñaError] = React.useState("");

  const validateConfirmarContraseña = () => {
    if (contraseña !== confirmarContraseña) {
      setConfirmarContraseñaError("Las contraseñas no son iguales");
    } else {
      setConfirmarContraseñaError("");
    }
  };

  // Mostrar las contraseñas o no
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const validateData = () => {
    if (correoError !== "" || contraseñaError !== "" || confirmarContraseñaError !== "") {
      return false;
    }
    return true;
  };

  return (
    <SafeAreaView>
      <View >
        <Text style={styles.text}>Nombre</Text>
        <MyInput
          label={"Sofía"}
          onChangeText={(text) => setName(text.trim())}
        />

        <Text style={styles.text}>Apellido</Text>
        <MyInput
          label={"Quiroz"}
          onChangeText={(text) => setMiddleName(text.trim())}
        />

        <Text style={styles.text}>Correo Electrónico</Text>
        <MyInput
          label={"example@gmail.com"}
          onChangeText={(text) => {
            setEmail(text.trim());
            setCorreo(text.trim());
          }}
          onBlur={validateEmail}
        />
        <Text style={styles.error}>{correoError}</Text>

        <Text style={styles.text}>Contraseña</Text>
        <View style={styles.viewPassword}>
          <MyInput
            label={"Contraseña"}
            onChangeText={(text) => {
              setContraseña(text);
              {
                setPassword(text);
              }
            }}
            onBlur={validateContraseña}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={toggleShowPassword}
            style={styles.eyeIcon}
            activeOpacity={0.8}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="#323646"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.error}>{contraseñaError}</Text>

        <Text style={styles.text}>Confirmar contraseña</Text>
        <View style={styles.viewPassword}>
          <MyInput
            label={"Contraseña"}
            onChangeText={(text) => {
              setConfirmarContraseña(text);
            }}
            onBlur={validateConfirmarContraseña}
            secureTextEntry={!showPassword2}
          />
          <TouchableOpacity
            onPress={toggleShowPassword2}
            style={styles.eyeIcon}
            activeOpacity={0.8}
          >
            <Feather
              name={showPassword2 ? "eye" : "eye-off"}
              size={24}
              color="#323646"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.error}>{confirmarContraseñaError}</Text>

        <MyBottom
          title="Registrarse"
          onPress={async () => {
            if (validateData()) {
              let response= await handleSignUp();
              response && navigation.navigate("Verification",{correo:correo});
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginLeft: "3%",
  },
  error: {
    fontSize: 10,
    color: "#F3305F",
    marginLeft: "3%",
    marginBottom: 6,
    marginTop: -8,
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: Colors.bottonLogin,
    marginTop: "6%",
    marginBottom: "2%",
  },
  viewPassword: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: -40,
  },
  background:{
    backgroundColor:'red',
  }
});

export default SingUp;
