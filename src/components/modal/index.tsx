import { Button, Modal, ConfigProvider } from "antd";

import Footer from "./components/footer";
import ModalHeader from "./components/header";

import { ModalTypes } from "./modal.types";
import { useModal } from "./hooks/useModal";

const CustomModal: React.FC<ModalTypes> = ({
  as,
  children,
  buttonValue,
  title,
  triggerProps,
}) => {
  const { open, showModal, hideModal } = useModal();

  const Trigger = as ? as : Button;

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
};

export default CustomModal;
