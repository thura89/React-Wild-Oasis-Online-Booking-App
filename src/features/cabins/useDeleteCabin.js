import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin } from "../../services/apiCabins";

const useDeleteCabin = () => {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabinMutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      // alert("Cabins successfully deleted");
      toast.success("Cabins successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => toast.error(error.message),
  });
  return {
    isDeleting,
    deleteCabinMutate,
  };
};

export default useDeleteCabin;
