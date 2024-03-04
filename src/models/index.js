// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Publicacion, Rol, ReciboDonaciones, Usuarios } = initSchema(schema);

export {
  Publicacion,
  Rol,
  ReciboDonaciones,
  Usuarios
};