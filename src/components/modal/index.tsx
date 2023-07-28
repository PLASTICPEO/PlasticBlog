import { Button, Modal, Input } from "antd";

import Footer from "./components";

import { useModal } from "./hooks/useModal";
import { ModalTypes } from "./modal.types";

const CustomModal: React.FC<ModalTypes> = ({
  as,
  children,
  buttonValue,
  triggerProps,
}) => {
  const { open, showModal, hideModal } = useModal();

  const Trigger = as ? as : Button;

  return (
    <div>
      <Trigger onClick={showModal} {...triggerProps}>
        {buttonValue}
      </Trigger>

      <Modal
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        footer={<Footer hideModal={hideModal} btnValue={buttonValue} />}
      >
        <div>{children}</div>
      </Modal>
    </div>
  );
};

export default CustomModal;
