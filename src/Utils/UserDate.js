//MODIFICAR CAMPOS EN DB
import { API } from "aws-amplify";
import * as mutations  from '../graphql/mutations';
import * as queries from '../graphql/queries';

export const createUser = async (email,name,middlename,sub) => {

  const todoDetails = {
      nombre: name,
      apellido: middlename,
      imagen: "agregar imagen",
      pais: "ingresar pais",
      provincia: "Provincia",
      localidad: "Localidad",
      id_ubicacion: "id_de_ubicacion",
      sub: sub,
      notificaciones: "notificaciones_valor",
      publicaciones: "publicaciones_valor",
      dni: 12345678, // Recuerda que "dni" es un Int
      backup: ["ruta/de/backup1", "ruta/de/backup2"], // Recuerda que "backup" es una lista de String
      bloqueado: false,
      password: "contraseña",
      email: email,
      edad: 30 // Recuerda que "edad" es un Int
  };
  
  

  try{
    await API.graphql({
      query: mutations.createUsuarios,
      variables: { input: todoDetails }
    });
    }catch(error){console.error(error)}
  };

export const updateUserDate = async (userID, newDate) => {
  console.log(userID)
  console.log(newDate)

  const todoDetails = {
    id: userID,
    //  _version: 'current_version', // add the "_version" field if your AppSync API has conflict detection (required for DataStore) enabled
    nombre: newDate
  };

  try{
    await API.graphql({
      query: mutations.updateUsuarios,
      variables: { input: todoDetails }
    });
    }catch(error){console.error(error)}
  };

export const getAllUsers = async () => {
  try {
    const allUsers = await API.graphql({ query: queries.listUsuarios });
    console.log('Todos los usuarios:', allUsers.data.listUsuarios.items);
    return allUsers.data.listUsuarios.items;
  } catch (error) {
    console.error('Error al obtener todos los usuarios:', error);
    return [];
  }
};
  
  export const updateUserAge = async (userID, age) => {
    try {
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: userID,
            age: newAge,
          },
        },
      });
      console.log("user age updated");
    } catch (e) {
      console.log("error updating user age");
    }
  };
  
  //MODIFICAR LOCALIDAD
  export const updateUserLocation = async (userID, location) => {
    try {
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: userID,
            location: location,
          },
        },
      });
      console.log("user location updated");
    } catch (e) {
      console.log("error updating user location");
    }
  };