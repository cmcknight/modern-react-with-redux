import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

const App = () => {
  return (
    <div>
      <Link to='/accordion'>Go to accordion</Link>
      <br />
      <br />
      <Link to='/dropdown'>Go to dropdown</Link>
      <br />
      <br />
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
      </div>
      <div>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
