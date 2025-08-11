"use client";

import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import DashboardDrawer from "@/components/dashboard-drawer";
import { useLogout } from "@/features/auth/hooks/use-logout";

type Props = Readonly<PropsWithChildren>;

export default function Layout(props: Props) {
  useLogout();

  return (
    <Box sx={{ minHeight: "100dvh", bgcolor: "#f5f5f5" }}>
      {/* Vertical Drawer below AppBar */}
      <Box sx={{ display: "flex" }}>
        <DashboardDrawer />
        <Box sx={{ flexGrow: 1, p: 1 }}>{props.children}</Box>
      </Box>
    </Box>
  );
}
