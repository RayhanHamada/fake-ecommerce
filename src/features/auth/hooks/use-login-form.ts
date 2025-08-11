import {
  LOGIN_SCHEMA,
  LOGIN_SCHEMA_TYPE,
} from "@/features/auth/lib/form-schemas";
import { $api } from "@/lib/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LOCAL_STORAGE_KEYS } from "@/lib/constants";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

export function useLoginForm() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [, setToken] = useLocalStorage(LOCAL_STORAGE_KEYS.TOKEN, "");

  const form = useForm<LOGIN_SCHEMA_TYPE>({
    resolver: zodResolver(LOGIN_SCHEMA),
  });

  const { mutateAsync: mutateLoginAsync } = $api.useMutation(
    "post",
    "/auth/login"
  );

  const onSubmit = form.handleSubmit(async function (data) {
    await mutateLoginAsync({
      body: {
        username: data.username,
        password: data.password,
      },
    })
      .then((response) => {
        if (!response.token) {
          enqueueSnackbar("Login Failed", { variant: "error" });
          return;
        }

        setToken(response.token);
        enqueueSnackbar("Login Successful", { variant: "success" });

        router.replace("/dashboard");
      })
      .catch((err) => {
        enqueueSnackbar("Login Failed", { variant: "error" });
      });
  });

  return {
    form,
    onSubmit,
  };
}
