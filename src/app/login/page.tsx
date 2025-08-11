"use client";

import Link from "next/link";
import {
  useForm,
  SubmitHandler,
  useController,
  useWatch,
} from "react-hook-form";
import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Toolbar,
} from "@mui/material";

type Props = Readonly<{}>;

type FormValues = {
  username: string;
  password: string;
};

export default function Page(_: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // TODO: wire up real auth; for now, just log values
    console.log(data);
  };

  return (
    <Box sx={{ minHeight: "100dvh", bgcolor: "#f5f5f5" }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(0deg, #fe6433, #f53d2d)",
        }}
      >
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            fontWeight={700}
            sx={{ color: "#fff" }}
          >
            Fake E-Commerce
          </Typography>
        </Toolbar>
      </AppBar>

      <div></div>
      <Container maxWidth="xs" sx={{ py: { xs: 4, md: 8 } }}>
        <Paper elevation={2} sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: 2 }}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Log In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2.25}>
              <TextField
                label="Username"
                placeholder="Enter your username"
                autoComplete="username"
                autoFocus
                fullWidth
                {...register("username", { required: "Username is required" })}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
              <TextField
                label="Password"
                placeholder="Enter your password"
                type="password"
                autoComplete="current-password"
                fullWidth
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <Button
                type="submit"
                size="large"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
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

              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  New to Fake E-Commerce?
                </Typography>
                <Button
                  component={Link}
                  href="/register"
                  variant="text"
                  size="small"
                  sx={{
                    color: "#ee4d2d",
                    textTransform: "none",
                    fontWeight: 600,
                    minWidth: 0,
                    p: 0,
                  }}
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
