import { signUp as signUpApi } from "../../services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useSignUp = () => {
  const { mutate: signUp, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signUpApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please Verify the new account's from the email address "
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signUp, isLoading };
};

export default useSignUp;
