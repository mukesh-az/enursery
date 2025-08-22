import { useState, useEffect } from 'react';


import Card from 'react-bootstrap/Card';
import productsData from '../data/products.json';
import CardImage from '../components/cardImage';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductInfo from '../components/ProductInfo';
import AddToCartButton from '../components/AddToCartButton';


const groupBy = keys => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = keys.map(key => obj[key]).join('-');
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

  
const Products = () => {

    
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [checkBoxList, setCheckBoxeList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [groupedItems , setGroupedItems ] = useState([]);
  

    const handleOnChange = (e, type) => {
      console.log("ENTERED:");
    const { name, checked } = e.target;
   
    if (categoryFilter.includes(name) && !checked) {
      setCategoryFilter(categoryFilter.filter((item) => item !== name));
    } else if (!categoryFilter.includes(name) && checked) {
      setCategoryFilter([...categoryFilter, name]);
    }

    console.log(name, checked);

  };

    useEffect(() => {

      const uniqueArray = Object.keys(productsData.reduce((r,{category}) => (r[category]='', r) , {}));
     
      setCategories(uniqueArray);

    }, []);

  useEffect(() => {
    if(categories.length > 0){
    if (categoryFilter.length === 0) {

      setProductsByCategory(productsData.sort((a, b) => a.category.localeCompare(b.category)));

      const result = Object.values(productsData.reduce((acc, el) => { 
    acc[el.category] = acc[el.category] || { category: el.category, items: [] };
    acc[el.category].items.push( el);
    return acc;
}, {}))

      setGroupedItems(result);
     console.log("Grouped Items:", result);
    } else {

      const filteredCategory = productsData.filter(
        (member) => categoryFilter.includes(member.category)
      );
      setProductsByCategory(filteredCategory);


const result = Object.values(filteredCategory.reduce((acc, el) => { 
    acc[el.category] = acc[el.category] || { category: el.category, items: [] };
    acc[el.category].items.push( el);
    return acc;
}, {}))

      setGroupedItems(result);
console.log("Grouped Items:", result);

      }

    setCheckBoxeList(categories.map((item) => ({
        key: item,
        checked: categoryFilter.length > 0 ? categoryFilter.some((a) => a === item) : false
     })));

    }
  }, [categories, categoryFilter]);




  return (

    <>
    <div className="row">
  <div className="col-2">
    <Card
          bg={"light"}
          key="search"
          style={{ width: '20rem'}}
        >
          <Card.Header>Filter Category</Card.Header>
          <Card.Body>
              
           <ListGroup>
     {checkBoxList.map((opt) => (


          <ListGroup.Item key={opt.key} >
            <div className="form-check">
                  <input
                   className="form-check-input"
                    type="checkbox"
                    name={opt.key}
                    checked={opt.checked}
                    onChange={handleOnChange}
                  />
                  {opt.key}
            </div>
            
          </ListGroup.Item>
          
      
      
    ))
  }
    </ListGroup>
          </Card.Body>
           <Card.Header><input  className="btn btn-secondary" type='button' name='Reset' onClick={() => setCategoryFilter([])}  value="Reset" /></Card.Header>
        </Card>
  
  </div>
  <div className="col-10" >
    
     <div className="product-list" >
                    {groupedItems.map((section, sectionIndex) => (
                        <div className="product-grid" key={sectionIndex}>
                            <h2 className="plant_heading">{section.category}</h2>
                            <div className="product-list">
                                {section.items.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <h3 className="product-title">{plant.title}</h3>
                                        <img className="product-image" src={plant.image} alt={plant.title} />
                                       
                                        <p>{plant.description}</p>
                                        <AddToCartButton product={plant} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

      </div>

  </div>

</div>
</>
  );
};

export default Products;
