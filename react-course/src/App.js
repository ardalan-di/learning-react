import {Route, Switch} from 'react-router-dom';

import AllMeetup from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import MainNav from './components/layout/MainNav';

function App() {
  return (
    <div>
      <MainNav/>
      <Switch>
      <Route path='/' exact>
        <AllMeetup/>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage/>
      </Route>
      <Route path='/favorites'>
        <FavoritesPage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
