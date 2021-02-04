import ROUTES from 'configs/routes';
import { Button, ButtonType, Icon } from 'paramex';
import { useHistory } from 'react-router-dom';

const DefaultPage = () => {
  const history = useHistory();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
      <h4 className="mb-4">Default Page</h4>
      <div className="mb-4">
        <Button
          label="Go to Bbento"
          onClick={() => history.push(ROUTES.BBENTO)}
          type={ButtonType.Primary}
          icon={<Icon name="caret-right" />}
        />
      </div>
      <div className="mb-4">
        <Button
          label="Go to UOB x MSIG"
          onClick={() => history.push(ROUTES.UOB_MSIG)}
          type={ButtonType.Info}
          icon={<Icon name="caret-right" />}
        />
      </div>
    </div>
  );
};

export default DefaultPage;
