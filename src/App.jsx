import React from 'react';
// import ComponentClass from './components/ClassComponent';
// import Button from './components/Button';
import LifeCycle from './components/LifeCycle';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {/* <ComponentClass min={1} max={10}/> */}
        {/* <Button isHide={true} text={'Сыграть еще?'}/> */}
        <LifeCycle prop="METHED"/>
      </div>
    );
  }
}
