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
        button: {
          title: "Volver al inicio",
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
    sales: "Ventas",
    reports: "Reportes",
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
      cta: "Creación de productos ",
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
      fields: {
        stockDuarte: {
          label: "Stock Duarte",
          placeholder: "Stock",
        },
        stockColon: {
          label: "Stock Colon",
          placeholder: "Stock",
        },
        stockDeposito: {
          label: "Stock Deposito",
          placeholder: "Stock",
        },
        price: {
          label: "Precio del producto",
          placeholder: "Precio $$",
        },
        weight: {
          label: "Kilos del producto",
          placeholder: "Kilos",
        },
        name: {
          label: "Nombre del producto",
          placeholder: "Nombre",
        },
        brand: {
          placeholder: "Marca",
        },
        codeBar: {
          label: "Código de barra",
          placeholder: "Codigo de barra",
        },
      },
    },
    sale: {
      cta: "Creación de ventas ",
      create: {
        title: "Crear una venta",
        sub_title: "Introduzca una venta",
        messages: {
          success: "Venta creada con éxito",
          error: "Error al crear la venta ",
        },
      },
      view: {
        title: "Detalle de la venta ",
        sub_title: "Ventas!",
        messages: {
          success: "Venta editada con éxito",
          error: "Error al editar la venta ",
        },
      },
      cancel: {
        title: "¿Seguro que quieres cancelar esta venta?",
        messages: {
          success: "Venta cancelada con éxito",
          error: "Error al cancelar la venta",
        },
      },
      fields: {
        totals: {
          title: "Total de la venta:$",
        },
        quantity: {
          title: "Cantidad:",
        },
        methods: {
          title: "Pago:",
        },
        state: {
          title: "Estado de la venta:",
        },
        products: {
          title: "Productos:",
        },
        shop: {
          title: "Local:",
        },
        paymentMethod: {
          title: "Elige un metodo de pago",
        },
        password: {
          label: "Contraseña",
          placeholder: "Introducir contraseña",
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
