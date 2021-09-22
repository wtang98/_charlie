import React from 'react'
import Filter from "../../../assets/images/filter.png";
import GridView from "../../../assets/images/grid-view.png";
import HamburgerMenu from "../../../assets/images/hamburger-menu.png";
import Sort from "../../../assets/images/sort.png";
import "./studentsearchbar.scss"; 


const StudentSearchBar = () => {
  return (
    <div className="search-bar row d-flex align-items-center">
      <p className="search-bar__heading col-2 ">Student List</p>
      <div className="search-bar__view-buttons offset-1 col-1  d-flex"> 
        <button className="search-bar__view-buttons-btn"> <img src={HamburgerMenu} alt="hamburger"></img></button>
        <button className="search-bar__view-buttons-btn"> <img src={GridView} alt="grid view"></img></button>
      </div>
      <input className="search-bar__input col-2 offset-3 d-flex row"></input>
      <div className="col search-bar__sort-filter-buttons"> 
        <button className = "search-bar__sort-filter-buttons-btn"> <img src={Sort} alt="sort"></img></button>
        <p className="search-bar__sort-filter-buttons-label">Sort</p>
        <button className = "search-bar__sort-filter-buttons-btn"> <img src={Filter} alt="filter"></img></button>
        <p className="search-bar__sort-filter-buttons-label">Filter</p>
      </div>
    </div>
  )
}

export default StudentSearchBar