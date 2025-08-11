import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type Props = Readonly<PropsWithChildren>;

export default function Layout(props: Props) {
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
            Steven's Store
          </Typography>
        </Toolbar>
      </AppBar>

      {props.children}
    </Box>
  );
}
