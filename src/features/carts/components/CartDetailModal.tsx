"use client";

import { $api } from "@/lib/services";
import { Modal, Box, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  selectedID: number;
  onDismiss(): void;
};

export default function CartDetailModal(props: Props) {
  const { data: cartData, isFetching: isFetchingCartData } = $api.useQuery(
    "get",
    "/carts/{id}",
    {
      params: {
        path: {
          id: props.selectedID,
        },
      },
    }
  );

  const productIds = cartData?.products?.map((p) => p.productId) || [];

  const { data: allProductData, isFetching: isFetchingAllProductData } =
    $api.useQuery("get", "/products");

  const filteredProducts = allProductData?.filter((product) =>
    productIds.includes(product.id)
  );

  const productsWithQuantity =
    filteredProducts?.map((product) => {
      const cartProduct = cartData?.products?.find(
        (p) => p.productId === product.id
      );
      return {
        ...product,
        quantity: cartProduct?.quantity ?? 0,
      };
    }) || [];

  console.log(productsWithQuantity);

  return (
    <Modal
      open={!!props.selectedID}
      onClose={props.onDismiss}
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
          minWidth: 400,
          minHeight: 300,
        }}
      >
        {/* Dismiss button */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 1,
          }}
        >
          <button
            onClick={props.onDismiss}
            style={{
              background: "transparent",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
              color: "#888",
            }}
            aria-label="Close"
          >
            &#10005;
          </button>
        </Box>
        <Typography
          id="cart-modal-title"
          variant="h6"
          gutterBottom
          color="orange"
        >
          Cart Details
        </Typography>
        {/* Mock product list */}
        {productsWithQuantity?.map((product) => (
          <Box
            key={product.id}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              borderBottom: "1px solid #eee",
              pb: 2,
            }}
          >
            <Image
              src={product.image ?? ""}
              alt={product.title ?? ""}
              width={60}
              height={60}
              style={{
                marginRight: 16,
                borderRadius: 8,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" color="orange">
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                color="black"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2, // maximum 2 lines
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2" color="black" fontWeight="700">
                  Price: ${product.price?.toFixed(2)}
                </Typography>
                <Typography variant="body2" color="black" fontWeight="700">
                  Qty: {product.quantity}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
        {/* Total price */}
        <Box sx={{ mt: 2, textAlign: "right" }}>
          <Typography variant="h6" color="orange">
            Total: $
            {productsWithQuantity
              .reduce((sum, p) => sum + p.price * p.quantity, 0)
              .toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
