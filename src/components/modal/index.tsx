import { Button, Modal } from "antd";

import Footer from "./components";

import { useModal } from "./hooks/useModal";
import { ModalTypes } from "./modal.types";
import { useEffect } from "react";

const CustomModal: React.FC<ModalTypes> = ({
  as,
  children,
  title,
  triggerProps,
}) => {
  const { open, showModal, hideModal } = useModal();

  const Trigger = as ? as : Button;

  useEffect(() => {
    console.log(triggerProps);
  }, []);

  return (
    <div>
      {triggerProps
        ? triggerProps?.buttonname.map((buttonValue: any, index: number) => {
            return (
              <Trigger onClick={showModal} key={index} {...triggerProps}>
                {buttonValue}
              </Trigger>
            );
          })
        : null}
      <Modal
        title={title}
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        footer={<Footer />}
      >
        <div>{children}</div>
      </Modal>
    </div>
  );
};

export default CustomModal;
