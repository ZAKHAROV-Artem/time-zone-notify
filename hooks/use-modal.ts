import { Modals } from "~/types/modals";
import { useDispatch, useSelector } from "~/store/hooks";
import { setModal, resetModal } from "~/store/slices/modals";

export const useModal = (modal: Modals) => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.modals.modal);

  const handleClose = () => {
    dispatch(resetModal());
  };
  const handleOpen = () => {
    dispatch(setModal(modal));
  };

  return {
    handleClose,
    handleOpen,
    isVisible: modal === currentModal,
  };
};
