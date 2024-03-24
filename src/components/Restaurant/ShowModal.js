import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%', // Increased width
    height: '70%', // Increased height
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const ShowModal = ({
  isOpen,
  onRequestClose,
  selectedFilters,
  handleFilterChange,
  applyFilters,
  cancelFilters,
}) => {
  const toggleFilter = (filterType, value) => {
    if (selectedFilters[filterType] === value) {
      handleFilterChange(filterType, ''); // Remove filter if already selected
    } else {
      handleFilterChange(filterType, value); // Toggle filter
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Filter Options"
      style={customStyles}
    >
      <h3>Filter Options</h3>
      <div className="filter-option">
        <label>Cuisine:</label>
        <div className="d-flex flex-row space-between mb-3 ml-2 justify-content-evenly ">
           {/* Indian Cuisine */}
           <button
            className={`btn btn-outline-primary p-2 rounded ${
              selectedFilters.cuisine === 'Indian' ? 'active' : ''
            }`}
            onClick={() => toggleFilter('cuisine', 'Indian')}
          >
            Indian
          </button>
          {/* Mediterranean Cuisine */}
          <button
            className={`btn btn-outline-primary ${
              selectedFilters.cuisine === 'Mediterranean' ? 'active' : ''
            }`}
            onClick={() => toggleFilter('cuisine', 'Mediterranean')}
          >
            Mediterranean
          </button>
        </div>
      </div>
      <div className="filter-option">
        <label>Diet:</label>
        <div className="d-flex flex-row space-between mb-3 ml-2 justify-content-evenly ">
           {/* Vegetarian Diet */}
           <button
            className={`btn btn-outline-primary ${
              selectedFilters.diet === 'Vegetarian' ? 'active' : ''
            }`}
            onClick={() => toggleFilter('diet', 'Vegetarian')}
          >
            Vegetarian
          </button>
          {/* Non-Vegetarian Diet */}
          <button
            className={`btn btn-outline-primary ${
              selectedFilters.diet === 'Non-Vegetarian' ? 'active' : ''
            }`}
            onClick={() => toggleFilter('diet', 'Non-Vegetarian')}
          >
            Non-Vegetarian
          </button>
          <button
            className={`btn btn-outline-primary ${
              selectedFilters.diet === 'Vegan' ? 'active' : ''
            }`}
            onClick={() => toggleFilter('diet', 'Vegan')}
          >
            Vegan
          </button>
        </div>
      </div>
      <div className="filter-option">
        <label>Protein:</label>
        <div className="d-flex flex-row space-between mb-3 ml-2 justify-content-evenly ">

          {/* Chickpeas Protein */}
          <button
            className={`btn btn-outline-primary ${
              selectedFilters.protein === 'Chickpeas' ? 'active' : ''
            }`}
            onClick={() => toggleFilter('protein', 'Chickpeas')}
          >
            Chickpeas
          </button>
          {/* Tofu Protein */}
          <button
            className={`btn btn-outline-primary ${
              selectedFilters.protein === 'Tofu' ? 'active' : ''
            }`}
            onClick={() => toggleFilter('protein', 'Tofu')}
          >
            Tofu
          </button>
        </div>
      </div>
      {/* Cancel Filters */}
      <div className='d-flext align-items-center'> <button className="btn btn-secondary py-2 mt-3 text-center" onClick={applyFilters}>
        Close
      </button></div>
     
    </Modal>
  );
};

export default ShowModal;
