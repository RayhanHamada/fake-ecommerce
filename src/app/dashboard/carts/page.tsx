"use client";

import CartTable from "@/features/carts/components/CartTable";
import { Container, Typography } from "@mui/material";
import { useState } from "react";

type Props = Readonly<{}>;

export default function Page(props: Props) {
  const [selectedCartId, setSelectedCartId] = useState<string | null>(null);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom color="black">
        Carts
      </Typography>
      <CartTable onClickDetail={setSelectedCartId} />
    </Container>
  );
}
