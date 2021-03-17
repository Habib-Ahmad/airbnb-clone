import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={SearchPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
