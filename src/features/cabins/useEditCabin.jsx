import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export const useEditCabin = () => {
  const queryClient = useQueryClient();
  const { mutate: editCabinMutate, isLoading: isEditing } = useMutation({
    mutationFn: ({ newEditCabinData, id }) =>
      createEditCabin(newEditCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully Edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => toast.error(error.message),
  });
  return { editCabinMutate, isEditing };
};
