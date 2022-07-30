import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    
    <Layout>
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
    </Layout>
    
  );
}

export default App;
