import { Button } from "antd";

const Footer: React.FC<{ hideModal: () => void; footer?: any }> = ({
  hideModal,
  footer,
}) => {
  console.log(footer);
  return (
    <div className="flex items-center justify-center">
      {footer.buttonText.map((item: any, index: number) => {
        return (
          <Button
            type="primary"
            ghost
            key={index}
            className={`${footer.style}`}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default Footer;
