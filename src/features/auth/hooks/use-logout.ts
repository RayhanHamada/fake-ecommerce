"use client";

import { LOCAL_STORAGE_KEYS } from "@/lib/constants";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useEffect } from "react";

export function useLogout() {
  const [token] = useLocalStorage(LOCAL_STORAGE_KEYS.TOKEN, "");
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  useEffect(() => {
    if (token) return;

    enqueueSnackbar("You have been logged out", { variant: "info" });

    router.replace("/login");
  }, [token]);
}
