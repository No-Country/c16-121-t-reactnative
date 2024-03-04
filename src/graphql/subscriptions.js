/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePublicacion = /* GraphQL */ `
  subscription OnCreatePublicacion(
    $filter: ModelSubscriptionPublicacionFilterInput
  ) {
    onCreatePublicacion(filter: $filter) {
      id
      publicacion
      Usuarios {
        id
        nombre
        apellido
        imagen
        pais
        provincia
        localidad
        id_ubicacion
        sub
        notificaciones
        publicaciones
        dni
        backup
        bloqueado
        telefono
        password
        email
        edad
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usuariosRolId
        owner
        __typename
      }
      fecha
      habilitada
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      publicacionUsuariosId
      __typename
    }
  }
`;
export const onUpdatePublicacion = /* GraphQL */ `
  subscription OnUpdatePublicacion(
    $filter: ModelSubscriptionPublicacionFilterInput
  ) {
    onUpdatePublicacion(filter: $filter) {
      id
      publicacion
      Usuarios {
        id
        nombre
        apellido
        imagen
        pais
        provincia
        localidad
        id_ubicacion
        sub
        notificaciones
        publicaciones
        dni
        backup
        bloqueado
        telefono
        password
        email
        edad
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usuariosRolId
        owner
        __typename
      }
      fecha
      habilitada
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      publicacionUsuariosId
      __typename
    }
  }
`;
export const onDeletePublicacion = /* GraphQL */ `
  subscription OnDeletePublicacion(
    $filter: ModelSubscriptionPublicacionFilterInput
  ) {
    onDeletePublicacion(filter: $filter) {
      id
      publicacion
      Usuarios {
        id
        nombre
        apellido
        imagen
        pais
        provincia
        localidad
        id_ubicacion
        sub
        notificaciones
        publicaciones
        dni
        backup
        bloqueado
        telefono
        password
        email
        edad
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usuariosRolId
        owner
        __typename
      }
      fecha
      habilitada
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      publicacionUsuariosId
      __typename
    }
  }
`;
export const onCreateRol = /* GraphQL */ `
  subscription OnCreateRol($filter: ModelSubscriptionRolFilterInput) {
    onCreateRol(filter: $filter) {
      id
      tipo_rol
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRol = /* GraphQL */ `
  subscription OnUpdateRol($filter: ModelSubscriptionRolFilterInput) {
    onUpdateRol(filter: $filter) {
      id
      tipo_rol
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRol = /* GraphQL */ `
  subscription OnDeleteRol($filter: ModelSubscriptionRolFilterInput) {
    onDeleteRol(filter: $filter) {
      id
      tipo_rol
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateReciboDonaciones = /* GraphQL */ `
  subscription OnCreateReciboDonaciones(
    $filter: ModelSubscriptionReciboDonacionesFilterInput
  ) {
    onCreateReciboDonaciones(filter: $filter) {
      id
      usuariosID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateReciboDonaciones = /* GraphQL */ `
  subscription OnUpdateReciboDonaciones(
    $filter: ModelSubscriptionReciboDonacionesFilterInput
  ) {
    onUpdateReciboDonaciones(filter: $filter) {
      id
      usuariosID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteReciboDonaciones = /* GraphQL */ `
  subscription OnDeleteReciboDonaciones(
    $filter: ModelSubscriptionReciboDonacionesFilterInput
  ) {
    onDeleteReciboDonaciones(filter: $filter) {
      id
      usuariosID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUsuarios = /* GraphQL */ `
  subscription OnCreateUsuarios(
    $filter: ModelSubscriptionUsuariosFilterInput
    $owner: String
  ) {
    onCreateUsuarios(filter: $filter, owner: $owner) {
      id
      nombre
      apellido
      imagen
      pais
      provincia
      localidad
      id_ubicacion
      sub
      notificaciones
      publicaciones
      dni
      backup
      bloqueado
      telefono
      ReciboDonaciones {
        nextToken
        startedAt
        __typename
      }
      Rol {
        id
        tipo_rol
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      password
      email
      edad
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      usuariosRolId
      owner
      __typename
    }
  }
`;
export const onUpdateUsuarios = /* GraphQL */ `
  subscription OnUpdateUsuarios(
    $filter: ModelSubscriptionUsuariosFilterInput
    $owner: String
  ) {
    onUpdateUsuarios(filter: $filter, owner: $owner) {
      id
      nombre
      apellido
      imagen
      pais
      provincia
      localidad
      id_ubicacion
      sub
      notificaciones
      publicaciones
      dni
      backup
      bloqueado
      telefono
      ReciboDonaciones {
        nextToken
        startedAt
        __typename
      }
      Rol {
        id
        tipo_rol
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      password
      email
      edad
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      usuariosRolId
      owner
      __typename
    }
  }
`;
export const onDeleteUsuarios = /* GraphQL */ `
  subscription OnDeleteUsuarios(
    $filter: ModelSubscriptionUsuariosFilterInput
    $owner: String
  ) {
    onDeleteUsuarios(filter: $filter, owner: $owner) {
      id
      nombre
      apellido
      imagen
      pais
      provincia
      localidad
      id_ubicacion
      sub
      notificaciones
      publicaciones
      dni
      backup
      bloqueado
      telefono
      ReciboDonaciones {
        nextToken
        startedAt
        __typename
      }
      Rol {
        id
        tipo_rol
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      password
      email
      edad
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      usuariosRolId
      owner
      __typename
    }
  }
`;
