import { useQuery, useMutation } from "@tanstack/react-query";
import { readServices } from "../config/firetest";

export const useFetchServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: readServices,
  });
};
