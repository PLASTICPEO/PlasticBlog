import { Button, Modal, ConfigProvider } from "antd";

import Footer from "./components/footer";
import ModalHeader from "./components/header";

import { ModalTypes } from "./modal.types";
import { useModal } from "./hooks/useModal";
import { forwardRef, useEffect, useImperativeHandle } from "react";

const CustomModal: React.FC<any> = forwardRef(
  ({ as, children, buttonValue, title, triggerProps }, ref) => {
    const { open, showModal, hideModal } = useModal();

    const Trigger = as ? as : Button;

    useImperativeHandle(ref, () => ({
      closeModal: () => {
        hideModal();
      },
    }));

    return (
      <div>
        <div>
          <ConfigProvider
            theme={{
              token: { colorPrimaryHover: "black" },
            }}
          >
            <Trigger onClick={showModal} {...triggerProps}>
              {buttonValue}
            </Trigger>
          </ConfigProvider>
        </div>

        <Modal
          open={open}
          onCancel={hideModal}
          title={<ModalHeader title={title} />}
          footer={<Footer />}
        >
          <div>{children}</div>
        </Modal>
      </div>
    );
  }
);

export default CustomModal;
