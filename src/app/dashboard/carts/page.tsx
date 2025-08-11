import { Container, Typography } from "@mui/material";

type Props = Readonly<{}>;

export default function Page(props: Props) {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom color="black">
        Carts
      </Typography>
    </Container>
  );
}
