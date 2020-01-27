const browserWindow = window || {};
const browserWindowEnv = browserWindow['__env'] || {};

export const constants = {
    config: {
        adverstismentApi: 'template/cms-spaces?&ad=0',
        login: 'api/auth/login',
        editarUsuario: 'api/auth/usuarios',
        cargarRolesUsuario: 'api/auth/usuarios/create',
        crearUsuario: 'api/auth/usuarios/registrar',
        listarUsuarios: 'api/auth/usuarios',
        mostrarUsuario: 'api/auth/usuarios/edit',
        actualizarUsuario: 'api/auth/usuarios/actualizar',
        actualizarRolesUsuario:'api/auth/usuariosRoles/actualizar',
        actualizarPermisosUsuario:'api/auth/usuariosPermisos/actualizar',

        listarRoles: 'api/auth/roles',
        cargarPermisos: 'api/auth/roles/create',
        crearRol: 'api/auth/roles/registrar',
        mostrarRol:'api/auth/roles/edit',
        actualizarRol: 'api/auth/roles/actualizar',

        listarVendedores: 'api/auth/vendedores',
        cargarVendedor: 'api/auth/vendedores/create',
        crearVendedor: 'api/auth/vendedores/registrar',
        mostrarVendedor: 'api/auth/vendedores/edit',
        actualizarVendedor: 'api/auth/vendedores/actualizar',

        listarSedes: 'api/auth/sedes',
        cargarSede: 'api/auth/sedes/create',
        crearSede: 'api/auth/sedes/registrar',
        mostrarSede: 'api/auth/sedes/edit',
        actualizarSede: 'api/auth/sedes/actualizar',

        listarCategorias: 'api/auth/categorias',
        cargarCategoria: 'api/auth/categorias/create',
        crearCategoria: 'api/auth/categorias/registrar',
        mostrarCategoria: 'api/auth/categorias/edit',
        actualizarCategoria: 'api/auth/categorias/actualizar',

        listarTipoAutorizaciones: 'api/auth/tipoAutorizaciones',
        cargarTipoAutorizacion: 'api/auth/tipoAutorizaciones/create',
        crearTipoAutorizacion: 'api/auth/tipoAutorizaciones/registrar',
        mostrarTipoAutorizacion: 'api/auth/tipoAutorizaciones/edit',
        actualizarTipoAutorizacion: 'api/auth/tipoAutorizaciones/actualizar',

        listarClasificacionPagos: 'api/auth/clasificacionPagos',
        cargarClasificacionPago: 'api/auth/clasificacionPagos/create',
        crearClasificacionPago: 'api/auth/clasificacionPagos/registrar',
        mostrarClasificacionPago: 'api/auth/clasificacionPagos/edit',
        actualizarClasificacionPago: 'api/auth/clasificacionPagos/actualizar',

        






    }
};
