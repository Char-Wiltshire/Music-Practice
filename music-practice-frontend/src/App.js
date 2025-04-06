import React from 'react';
import PracticeForm from './components/PracticeForm';
import PracticeList from './components/PracticeList';

const App = () => {
  return (
    <div className = "App">
      <h1>Music Practice Tracker</h1>
      <PracticeForm />
      <PracticeList />
    </div>
  );
};

export default App;
