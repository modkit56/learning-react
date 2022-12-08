import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    // console.log('constructor app');
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    // console.log('componentDidMount app');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {
              monsters: users,
            };
          }
          // () => {
          //   console.log('current state: ', 'fetch ', this.state);
          // }
        )
      );
    console.log('fetch');
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {
          searchField: searchString,
        };
      }
      // () => {
      //   console.log('current state: ', 'searchField ', this.state);
      // }
    );
  };

  render() {
    console.log('render App', 'state:', this.state);

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Monster by Name'
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>;
            </div>
          );
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
