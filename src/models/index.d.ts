import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerReacciones = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reacciones, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuariosID: string;
  readonly publicacionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReacciones = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reacciones, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuariosID: string;
  readonly publicacionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reacciones = LazyLoading extends LazyLoadingDisabled ? EagerReacciones : LazyReacciones

export declare const Reacciones: (new (init: ModelInit<Reacciones>) => Reacciones) & {
  copyOf(source: Reacciones, mutator: (draft: MutableModel<Reacciones>) => MutableModel<Reacciones> | void): Reacciones;
}

type EagerPublicacion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Publicacion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly publicacion?: string | null;
  readonly fecha?: string | null;
  readonly habilitada?: boolean | null;
  readonly cantidadRequeridos?: number | null;
  readonly usuariosID: string;
  readonly Reacciones?: (Reacciones | null)[] | null;
  readonly tipoSangre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPublicacion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Publicacion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly publicacion?: string | null;
  readonly fecha?: string | null;
  readonly habilitada?: boolean | null;
  readonly cantidadRequeridos?: number | null;
  readonly usuariosID: string;
  readonly Reacciones: AsyncCollection<Reacciones>;
  readonly tipoSangre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Publicacion = LazyLoading extends LazyLoadingDisabled ? EagerPublicacion : LazyPublicacion

export declare const Publicacion: (new (init: ModelInit<Publicacion>) => Publicacion) & {
  copyOf(source: Publicacion, mutator: (draft: MutableModel<Publicacion>) => MutableModel<Publicacion> | void): Publicacion;
}

type EagerRol = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rol, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tipo_rol?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRol = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rol, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tipo_rol?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Rol = LazyLoading extends LazyLoadingDisabled ? EagerRol : LazyRol

export declare const Rol: (new (init: ModelInit<Rol>) => Rol) & {
  copyOf(source: Rol, mutator: (draft: MutableModel<Rol>) => MutableModel<Rol> | void): Rol;
}

type EagerReciboDonaciones = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReciboDonaciones, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuariosID: string;
  readonly fecha?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReciboDonaciones = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReciboDonaciones, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuariosID: string;
  readonly fecha?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReciboDonaciones = LazyLoading extends LazyLoadingDisabled ? EagerReciboDonaciones : LazyReciboDonaciones

export declare const ReciboDonaciones: (new (init: ModelInit<ReciboDonaciones>) => ReciboDonaciones) & {
  copyOf(source: ReciboDonaciones, mutator: (draft: MutableModel<ReciboDonaciones>) => MutableModel<ReciboDonaciones> | void): ReciboDonaciones;
}

type EagerUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellido: string;
  readonly imagen?: string | null;
  readonly pais?: string | null;
  readonly provincia?: string | null;
  readonly localidad?: string | null;
  readonly id_ubicacion?: string | null;
  readonly sub: string;
  readonly notificaciones?: string | null;
  readonly publicaciones?: string | null;
  readonly dni?: number | null;
  readonly backup?: (string | null)[] | null;
  readonly bloqueado?: boolean | null;
  readonly telefono?: string | null;
  readonly ReciboDonaciones?: (ReciboDonaciones | null)[] | null;
  readonly Rol?: Rol | null;
  readonly password?: string | null;
  readonly email?: string | null;
  readonly edad?: number | null;
  readonly habilitado?: boolean | null;
  readonly Publicacions?: (Publicacion | null)[] | null;
  readonly Reacciones?: (Reacciones | null)[] | null;
  readonly tipoSangre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usuariosRolId?: string | null;
}

type LazyUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellido: string;
  readonly imagen?: string | null;
  readonly pais?: string | null;
  readonly provincia?: string | null;
  readonly localidad?: string | null;
  readonly id_ubicacion?: string | null;
  readonly sub: string;
  readonly notificaciones?: string | null;
  readonly publicaciones?: string | null;
  readonly dni?: number | null;
  readonly backup?: (string | null)[] | null;
  readonly bloqueado?: boolean | null;
  readonly telefono?: string | null;
  readonly ReciboDonaciones: AsyncCollection<ReciboDonaciones>;
  readonly Rol: AsyncItem<Rol | undefined>;
  readonly password?: string | null;
  readonly email?: string | null;
  readonly edad?: number | null;
  readonly habilitado?: boolean | null;
  readonly Publicacions: AsyncCollection<Publicacion>;
  readonly Reacciones: AsyncCollection<Reacciones>;
  readonly tipoSangre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usuariosRolId?: string | null;
}

export declare type Usuarios = LazyLoading extends LazyLoadingDisabled ? EagerUsuarios : LazyUsuarios

export declare const Usuarios: (new (init: ModelInit<Usuarios>) => Usuarios) & {
  copyOf(source: Usuarios, mutator: (draft: MutableModel<Usuarios>) => MutableModel<Usuarios> | void): Usuarios;
}