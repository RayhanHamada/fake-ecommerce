"use client";

import CartTable from "@/features/carts/components/CartTable";
import { Container, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { Modal, Box } from "@mui/material";

export default function Page() {
  const [selectedCartId, setSelectedCartId] = useState<string | null>(null);

  return (
    <Fragment>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom color="black">
          Carts
        </Typography>
        <CartTable onClickDetail={setSelectedCartId} />
      </Container>
      <Modal
        open={!!selectedCartId}
        onClose={() => setSelectedCartId(null)}
        aria-labelledby="cart-modal-title"
        aria-describedby="cart-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            minWidth: 300,
            minHeight: 200,
          }}
        />
      </Modal>
    </Fragment>
  );
}
