// import NestedDropdown from './components/NestedDropdown';
import React, { useState } from 'react';
import Groupwise from './components/Groupwise';
import Prioritywise from './components/Prioritywise'
import NestedDropdown from './components/NestedDropdown';
import Namewise from './components/Namewise';
import DisplayBtn from './components/DisplayBtn';

function App() {
  const initialComponent = Namewise;
  const [activeComponent, setActiveComponent] = useState(initialComponent);

  const addGroupingComponent = () => {
    setActiveComponent(Groupwise);
  };

  const addPriorityComponent = () => {
    setActiveComponent(Prioritywise);
  };

  const addUserComponent = () => {
    setActiveComponent(Namewise);
  };

  return (
    <div>
      <DisplayBtn addUserComponent={addUserComponent} addGroupingComponent={addGroupingComponent} addPriorityComponent={addPriorityComponent} />
      <div>
        {activeComponent}
      </div>
    </div>
  );
}

export default App;
