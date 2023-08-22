import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const WrongPage: React.FC = () => (
  <Result
    status="404"
    title="Something wrong"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);

export default WrongPage;
