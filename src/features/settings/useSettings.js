import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

const useSettings = () => {
  const { data: settings, isLoading } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
  });
  return { settings, isLoading };
};

export default useSettings;
