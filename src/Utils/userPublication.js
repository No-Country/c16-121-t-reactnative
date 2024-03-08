import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import {
  getUserBySubQuery,
  getAllPublicationsTodayQuery,
  getAllPublicationsQuery,
} from "../graphql/queries";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";

export const createPublication = async (todoDetails) => {
  try {
    await API.graphql({
      query: mutations.createPublicacion,
      variables: { input: todoDetails },
    });
    console.log("se supone que entro en createPub");
    // alert("Publicación creada con éxito");
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Éxito",
      textBody: "Publicación creada con éxito",
      button: "Cerrar",
    });
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

//Obtengo los datos del usuario según sub
export const getUser = async (sub) => {
  try {
    const userInfo = await API.graphql(
      graphqlOperation(getUserBySubQuery, { sub })
    );

    console.log("info completa", userInfo.data.listUsuarios.items[0].id);

    // Verificar si la consulta devuelve datos y si hay elementos en la lista de usuarios
    if (
      userInfo.data &&
      userInfo.data.listUsuarios &&
      userInfo.data.listUsuarios.items.length > 0
    ) {
      // Devolver el primer usuario encontrado
      return userInfo.data.listUsuarios.items[0].id;
    } else {
      // Si no se encuentra ningún usuario con el "sub" proporcionado, devolver null
      return null;
    }
  } catch (error) {
    console.error("Error al obtener usuario por sub:", error);
    return null; // Manejar el error y devolver null
  }
};

//Obtengo las publicaciones publicadas hoy
export const getAllPublicationsToday = async (fecha) => {
  console.log("fecha", fecha, typeof fecha);
  try {
    const response = await API.graphql(
      graphqlOperation(getAllPublicationsTodayQuery, { fecha })
    );
    return response.data.listPublicacions.items;
  } catch (error) {
    console.error("Error fetching all publications:", error);
    return null;
  }
};

//Obtengo las publicaciones publicadas dentro de los 7 días
export const getAllPublications = async (startDate, endDate) => {
  console.log("start", startDate, typeof startDate);
  console.log("end", endDate, typeof endDate);
  try {
    const response = await API.graphql(
      graphqlOperation(getAllPublicationsQuery, { startDate, endDate })
    );
    return response.data.listPublicacions.items;
  } catch (error) {
    console.error("Error fetching all publications:", error);
    return null; 
  }
};

//obtengo todas las publicaciones
export const getPublications = async () => {
  //fecha actual
  const fechaActual = new Date();
  const fechaFormateada = fechaActual.toISOString().split("T")[0];

  // Obtener la fecha de una semana anterior
  const fechaLimite = new Date(fechaActual);
  fechaLimite.setDate(fechaActual.getDate() - 7);
  // const fechaLimiteFormateada = fechaLimite;
  const fechaLimiteFormateada = fechaLimite.toISOString().split("T")[0];

  try {
    const post = await API.graphql({
      query: queries.listPublicacions,
      variables: {
        filter: {
          fecha: { between: [fechaLimiteFormateada, fechaActual] }, 
          _deleted: { ne: true },
        },
        limit: 100,
      },
    });

    const publicationsWithUser = await Promise.all(post.data.listPublicacions.items.map(async (publication) => {
      const usuarioID = publication.usuariosID;
      const userData = await getUserData(usuarioID, ['nombre', 'telefono']);
      return { ...publication, usuario: userData };
    }));

    const publicationsSorted = publicationsWithUser.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
 
    return publicationsSorted;

  } catch (e) {
    console.log(e);
  }
};

// Función para obtener los datos del usuario
const getUserData = async (userId) => {
  try {
    const userData = await API.graphql({
      query: queries.getDatosUsuarios, 
      variables: { id: userId },
    });
    return userData.data.getUsuarios; 
  } catch (error) {
    console.error('Error obteniendo datos del usuario:', error);
    throw error;
  }
};

// Creo la reacción 
export const createReaccion = async (infoReaccion) => {
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

//Elimino la reacción
export const deleteReaccion = async (itemId) => {
  try {
    const reaccion = await API.graphql({
      query: queries.reaccionesByPublicacionID,
      variables: {
        publicacionID: itemId,
      },
    });
    console.log("dato reacción", reaccion.data.reaccionesByPublicacionID.items[0].id)
    const idReaccion = reaccion.data.reaccionesByPublicacionID.items[0].id
    await API.graphql({
      query: mutations.deleteReacciones,
      variables: { 
        input: {id: idReaccion},
      }
    });
    console.log("ELIMINADO");
  } catch (error) {
    console.error(error);
  }
};

//cantidad de reacciones por publicación
export const cantidadReaccionesPorPublicacion = async (itemId) => {
  try {
    const reaccion = await API.graphql({
      query: queries.reaccionesByPublicacionID,
      variables: {
        publicacionID: itemId,
      },
    });

    const cantReacciones = reaccion.data.reaccionesByPublicacionID.items;
     return cantReacciones.length
  } catch (error) {
    console.error( error);
    throw error;
  }
};

//cantidad de publicaciones por usuario
export const cantidadPublicacionesPorUsuario = async (userId) => {
  try {
    const publicacion = await API.graphql({
      query: queries.publicacionsByUsuariosID,
      variables: {
        usuariosID: userId,
      },
    });

    const cantPublicaciones = publicacion.data.publicacionsByUsuariosID.items;
    return cantPublicaciones.length
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//reacción de una publicación + datos de usuario que reacciona
export const datosReaccion = async (reaccionId) => {
  try {
    const reaccionData = await API.graphql({
      query: queries.getReacciones,
      variables: { id: reaccionId }
    });
    const publicacionData = await API.graphql({
      query: queries.getPublicacion,
      variables: { id: reaccionData.data.getReacciones.publicacionID }
    });
    const usuarioData = await API.graphql({
      query: queries.getUsuarios,
      variables: { id: reaccionData.data.getReacciones.usuariosID }
    });

    return {
      reaccion: reaccionData.data.getReacciones,
      publicacion: publicacionData.data.getPublicacion,
      usuario: usuarioData.data.getUsuarios
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//publicaciones reaccionadas por el usuario
export const publicacionesPorUsuario = async (userId) => {
  try {
    const publicacionesUsuario =  await API.graphql({
      query: queries.publicacionsByUsuariosID,
      variables: {
        usuariosID: userId,
      },
    });
    
    const publicaciones = publicacionesUsuario.data.publicacionsByUsuariosID.items
    
    const publicationsSorted = publicaciones.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))    

    return publicationsSorted;

  } catch (e) {
    console.log(e);
  }
};