import { Result } from "antd";

const WrongPage: React.FC = () => (
  <Result
    status="404"
    title="Something wrong"
    subTitle="Sorry, the page you visited does not exist."
  />
);

export default WrongPage;
