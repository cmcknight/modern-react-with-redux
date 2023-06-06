import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary rounded className='mb-5'>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Click Me Two!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase />
          Click Me Three!
        </Button>
      </div>
      <div>
        <Button warning>Click Me Four!</Button>
      </div>
      <div>
        <Button danger rounded outline>
          Click Me Five!
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
