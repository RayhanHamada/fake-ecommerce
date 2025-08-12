"use client";

import { Container } from "@mui/material";
import LoginForm from "@/features/auth/components/LoginForm";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <Container maxWidth="xs" sx={{ py: { xs: 4, md: 8 } }}>
        <LoginForm />
      </Container>
    </Fragment>
  );
}
