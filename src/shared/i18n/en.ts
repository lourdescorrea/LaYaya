export const en = {
  common: {
    app_name: "La Yaya",
    loading: "Cargando...",
    wait: "Por favor, espere...",
    logout: "Cierre de sesión",
    close: "Cerrado",
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
      `Showing page ${currentPage} of ${totalCount}`,
  },
  navigation: {
    example: "Control de stock",
    secrets: "Secretos",
    projects: "Proyectos",
  },
  admin: {
    secrets: {
      create: {
        title: "Crear secreto",
        sub_title: "Introduzca sus datos secretos para crear!",
        messages: {
          success: "Secreto creado con éxito",
          error: "Error al crear el secreto",
        },
      },
      edit: {
        title: "Editar secreto",
        sub_title: "Introduce tus datos secretos para editar!",
        messages: {
          success: "Secreto editado con éxito",
          error: "Error al editar el secreto",
        },
      },
      delete: {
        title: "¿Seguro que quieres borrar este secreto?",
        messages: {
          success: "Secreto borrado con éxito",
          error: "Error al borrar el secreto",
        },
      },
      fields: {
        app: {
          label: "App",
          placeholder: "Seleccione una app",
        },
        name: {
          label: "Nombre",
          placeholder: "Enter secret name",
        },
        value: {
          label: "Valor",
          placeholder: "Introduzca el valor secreto",
        },
        auto: {
          label: "Generación automática del valor secreto",
          placeholder: "Generación automática del valor secreto",
        },
      },
    },
    projects: {
      create: {
        title: "Crear proyecto",
        sub_title: "Introduzca los detalles de su proyecto para crear!",
        messages: {
          success: "Proyecto creado con éxito",
          retry: "¿Desea volver a intentarlo?",
          error: "Error al crear el proyecto",
        },
      },
      fields: {
        name: {
          label: "Nombre",
          placeholder: "Enter project repo name",
        },
        domain: {
          label: "Domain",
          placeholder: "example.com",
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
