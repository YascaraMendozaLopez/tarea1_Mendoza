import React, { useState } from 'react';

import Counter from './ui/components/Counter';
import List from './ui/components/list';
import './styles.css';
function App() {
  const [uri, setUri] = useState('');
  const clickHandler = (url) => {
    setUri(url);
    //console.log(`url to send ${uri}`);
  };
  return (
    <div className="container">
      <Counter uri={uri}/>
      <List clickHandler={clickHandler}/>
    </div>
  );
}

export default App;
