import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API when the component mounts
    fetch('http://127.0.0.1:8000/api/categorys/')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <NavDropdown className='nav-header' title="COLLECTION" id="basic-nav-dropdown">
    {categories.map((category) => (
      <React.Fragment key={category.id}>
        <LinkContainer to={`/category/${category.id}`}>
          <NavDropdown.Item>{category.name}</NavDropdown.Item>
        </LinkContainer>
      </React.Fragment>
    ))}
  </NavDropdown>
  );
};

export default NavMenu;