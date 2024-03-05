// utils/auth.js
import * as Linking from 'expo-linking';
import { Auth,  } from 'aws-amplify';


const baseURL = 'expo://192.168.1.103:8081/';
export const signInWithFacebook = async () => {
  try {
    const response = await Auth.federatedSignIn({ provider: 'Facebook' });
    console.log('Inicio de sesión exitoso con Facebook');
    Linking.openURL(baseURL + 'Home');
  } catch (error) {
    console.error('Error al iniciar sesión con Facebook', error);
  } finally {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('Usuario autenticado:', user);
      


    } catch (error) {
      console.error('Error al obtener el usuario autenticado', error);
    }
  }
};
