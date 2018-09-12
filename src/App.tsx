import * as React from 'react';
import './App.css';
import { MyContext } from './Provider';
import Provider from './Provider';

export interface IAppState {
  name?: string;
  age: number;
  message?: string;
  prenon?: string;
  ageInc?: () => void;
  ageDec?: () => void;
}

class App extends React.Component<{}, IAppState> {
  public render() {
    return (
      <Provider>
        <Family />
      </Provider> 
    );
  }
}

function Person() {
  return (
    <MyContext.Consumer>
      {(context: Partial<IAppState>) => (
        <>
          <h2>My name is {context.prenon}</h2>
          <h3>{context.message}</h3>
          <h4>I'm {context.age}</h4>
          <button onClick={context.ageInc}>Inc Age</button>
          <button onClick={context.ageDec}>Dec Age</button>
        </> 
      )}
    </MyContext.Consumer>
  )
} 

function Family() {
  return (
    <MyContext.Consumer>
      {(context: Partial<IAppState>) => (
        <>
          <h1>Familly {context.name}</h1>
          <Person />
        </>
      )}
    </MyContext.Consumer>
  )
}

export default App;
