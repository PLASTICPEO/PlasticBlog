import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
    console.log("შოუ მოდალ");
  };

  const hideModal = () => {
    setOpen(false);
  };

  return { open, showModal, hideModal };
};
