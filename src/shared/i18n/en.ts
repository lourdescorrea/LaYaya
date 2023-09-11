export const en = {
  common: {
    app_name: "La Yaya",
    loading: "Cargando...",
    wait: "Por favor, espere...",
    logout: "Cierre de sesión",
    close: "Cerrar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    save: "Guardar",
    delete: "Eliminar",
    edit: "Editar",
    create: "Crear",
    search: "Buscar",
    actions: "Acciones",
    success: "Éxito",
    error: "Error",
    empty: "No se encontraron resultados",
  },
  auth: {
    login: {
      cta: "Iniciar sesión",
      title: "Inicia sesión en La Yaya",
      sub_title:
        "Introduzca su correo electrónico y contraseña para iniciar sesión!",
      messages: {
        success: "Inicio de sesión correcto",
        errors: {
          default: "Oops!Algo salió mal!",
          CredentialsSignin: "Credenciales inválidas",
        },
      },
      fields: {
        email: {
          label: "Email",
          placeholder: "Introduzca su dirección de correo electrónico",
        },
        password: {
          label: "Contraseña",
          placeholder: "Introducir contraseña",
        },
      },
    },
  },
  footer: {
    copy_right: "© {year} Forrajería La Yaya. Derechos reservados.",
    copy_right_temp: (year: number) =>
      `© ${year} Forrajería La Yaya! Derechos reservados.`,
  },
  pagination: {
    legend: "Mostrar página {currentPage} de {totalCount}",
    legend_temp: (currentPage: number, totalCount: number) =>
      `Pagina ${currentPage} de ${totalCount}`,
  },
  navigation: {
    brands: "Marcas",
    products: "Productos",
  },
  admin: {
    brand: {
      create: {
        title: "Crear una marca",
        sub_title: "Introduzca su marca",
        messages: {
          success: "Marca creada con éxito",
          error: "Error al crear marca",
        },
      },
      edit: {
        title: "Editar marca",
        sub_title: "Introduzca su marca para editar!",
        messages: {
          success: "Marca editada con éxito",
          error: "Error al editar marca",
        },
      },
      delete: {
        title: "¿Seguro que quieres borrar esta marca?",
        messages: {
          success: "Marca eliminada con éxito",
          error: "Error al eliminar marca",
        },
      },
    },
    product: {
      create: {
        title: "Crear un producto",
        sub_title: "Introduzca su producto",
        messages: {
          success: "producto creado con éxito",
          error: "Error al crear producto",
        },
      },
      edit: {
        title: "Editar producto",
        sub_title: "Introduzca su producto para editar!",
        messages: {
          success: "Producto editado con éxito",
          error: "Error al editar producto",
        },
      },
      delete: {
        title: "¿Seguro que quieres borrar este producto?",
        messages: {
          success: "Producto eliminado con éxito",
          error: "Error al eliminar producto",
        },
      },
    },
    sale: {
      create: {
        title: "Crear una venta",
        sub_title: "Introduzca una venta",
        messages: {
          success: "Venta creada con éxito",
          error: "Error al crear la venta ",
        },
      },
      edit: {
        title: "Editar venta ",
        sub_title: "Introduzca la venta a editar!",
        messages: {
          success: "Venta editada con éxito",
          error: "Error al editar la venta ",
        },
      },
      delete: {
        title: "¿Seguro que quieres borrar esta venta?",
        messages: {
          success: "Venta eliminada con éxito",
          error: "Error al eliminar la venta",
        },
      },
    },
  },
  boundaries: {
    error: {
      title: "Oops! Algo ha salido mal!",
      cta: "Inténtalo de nuevo",
    },
  },
};
