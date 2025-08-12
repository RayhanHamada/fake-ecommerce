"use client";

import {
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Drawer,
} from "@mui/material";
import { ShoppingCart, Logout } from "@mui/icons-material";
import Link from "next/link";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LOCAL_STORAGE_KEYS } from "@/lib/constants";

export default function DashboardDrawer() {
  const [, setToken] = useLocalStorage(LOCAL_STORAGE_KEYS.TOKEN, "");

  function handleLogout() {
    setToken("");
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 220,
          boxSizing: "border-box",
          bgcolor: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Toolbar>
          <Typography>Steven&apos;s Store</Typography>
        </Toolbar>
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem
              component={Link}
              href="/dashboard/carts"
              sx={{
                transition: "opacity 0.2s",
                "&:hover": { opacity: 0.6 },
              }}
            >
              <ListItemIcon>
                <ShoppingCart sx={{ color: "#FF5722" }} />
              </ListItemIcon>
              <ListItemText primary="Carts" />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <ListItem
          component={Button}
          onClick={handleLogout}
          size="small"
          sx={{
            transition: "opacity 0.2s",
            "&:hover": { opacity: 0.6 },
          }}
        >
          <ListItemIcon>
            <Logout sx={{ color: "#FF5722" }} />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            sx={{ color: "black", textTransform: "capitalize" }}
          />
        </ListItem>
      </Box>
    </Drawer>
  );
}
