import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import Select from 'react-select';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen] = useState(true);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    let productsToSort = all_product.filter((item) => props.category === item.category);

    productsToSort = productsToSort.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortOrder) {
      case 'name':
        productsToSort.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        productsToSort.sort((a, b) => a.new_price - b.new_price);
        break;
      default:
        break;
    }

    setSortedProducts(productsToSort);
  }, [sortOrder, all_product, props.category, searchQuery]);

  const options = [
    { value: 'default', label: 'Default' },
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
  ];

  const handleSortChange = (selectedOption) => {
    setSortOrder(selectedOption.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-search">
        <input
          type="text"
          placeholder="Serach..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{sortedProducts.length}</span> out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort">
          <span>Sort by</span>
          {isFilterOpen && (
            <Select
              className='selection'
              autoFocus
              value={options.find((option) => option.value === sortOrder)}
              options={options}
              onChange={handleSortChange}
            />
          )}
        </div>
      </div>

      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      <div className="shopcategory-loadmore">View More</div>
    </div>
  );
};

export default ShopCategory;
