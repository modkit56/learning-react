import './search-box.styles.css';

const SearchBox = (props) => {
  console.log('Render:  SearchBox');
  const { onChangeHandler, placeholder, className } = props;
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
