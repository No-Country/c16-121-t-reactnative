/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReacciones = /* GraphQL */ `
  mutation CreateReacciones(
    $input: CreateReaccionesInput!
    $condition: ModelReaccionesConditionInput
  ) {
    createReacciones(input: $input, condition: $condition) {
      id
      usuariosID
      publicacionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateReacciones = /* GraphQL */ `
  mutation UpdateReacciones(
    $input: UpdateReaccionesInput!
    $condition: ModelReaccionesConditionInput
  ) {
    updateReacciones(input: $input, condition: $condition) {
      id
      usuariosID
      publicacionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteReacciones = /* GraphQL */ `
  mutation DeleteReacciones(
    $input: DeleteReaccionesInput!
    $condition: ModelReaccionesConditionInput
  ) {
    deleteReacciones(input: $input, condition: $condition) {
      id
      usuariosID
      publicacionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPublicacion = /* GraphQL */ `
  mutation CreatePublicacion(
    $input: CreatePublicacionInput!
    $condition: ModelPublicacionConditionInput
  ) {
    createPublicacion(input: $input, condition: $condition) {
      id
      publicacion
      fecha
      habilitada
      cantidadRequeridos
      usuariosID
      Reacciones {
        nextToken
        startedAt
        __typename
      }
      tipoSangre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePublicacion = /* GraphQL */ `
  mutation UpdatePublicacion(
    $input: UpdatePublicacionInput!
    $condition: ModelPublicacionConditionInput
  ) {
    updatePublicacion(input: $input, condition: $condition) {
      id
      publicacion
      fecha
      habilitada
      cantidadRequeridos
      usuariosID
      Reacciones {
        nextToken
        startedAt
        __typename
      }
      tipoSangre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePublicacion = /* GraphQL */ `
  mutation DeletePublicacion(
    $input: DeletePublicacionInput!
    $condition: ModelPublicacionConditionInput
  ) {
    deletePublicacion(input: $input, condition: $condition) {
      id
      publicacion
      fecha
      habilitada
      cantidadRequeridos
      usuariosID
      Reacciones {
        nextToken
        startedAt
        __typename
      }
      tipoSangre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createRol = /* GraphQL */ `
  mutation CreateRol(
    $input: CreateRolInput!
    $condition: ModelRolConditionInput
  ) {
    createRol(input: $input, condition: $condition) {
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
export const updateRol = /* GraphQL */ `
  mutation UpdateRol(
    $input: UpdateRolInput!
    $condition: ModelRolConditionInput
  ) {
    updateRol(input: $input, condition: $condition) {
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
export const deleteRol = /* GraphQL */ `
  mutation DeleteRol(
    $input: DeleteRolInput!
    $condition: ModelRolConditionInput
  ) {
    deleteRol(input: $input, condition: $condition) {
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
export const createReciboDonaciones = /* GraphQL */ `
  mutation CreateReciboDonaciones(
    $input: CreateReciboDonacionesInput!
    $condition: ModelReciboDonacionesConditionInput
  ) {
    createReciboDonaciones(input: $input, condition: $condition) {
      id
      usuariosID
      fecha
      centroDonacion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateReciboDonaciones = /* GraphQL */ `
  mutation UpdateReciboDonaciones(
    $input: UpdateReciboDonacionesInput!
    $condition: ModelReciboDonacionesConditionInput
  ) {
    updateReciboDonaciones(input: $input, condition: $condition) {
      id
      usuariosID
      fecha
      centroDonacion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteReciboDonaciones = /* GraphQL */ `
  mutation DeleteReciboDonaciones(
    $input: DeleteReciboDonacionesInput!
    $condition: ModelReciboDonacionesConditionInput
  ) {
    deleteReciboDonaciones(input: $input, condition: $condition) {
      id
      usuariosID
      fecha
      centroDonacion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createUsuarios = /* GraphQL */ `
  mutation CreateUsuarios(
    $input: CreateUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    createUsuarios(input: $input, condition: $condition) {
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
      habilitado
      Publicacions {
        nextToken
        startedAt
        __typename
      }
      Reacciones {
        nextToken
        startedAt
        __typename
      }
      tipoSangre
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
export const updateUsuarios = /* GraphQL */ `
  mutation UpdateUsuarios(
    $input: UpdateUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    updateUsuarios(input: $input, condition: $condition) {
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
      habilitado
      Publicacions {
        nextToken
        startedAt
        __typename
      }
      Reacciones {
        nextToken
        startedAt
        __typename
      }
      tipoSangre
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
export const deleteUsuarios = /* GraphQL */ `
  mutation DeleteUsuarios(
    $input: DeleteUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    deleteUsuarios(input: $input, condition: $condition) {
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
      habilitado
      Publicacions {
        nextToken
        startedAt
        __typename
      }
      Reacciones {
        nextToken
        startedAt
        __typename
      }
      tipoSangre
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

export const disableUser = /* GraphQL */ `
  mutation DisableUser($id: ID!, $habilitado: Boolean) {
    updateUsuarios(input: { id: $id, habilitado: $habilitado }) {
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
        habilitado
        Publicacions {
          nextToken
          startedAt
          __typename
        }
        Reacciones {
          nextToken
          startedAt
          __typename
        }
        tipoSangre
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

  export const updateHabilitado = /* GraphQL */ `
  mutation UpdateUsuarios(
    $input: UpdateUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    updateUsuarios(input: $input, condition: $condition) {
      id
      habilitado
    }
  }
`;