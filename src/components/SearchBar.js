const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => props.setQuery(e.target.value)}
        placeholder="search..."
      />
    </div>
  );
};

export default SearchBar;
