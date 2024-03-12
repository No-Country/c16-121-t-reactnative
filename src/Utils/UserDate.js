//MODIFICAR CAMPOS EN DB
import { API, graphqlOperation,Auth } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import { getUserByEmail } from "../graphql/queries";


export const createUser = async (email, name, middlename, sub) => {

  const todoDetails = {
    nombre: name,
    apellido: middlename,
    sub: sub,
    bloqueado: false,
    email: email,
    habilitado:true
  };



  try {
    await API.graphql({
      query: mutations.createUsuarios,
      variables: { input: todoDetails }
    });
  } catch (error) { console.error(error) }
};

export const updateUserProfile = async ({id,nombre,apellido,edad,email,telefono,tipoSangre,dni,localidad,provincia,pais}) => {

  try {

    const currentUser = await Auth.currentAuthenticatedUser();
    const idUser=currentUser.attributes.sub
    const resp=await API.graphql({
      query: queries.getUserBySubQuery,
      variables: {sub: idUser}
    });

    const _version = resp.data.listUsuarios.items[0]._version;


    const todoDetails = {
      id,
      nombre,
      apellido,
      edad:Number(edad),
      email,
      telefono,
      tipoSangre,
      dni:Number(dni),
      localidad,
      provincia,
      pais,
      _version,
    };
  

    await API.graphql({
      query: mutations.updateUsuarios,
      variables: {input:todoDetails},
    });
  } catch (error) { console.error(error) }
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