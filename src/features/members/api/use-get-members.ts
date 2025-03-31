import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

interface useGetMembersProp {
  workspaceId: string;
}

export const useGetMembers = ({ workspaceId }: useGetMembersProp) => {
  const query = useQuery({
    queryKey: ["members", workspaceId],
    queryFn: async () => {
      const response = await client.api.members.$get({
        query: { workspaceId },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }
      const { data } = await response.json();

      return data;
    },
  });
  return query;
};
