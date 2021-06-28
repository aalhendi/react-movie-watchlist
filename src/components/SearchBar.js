const SearchBar = (props) => {
  return (
    <div className="me-5 ms-5">
      <input
        type="text"
        onChange={(e) => props.setQuery(e.target.value)}
        placeholder="search..."
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
