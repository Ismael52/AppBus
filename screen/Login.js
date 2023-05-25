import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const  LoginScreen=({navigation})=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("la aplicacion guarda los datos en el estado", email,password)
    navigation.navigate("BuscarPasaje")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>WAJU</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Correo electrónico"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Contraseña"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText}>¿No tienes una cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#e6e6e6",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "#fb5b5a",
    fontSize: 15,
    marginTop: 20,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  signupText: {
    color: "#003f5c",
    marginTop: 20,
    fontSize: 15,
  },
});
export default LoginScreen;
