"use client";

import { useLoginForm } from "@/features/auth/hooks/use-login-form";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";

import { Fragment } from "react";

type Props = {};

const LoginForm: React.FC<Props> = function (props) {
  const {
    form: {
      register: loginFormRegister,
      formState: {
        errors: loginFormErrors,
        isSubmitting: isLoginFormSubmitting,
      },
    },
    onSubmit: loginFormOnSubmit,
  } = useLoginForm();

  return (
    <Fragment>
      <Paper
        elevation={2}
        sx={{
          p: { xs: 2.5, sm: 4 },
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={2}>
          Log In
        </Typography>
        <form onSubmit={loginFormOnSubmit} noValidate>
          <Stack spacing={2.25}>
            <TextField
              label="Username"
              placeholder="Enter your username"
              autoComplete="username"
              size="small"
              autoFocus
              fullWidth
              {...loginFormRegister("username")}
              error={!!loginFormErrors.username}
              helperText={loginFormErrors.username?.message}
              disabled={isLoginFormSubmitting}
            />
            <TextField
              label="Password"
              size="small"
              placeholder="Enter your password"
              type="password"
              autoComplete="current-password"
              fullWidth
              {...loginFormRegister("password")}
              error={!!loginFormErrors.password}
              helperText={loginFormErrors.password?.message}
              disabled={isLoginFormSubmitting}
            />
            <Button
              type="submit"
              size="large"
              fullWidth
              variant="contained"
              disabled={isLoginFormSubmitting}
              sx={{
                bgcolor: "#ee4d2d",
                textTransform: "none",
                fontWeight: 700,
                "&:hover": { bgcolor: "#d73211" },
                boxShadow: "none",
              }}
            >
              Log In
            </Button>
          </Stack>
        </form>
      </Paper>
    </Fragment>
  );
};

export default LoginForm;
