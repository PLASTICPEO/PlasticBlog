// api.js
import { useQuery } from "@tanstack/react-query";

export function useUserData(queryKey: string[]) {
  return useQuery({
    queryKey,
    queryFn: () =>
      fetch("http://localhost:3001/users").then((res) => res.json()),
  });
}
