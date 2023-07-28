import { Button } from "antd";

const Footer: React.FC<{ hideModal: () => void; btnValue: any }> = ({
  hideModal,
  btnValue,
}) => {
  return (
    <div className="flex items-center justify-center">
      <Button type="primary" ghost>
        {btnValue}
      </Button>
    </div>
  );
};

export default Footer;
