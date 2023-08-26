import "./Filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <div>
        <input type="search" className="search" placeholder="Search for breeds by name"/>
        <button type="submit" className="btn-search svg-btn"></button>
      </div>
      <button className="btn-reaction svg-btn likes"></button>
      <button className="btn-reaction svg-btn favorites"></button>
      <button className="btn-reaction svg-btn dislikes"></button>
    </div>
  );
};

export default Filters;
