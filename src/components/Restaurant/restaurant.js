import React, { useState } from 'react';
import "./restaurant.css";
import restaurantData from './data';
import { BiSearch, BiFilter } from 'react-icons/bi'; 
import { Link, useNavigate } from 'react-router-dom';
import ShowModal from './ShowModal';

const Restaurant = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    cuisine: '',
    diet: '',
    protein: ''
  });
  const navigate = useNavigate();

  const handleRestaurantClick = () => {
    navigate('/');
  };

  const handleCookingClick = () => {
    navigate('/cooking');
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  const applyFilters = () => {
    setShowFilterModal(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRestaurants = restaurantData.filter((restaurant) => {
    return (
      (restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.diet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.protein.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.foodName.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedFilters.cuisine ? restaurant.cuisine === selectedFilters.cuisine : true) &&
      (selectedFilters.diet ? restaurant.diet === selectedFilters.diet : true) &&
      (selectedFilters.protein ? restaurant.protein === selectedFilters.protein : true)
    );
  });

  return (
    <div className='maxwidth'>
      <div className="max-width header">
        <div className="header-right">
          <div className="header-location-search-container">
            <div className="header-searchbar">
              <input
                type="text"
                placeholder="🔍 Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="search-input"
              />
              <BiFilter className="filter-icon" onClick={() => setShowFilterModal(true)} />
            </div>
          </div>
        </div>
      </div> 
      
      <div className="navigation-bar">
        <button onClick={handleRestaurantClick}>Restaurant</button>
        <button onClick={handleCookingClick}>Cooking</button>
      </div>

      <ShowModal
        isOpen={showFilterModal}
        onRequestClose={() => setShowFilterModal(false)}
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
        applyFilters={applyFilters}
      />

      <div className='collection-title'>Satisfy Your Cravings</div>
      <div className='collection-subtitle'>Restaurants that suit your palate</div>
        
      {/* View All Button */}
      {!showAll && (
        <div className="view-all-button" onClick={() => setShowAll(true)}>View All</div>
      )}

      {/* Restaurant Container */}
      <div className='restaurant-container'>
        {filteredRestaurants.slice(0, showAll ? filteredRestaurants.length : 4).map((item) => (
          <div key={item.id} className="restaurant-item">
            <img src={item.image} alt="" />
            <div className="restaurant-details">
              <div>{item.name}</div>
              <div>Cuisine: {item.cuisine}</div>
              <div>Diet: {item.diet}</div>
              <div>Protein: {item.protein}</div>
              <div>Featured Dish: {item.foodName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
