const Person = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement(
      'h1',
      {
        class: 'title',
      },
      'React IS rendered!'
    ),
    React.createElement(
      Person,
      { name: 'Sid', occupation: 'SWE Intern' },
      null
    ),
    React.createElement(Person, { name: 'Tam', occupation: 'DS Intern' }, null),
    React.createElement(Person, { name: 'Pat', occupation: 'ML Intern' }, null),
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
