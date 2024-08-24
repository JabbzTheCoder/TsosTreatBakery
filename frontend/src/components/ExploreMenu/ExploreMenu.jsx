import React, { useEffect, useState } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {

    setMenuItems(menu_list)
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from our diverse menu.</p>
      {menuItems.length > 0 ? (
        <div className="explore-menu-list">
          {menuItems.map((item, index) => {
            return (
              <div key={index} className="explore-menu-list-item" onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)}>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No menu items available.</p>
      )}
      <hr/>
    </div>
  );
};

export default ExploreMenu;