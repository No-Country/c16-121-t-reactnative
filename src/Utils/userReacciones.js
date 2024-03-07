import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { createReacciones } from "../graphql/mutations";
import {reaccionesByPublicacionID,reaccionesByUsuariosID  } from "../graphql/queries"


export const createReacion = async (infoReaccion) => {
    try {
      await API.graphql({
        query: mutations.createReacciones,
        variables: { input: infoReaccion },
      });
      console.log("crear reaccion");
    } catch (error) {
      console.error(error);
    }
  };


  
// const userID = 'd180bec8-b200-4347-a702-a5069bfa13e1';
// const publicationID = 'e1da2fb9-b0fa-4995-af5a-2b6d3b124782';
// export const getReactionsByUserID = async (userID) => {
//     try {
//       const response = await API.graphql(graphqlOperation(reaccionesByUsuariosID, { usuariosID: userID }));
//       return response.data.reaccionesByUsuariosID.items;
//     } catch (error) {
//       console.error('Error al obtener reacciones por ID de usuario:', error);
//       return [];
//     }
//   };

// export const getReactionsByPublicationID = async (publicationID) => {
//     try {
//       const response = await API.graphql(graphqlOperation(reaccionesByPublicacionID, { publicacionID: publicationID }));
//       return response.data.reaccionesByPublicacionID.items;
//     } catch (error) {
//       console.error('Error al obtener reacciones por ID de publicación:', error);
//       return [];
//     }
//   };


    
//     getReactionsByUserID(userID)
//       .then(reactions => {
//         console.log('Reacciones del usuario:', reactions);
//       })
//       .catch(error => {
//         console.error('Error al obtener reacciones del usuario:', error);
//       });
    
//     getReactionsByPublicationID(publicationID)
//       .then(reactions => {
//         console.log('Reacciones de la publicación:', reactions);
//       })
//       .catch(error => {
//         console.error('Error al obtener reacciones de la publicación:', error);
//       });

// export const createPublication = async (todoDetails) => {
//     try {
//       await API.graphql({
//         query: mutations.createPublicacion,
//         variables: { input: todoDetails },
//       });
//       console.log("se supone que entro en createPub");
//     } catch (error) {
//       console.error(error);
//     }
//   };
