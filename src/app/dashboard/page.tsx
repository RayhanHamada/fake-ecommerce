"use client";

import { Box, Typography } from "@mui/material";

type Props = Readonly<Record<string, unknown>>;

export default function Page(props: Props) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography>Dashboard</Typography>
    </Box>
  );
}
