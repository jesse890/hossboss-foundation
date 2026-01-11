import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useSponsors() {
  return useQuery({
    queryKey: [api.sponsors.list.path],
    queryFn: async () => {
      const res = await fetch(api.sponsors.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch sponsors");
      return api.sponsors.list.responses[200].parse(await res.json());
    },
  });
}
