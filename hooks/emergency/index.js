import { useQuery, useMutation } from "@tanstack/react-query";

import { fetchEmergencyInfo } from "../../config/firestore";

export const useFetchEmergency = () => {
  return useQuery({
    queryKey: ["emergency"],
    queryFn: fetchEmergencyInfo,
  });
};
