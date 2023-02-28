import { async } from "@firebase/util";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  readServices,
  addServices,
  deleteServices,
  updateServices,
} from "../../config/firetest";

export const useFetchServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: readServices,
  });
};

export const useAddServices = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      await addServices(data);
    },
    onMutate: () => {},
    onSuccess: async () => {
      await queryClient.invalidateQueries(["services"]);
    },
  });
};

export const useDeleteServices = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      await deleteServices(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["services"]);
    },
    onError: () => {
      console.log("na error sya");
    },
  });
};

export const useUpdateServices = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, newData }) => {
      await updateServices(id, newData);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["services"]);
    },
  });
};
