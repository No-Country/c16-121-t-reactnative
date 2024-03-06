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
      query: mutations.updateHabilitado, 
      variables: {
        input: newDates 
      }
    });
    console.log("Updated user data:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating user habilitado:', error);
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
    console.log("se crea recibo");
  } catch (error) {
    console.error(error);
  }
};