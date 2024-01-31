import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationKey: ["user"],
    mutationFn: updateCurrentUser,

    onSuccess: ({ user }) => {
      toast.success("Updated Successfully");
      queryClient.setQueryData(["user"], user);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateUser, isUpdating };
};

export default useUpdateUser;
