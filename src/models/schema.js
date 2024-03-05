export const schema = {
    "models": {
        "Reacciones": {
            "name": "Reacciones",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "usuariosID": {
                    "name": "usuariosID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "publicacionID": {
                    "name": "publicacionID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Reacciones",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsuarios",
                        "fields": [
                            "usuariosID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPublicacion",
                        "fields": [
                            "publicacionID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Publicacion": {
            "name": "Publicacion",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "publicacion": {
                    "name": "publicacion",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fecha": {
                    "name": "fecha",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "habilitada": {
                    "name": "habilitada",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "cantidadRequeridos": {
                    "name": "cantidadRequeridos",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "usuariosID": {
                    "name": "usuariosID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Reacciones": {
                    "name": "Reacciones",
                    "isArray": true,
                    "type": {
                        "model": "Reacciones"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "publicacionID"
                        ]
                    }
                },
                "tipoSangre": {
                    "name": "tipoSangre",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Publicacions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsuarios",
                        "fields": [
                            "usuariosID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Rol": {
            "name": "Rol",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "tipo_rol": {
                    "name": "tipo_rol",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Rols",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ReciboDonaciones": {
            "name": "ReciboDonaciones",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "usuariosID": {
                    "name": "usuariosID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "fecha": {
                    "name": "fecha",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ReciboDonaciones",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsuarios",
                        "fields": [
                            "usuariosID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Usuarios": {
            "name": "Usuarios",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nombre": {
                    "name": "nombre",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "apellido": {
                    "name": "apellido",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "imagen": {
                    "name": "imagen",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pais": {
                    "name": "pais",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "provincia": {
                    "name": "provincia",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "localidad": {
                    "name": "localidad",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id_ubicacion": {
                    "name": "id_ubicacion",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "sub": {
                    "name": "sub",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "notificaciones": {
                    "name": "notificaciones",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "publicaciones": {
                    "name": "publicaciones",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dni": {
                    "name": "dni",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "backup": {
                    "name": "backup",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "bloqueado": {
                    "name": "bloqueado",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "telefono": {
                    "name": "telefono",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "ReciboDonaciones": {
                    "name": "ReciboDonaciones",
                    "isArray": true,
                    "type": {
                        "model": "ReciboDonaciones"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "usuariosID"
                        ]
                    }
                },
                "Rol": {
                    "name": "Rol",
                    "isArray": false,
                    "type": {
                        "model": "Rol"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "usuariosRolId"
                        ]
                    }
                },
                "password": {
                    "name": "password",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "edad": {
                    "name": "edad",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "habilitado": {
                    "name": "habilitado",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Publicacions": {
                    "name": "Publicacions",
                    "isArray": true,
                    "type": {
                        "model": "Publicacion"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "usuariosID"
                        ]
                    }
                },
                "Reacciones": {
                    "name": "Reacciones",
                    "isArray": true,
                    "type": {
                        "model": "Reacciones"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "usuariosID"
                        ]
                    }
                },
                "tipoSangre": {
                    "name": "tipoSangre",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "usuariosRolId": {
                    "name": "usuariosRolId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Usuarios",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "7c23c30008096dd5baa261873d2766d2"
};