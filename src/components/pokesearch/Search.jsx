import "./Search.style.scss";

const Search = (props) => {
  const { handlechange } = props;
  return (
    <>
      <div className="searchbox my-2">
        <input
          type="text"
          placeholder="Search Pokemon here"
          onChange={handlechange}
        />
        <button>Search</button>
      </div>
    </>
  );
};

export default Search;
