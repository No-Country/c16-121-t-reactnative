// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rol, ReciboDonaciones, Usuarios } = initSchema(schema);

export {
  Rol,
  ReciboDonaciones,
  Usuarios
};