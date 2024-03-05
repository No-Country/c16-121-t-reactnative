import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

export const createPublication = async (todoDetails) => {
  // const fechaActual = new Date();
  // const fechaFormateada = fechaActual.toISOString().split('T')[0]

  // const todoDetails = {
  //   publicacion: "PRUEBA 2",
  //   fecha: fechaFormateada,
  //   habilitada: true,
  //   cantidadRequeridos: 10,
  //   usuariosID: "1451d1eb-c933-4af4-bb1b-98428e70a8ce",
  //   tipoSangre: "+ O",
  // };
  try {
    await API.graphql({
      query: mutations.createPublicacion,
      variables: { input: todoDetails },
    });
    console.log("se supone que entro en createPub");
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async () => {
  try {
    const post = await API.graphql({
      query: queries.getPublicacion,
      variables: {
        id: "8a6d3d3a-f5b7-4d08-8056-98f3f6dd896c",
      },
    });
    console.log("Todos los usuarios:", post.data);
  } catch (e) {
    console.log(e);
  }
};
// Definir la consulta getUserByEmail
const getUserByEmailQuery = /* GraphQL */ `
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      id
      name 
      email
    }
  }
`;

// // Función para obtener los datos del usuario por correo electrónico
// export const getUserByEmail = async (email) => {
//   try { 
//     const response = await API.graphql({
//       // graphqlOperation(getUserByEmailQuery, { email })
//       query: getUserByEmailQuery,
//       // variables: {
//       //   email: "marpotichkin@gmail.com"
//       // }
//     }
//       );
//       console.log("mail" , response.data.getUserByEmail)

//     return response.data.getUserByEmail;
//   } catch (error) {
//     console.error('Error al obtener usuario por correo electrónico:', error);
//     return null;
//   }
// };
// Función para obtener los datos del usuario por correo electrónico

export const fetchUserByEmail = async (email) => {
  try {
    const response = await API.graphql(
      graphqlOperation( getUserByEmailQuery,{ email})
    );
    console.log()
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuario por correo electrónico:', error);
    return null;
  }
};