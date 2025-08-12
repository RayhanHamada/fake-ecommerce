"use client";

import CartTable from "@/features/carts/components/CartTable";
import { Container, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import CartDetailModal from "@/features/carts/components/CartDetailModal";

export default function Page() {
  const [selectedCartId, setSelectedCartId] = useState<number | null>(null);

  return (
    <Fragment>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom color="black">
          Carts
        </Typography>
        <CartTable onClickDetail={setSelectedCartId} />
      </Container>
      <CartDetailModal
        selectedID={selectedCartId ?? 0}
        onDismiss={() => setSelectedCartId(null)}
      />
    </Fragment>
  );
}
