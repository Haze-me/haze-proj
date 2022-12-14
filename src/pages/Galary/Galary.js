import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Menu from './Menu';
import Categories from './Categories';
import items from './dataGalary';
import './index.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Galary() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our products galary</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <Link to='/'>Home</Link>
    </main>
  );
}

export default Galary;
