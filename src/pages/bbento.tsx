import { Button, ButtonType, Icon } from 'paramex';

const BbentoPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
      <h4 className="mb-4">Bbento Page</h4>
      <div className="mb-4">
        <Button
          label="Primary"
          type={ButtonType.Primary}
          icon={<Icon name="caret-down" />}
        />
      </div>
      <div className="mb-4">
        <Button
          label="Secondary"
          type={ButtonType.Secondary}
          icon={<Icon name="caret-up" />}
        />
      </div>
    </div>
  );
};

export default BbentoPage;
