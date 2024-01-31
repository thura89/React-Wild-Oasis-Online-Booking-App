import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(("user", user?.user));
      navigate("/dashboard", { replace: true });
      toast.success("Your are Logged in");
    },
    onError: (err) => toast.error("Provided Email & Password are Incorrect"),
  });
  return { login, isLoading };
};

export default useLogin;
