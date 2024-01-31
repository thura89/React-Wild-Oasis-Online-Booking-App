import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBookingMutate, isLoading: isDeletingBooking } =
    useMutation({
      mutationFn: deleteBookingApi,
      onSuccess: () => {
        toast.success("Booking successfully Delete");
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
      onError: (error) => toast.error(error.message),
    });
  return { deleteBookingMutate, isDeletingBooking };
};

export default useDeleteBooking;
