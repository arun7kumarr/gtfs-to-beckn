import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FileViewer from './components/FileViewer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={FileViewer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
