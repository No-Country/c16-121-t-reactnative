// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reacciones, Publicacion, Rol, ReciboDonaciones, Usuarios } = initSchema(schema);

export {
  Reacciones,
  Publicacion,
  Rol,
  ReciboDonaciones,
  Usuarios
};