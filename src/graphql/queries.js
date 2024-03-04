/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPublicacion = /* GraphQL */ `
  query GetPublicacion($id: ID!) {
    getPublicacion(id: $id) {
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
export const listPublicacions = /* GraphQL */ `
  query ListPublicacions(
    $filter: ModelPublicacionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicacions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        publicacion
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPublicacions = /* GraphQL */ `
  query SyncPublicacions(
    $filter: ModelPublicacionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublicacions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        publicacion
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRol = /* GraphQL */ `
  query GetRol($id: ID!) {
    getRol(id: $id) {
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
export const listRols = /* GraphQL */ `
  query ListRols(
    $filter: ModelRolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRols(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tipo_rol
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRols = /* GraphQL */ `
  query SyncRols(
    $filter: ModelRolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRols(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tipo_rol
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getReciboDonaciones = /* GraphQL */ `
  query GetReciboDonaciones($id: ID!) {
    getReciboDonaciones(id: $id) {
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
export const listReciboDonaciones = /* GraphQL */ `
  query ListReciboDonaciones(
    $filter: ModelReciboDonacionesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReciboDonaciones(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usuariosID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncReciboDonaciones = /* GraphQL */ `
  query SyncReciboDonaciones(
    $filter: ModelReciboDonacionesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReciboDonaciones(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usuariosID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const reciboDonacionesByUsuariosID = /* GraphQL */ `
  query ReciboDonacionesByUsuariosID(
    $usuariosID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReciboDonacionesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reciboDonacionesByUsuariosID(
      usuariosID: $usuariosID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usuariosID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUsuarios = /* GraphQL */ `
  query GetUsuarios($id: ID!) {
    getUsuarios(id: $id) {
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
export const listUsuarios = /* GraphQL */ `
  query ListUsuarios(
    $filter: ModelUsuariosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsuarios = /* GraphQL */ `
  query SyncUsuarios(
    $filter: ModelUsuariosFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsuarios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
