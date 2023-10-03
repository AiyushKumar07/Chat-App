import { Switch } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home/index';
import { ProfileProvider } from './context/profile.context';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <ErrorBoundary>
            <SignIn />
          </ErrorBoundary>
        </PublicRoute>
        <PrivateRoute path="/">
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
