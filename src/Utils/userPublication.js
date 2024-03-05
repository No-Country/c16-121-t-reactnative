import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import {
  getUserBySubQuery,
  getAllPublicationsTodayQuery,
  getAllPublicationsQuery,
} from "../graphql/queries";

export const createPublication = async (todoDetails) => {
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
      // variables: {
      //   filter: {
      //     fecha: { between: [fechaLimiteFormateada, fechaActual] },
      //   },
      //   limit: 10,
      // },
      filter: {
            fecha: { between: [fechaLimiteFormateada, fechaActual] },
          }
      // variables: {
      //   startDate: fechaLimiteFormateada,
      //   endDate: fechaFormateada,
      // },
    });
    console.log("PUBLICACIONES:", post.data.listPublicacions.items.length);
  } catch (e) {
    console.log(e);
  }
};
