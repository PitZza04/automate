import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { readServices, addServices } from "../config/firetest";

export const useFetchServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: readServices,
  });
};

export const useAddServices = () => {
  const queryClient = useQueryClient();
  return useMutation(addServices, {
    onSuccess: () => {
      queryClient.invalidateQueries("services");
    },
  });
};
