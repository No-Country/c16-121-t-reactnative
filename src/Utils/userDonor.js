import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

//Cambio si está habilitado o no según respuestas del formulario
export const updateUsuarioHabilitado = async (userId, newHabilitadoValue) => {

  const newDates = {
    id: userId,
    habilitado: !newHabilitadoValue,
  }

  try {
    const response = await API.graphql({
      query: mutations.updateUsuarios, 
      variables: {
        input:newDates
      }
  });
    console.log("Update:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//Creo recibo de donador
export const createRecibo = async (reciboDetalles) => {
  try {
    await API.graphql({
      query: mutations.createReciboDonaciones, 
      variables: { input: reciboDetalles },
    });

  } catch (error) {
    console.error(error);
  }
};

export const getRecibosPorUsuario = async (userId) => {
  try {
    const recibosUsuario =  await API.graphql({
      query: queries.reciboDonacionesByUsuariosID,
      variables: {
        usuariosID: userId,
      },
    });

    const recibos = recibosUsuario.data.reciboDonacionesByUsuariosID.items

    const sortedRecibos = recibos.sort((a, b) => {
      return new Date(b.fecha) - new Date(a.fecha);
    });

    return sortedRecibos;

  } catch (e) {
    console.log(e);
  }
};

export const getReciboReciente = async (userId) => {
  try{
    const recibos = await API.graphql({
      query: queries.reciboDonacionesByUsuariosID,
      variables: {
        usuariosID: userId,
      },
    })
    return recibosUsuario.data.reciboDonacionesByUsuariosID.items[0]
  } catch(e) {
    console.log(e);
    return null;
  }
}