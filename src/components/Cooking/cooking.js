import React, { useState } from 'react';
import cookingData from './data'; // Import dummy cooking data
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Cooking = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleRestaurantClick = () => {
    navigate('/');
  };

  const handleCookingClick = () => {
    navigate('/cooking');
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = cookingData.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.instructions.toLowerCase().includes(searchQuery.toLowerCase())
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
            </div>
          </div>
        </div>
      </div> 
      
      <div className="navigation-bar">
        <button onClick={handleRestaurantClick}>Restaurant</button>
        <button onClick={handleCookingClick}>Cooking</button>
      </div>

      <div className='collection-title'>Satisfy Your Cravings</div>
      <div className='collection-subtitle'>Cooking recipes that delight your taste buds</div>
        
      {/* View All Button */}
      {!showAll && (
        <div className="view-all-button" onClick={() => setShowAll(true)}>View All</div>
      )}

      {/* Cooking Container */}
      <div className="container">
      <h1 className="mt-5 mb-4">Cooking Recipes</h1>
      <div className="row">
        {cookingData.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.ingredients}</Card.Text>
                <Button variant="primary">View Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Cooking;
