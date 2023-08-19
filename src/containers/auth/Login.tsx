import { LoadingButton, RHFTextField, RhfForm, Typography } from "yaya/core";
import { en } from "yaya/shared";
import { useLoginForm } from "./useLogin";

export const AuthPage = () => {
  const { isLoading, methods, onSubmit } = useLoginForm();

  return (
    <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      <div className="mt-0 w-full max-w-full flex-col items-center md:mt-[10vh] md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <Typography variant="h1" className="mb-2.5 lg:text-4xl">
          {en.auth.login.title}
        </Typography>
        <Typography variant="muted" className="mb-9 ml-1 text-base">
          {en.auth.login.sub_title}
        </Typography>

        <RhfForm methods={methods} onSubmit={onSubmit}>
          <RHFTextField
            label={en.auth.login.fields.email.label}
            placeholder={en.auth.login.fields.email.placeholder}
            name="email"
            type="text"
          />

          <RHFTextField
            label={en.auth.login.fields.password.label}
            placeholder={en.auth.login.fields.password.placeholder}
            type="password"
            name="password"
          />

          <LoadingButton loading={isLoading} type="submit" size="fullWidth">
            {en.auth.login.cta}
          </LoadingButton>
        </RhfForm>
      </div>
    </div>
  );
};
