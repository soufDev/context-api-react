import * as React from 'react';
import { IAppState } from './App';

const defaultProps = {
  age: 0,
}

export const MyContext = React.createContext<IAppState>(defaultProps);

class Provider extends React.Component<IAppState, IAppState> {
  public static defaultProps: Partial<IAppState> = defaultProps;
  constructor(props: IAppState) {
    super(props);
    this.state = {
      age: 26,
      message: 'hello world!',
      name: 'Abramov',
      prenon: 'Dan'
    }
      this.ageIncrementation = this.ageIncrementation.bind(this);
      this.ageDecrementation = this.ageDecrementation.bind(this);
  }
  
  public ageIncrementation() {
    this.setState({ age: this.state.age + 1 });
  }
  
  public ageDecrementation() {
    this.setState({ age: this.state.age - 1 });
  }
  public render() {
    return (
      <MyContext.Provider value={
        { 
          ...this.state,
          ageDec: this.ageDecrementation,
          ageInc: this.ageIncrementation, 
        }
      }>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
  
export default Provider;
  