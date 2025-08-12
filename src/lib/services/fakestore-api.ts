import { paths } from "@/lib/types/fakestore-openapi";
import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";

export const client = createFetchClient<paths>({
  baseUrl: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const $api = createClient(client);
