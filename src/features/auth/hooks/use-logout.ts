"use client";

import { LOCAL_STORAGE_KEYS } from "@/lib/constants";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useLogout() {
  const [token] = useLocalStorage(LOCAL_STORAGE_KEYS.TOKEN, "");
  const router = useRouter();

  useEffect(() => {
    if (token) return;

    router.replace("/login");
  }, [token]);
}
