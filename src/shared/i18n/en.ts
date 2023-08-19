export const en = {
  common: {
    app_name: "TODO_APP_NAME",
    loading: "Loading...",
    wait: "Please wait...",
    logout: "Logout",
    close: "Close",
    cancel: "Cancel",
    confirm: "Confirm",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    create: "Create",
    search: "Search",
    actions: "Actions",
    success: "Success",
    error: "Error",
    empty: "There's nothing here",
  },
  auth: {
    login: {
      cta: "Sign in",
      title: "Sign in to TODO_APP_NAME",
      sub_title: "Enter your email and password to sign in!",
      messages: {
        success: "Logged in successfully",
        errors: {
          default: "Oops! Something went wrong!",
          CredentialsSignin: "Invalid credentials",
        },
      },
      fields: {
        email: {
          label: "Email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          placeholder: "Enter your password",
        },
      },
    },
  },
  footer: {
    copy_right: "© {year} TODO_APP_NAME. All Rights Reserved.",
    copy_right_temp: (year: number) =>
      `© ${year} TODO_APP_NAME. All Rights Reserved.`,
  },
  pagination: {
    legend: "Showing page {currentPage} of {totalCount}",
    legend_temp: (currentPage: number, totalCount: number) =>
      `Showing page ${currentPage} of ${totalCount}`,
  },
  navigation: {
    example: "Example",
    secrets: "Secrets",
    projects: "Projects",
  },
  admin: {
    secrets: {
      create: {
        title: "Create secret",
        sub_title: "Enter your secret details to create!",
        messages: {
          success: "Secret created successfully",
          error: "Error creating secret",
        },
      },
      edit: {
        title: "Edit secret",
        sub_title: "Enter your secret details to edit!",
        messages: {
          success: "Secret edited successfully",
          error: "Error editing secret",
        },
      },
      delete: {
        title: "Are you sure you want to delete this secret?",
        messages: {
          success: "Secret deleted successfully",
          error: "Error deleting secret",
        },
      },
      fields: {
        app: {
          label: "App",
          placeholder: "Select an app",
        },
        name: {
          label: "Name",
          placeholder: "Enter secret name",
        },
        value: {
          label: "Value",
          placeholder: "Enter secret value",
        },
        auto: {
          label: "Auto generate secret value",
          placeholder: "Auto generate secret value",
        },
      },
    },
    projects: {
      create: {
        title: "Create project",
        sub_title: "Enter your project details to create!",
        messages: {
          success: "Project created successfully",
          retry: "Do you want to retry?",
          error: "Error creating project",
        },
      },
      fields: {
        name: {
          label: "Name",
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
      title: "Oops! Something went wrong!",
      cta: "Try again",
    },
  },
};
