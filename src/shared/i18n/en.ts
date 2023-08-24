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
          success: "Marca borrada con éxito",
          error: "Error al borrar marca",
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
