import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, isAuthenticated: user?.role === "authenticated", user };
};
export default useUser;
