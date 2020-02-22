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
        mostrarSedesDelUsuario: 'api/auth/usuarios/mostrarSedesDelUsuario',
        traerSedes: 'api/auth/usuarios/traerSedes',

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
        categoriasSinFiltros: 'api/auth/categorias/categoriasSinFiltros',

        listarTipoAutorizaciones: 'api/auth/tipoAutorizaciones',
        cargarTipoAutorizacion: 'api/auth/tipoAutorizaciones/create',
        crearTipoAutorizacion: 'api/auth/tipoAutorizaciones/registrar',
        mostrarTipoAutorizacion: 'api/auth/tipoAutorizaciones/edit',
        actualizarTipoAutorizacion: 'api/auth/tipoAutorizaciones/actualizar',
        verTipoAutorizacion: 'api/auth/tipoAutorizaciones/mostrarTipoAutorizacion',

        listarClasificacionPagos: 'api/auth/clasificacionPagos',
        cargarClasificacionPago: 'api/auth/clasificacionPagos/create',
        crearClasificacionPago: 'api/auth/clasificacionPagos/registrar',
        mostrarClasificacionPago: 'api/auth/clasificacionPagos/edit',
        actualizarClasificacionPago: 'api/auth/clasificacionPagos/actualizar',

        listarRegistroPagos: 'api/auth/registroPagos',
        cargarRegistroPago: 'api/auth/registroPagos/create',
        crearRegistroPago: 'api/auth/registroPagos/registrar',
        mostrarRegistroPago: 'api/auth/registroPagos/edit',
        actualizarRegistroPago: 'api/auth/registroPagos/actualizar',

        listarAutorizaciones: 'api/auth/autorizaciones',
        cargarAutorizacion: 'api/auth/autorizaciones/create',
        crearAutorizacion: 'api/auth/autorizaciones/registrar',
        mostrarAutorizacion: 'api/auth/autorizaciones/edit',
        actualizarAutorizacion: 'api/auth/autorizaciones/actualizar',

        listarPagos: 'api/auth/pagos',
        cargarPago: 'api/auth/pagos/create',
        crearPago: 'api/auth/pagos/registrar',
        mostrarPago: 'api/auth/pagos/edit',
        actualizarPago: 'api/auth/pagos/actualizar',

        listarArticulos: 'api/auth/articulos',
        cargarArticulo: 'api/auth/articulos/create',
        crearArticulo: 'api/auth/articulos/registrar',
        mostrarArticulo: 'api/auth/articulos/edit',
        actualizarArticulo: 'api/auth/articulos/actualizar',

        listarClientes: 'api/auth/clientes',
        cargarCliente: 'api/auth/clientes/create',
        crearCliente: 'api/auth/clientes/registrar',
        mostrarCliente: 'api/auth/clientes/edit',
        actualizarCliente: 'api/auth/clientes/actualizar',
        mostrarEstados: 'api/auth/clientes/cargarEstadoCliente',
        registrarEstadoCliente: 'api/auth/clientes/cambioEstado',
         mostrarNovedades: 'api/auth/clientes/cargarNovedadCliente',
        registrarNovedadCliente: 'api/auth/clientes/asignacionNovedad',

        autocompleteCliente: 'api/auth/autocomplete/search',
        autocompleteVendedor: 'api/auth/autocomplete/search',

        listarOrdenServicios: 'api/auth/ordenservicios',
        cargarOrdenServicio: 'api/auth/ordenservicios/create',
        crearOrdenServicio: 'api/auth/ordenservicios/registrar',
        mostrarOrdenServicio: 'api/auth/ordenservicios/edit',
        actualizarOrdenServicio: 'api/auth/ordenservicios/actualizar',
        listarArticulosPorGenero: 'api/auth/ordenservicios/listarArticulos',


    }
};
