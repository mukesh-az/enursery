import { useState, useEffect } from 'react';


import Card from 'react-bootstrap/Card';
import productsData from '../data/products.json';
import CardImage from '../components/cardImage';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

import ProductInfo from '../components/ProductInfo';

const Products = () => {

    
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [checkBoxList, setCheckBoxeList] = useState([]);
  const [categories, setCategories] = useState([]);
  

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
      setProductsByCategory(productsData);
    } else {
      const filteredCategory = productsData.filter(
        (member) => categoryFilter.includes(member.category)
      );
      setProductsByCategory(filteredCategory);
      }

    setCheckBoxeList(categories.map((item) => ({
        key: item,
        checked: categoryFilter.length > 0 ? categoryFilter.some((a) => a === item) : false
     })));

    }
  }, [categories, categoryFilter]);




  return (

    <>
    <div class="row mt-3">
  <div class="col-2"></div>
  <div class="col-2">
    <Card
          bg={"light"}
          key="search"
          style={{ width: '21rem', marginBottom: '1rem', marginRight: '1rem' }}
        >
          <Card.Header>Filter Category</Card.Header>
          <Card.Body>
              
           <ListGroup>
     {checkBoxList.map((opt) => (


          <ListGroup.Item key={opt.key} className='mb-2' >
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
  <div class="col-6">
    
     <div className="d-flex flex-row" style={{ maxWidth: '100%', justifyContent: 'left', flexWrap: 'wrap'
      } }>
      {productsByCategory.map((variant) => (
        <Card
          bg={"light"}
          key={variant.id}
          style={{ width: '30rem', marginBottom: '1rem', marginRight: '1rem' }}
        >
          <Card.Header>{variant.title}</Card.Header>
          <Card.Body>
              <CardImage text="img-1" height="auto" />
            <Card.Text>

               <Link to={`/products/${variant.id}`}>{variant.description}</Link>
            </Card.Text>
          </Card.Body>
           <Card.Header>

        

           </Card.Header>
        </Card>
      ))}
      </div>

  </div>
  <div class="col-2"></div>

</div>
    <div>


      <h1>Products</h1>
      <div className="product-list">
        {productsData.map(product => (
          <ProductInfo key={product.id} product={product} />
        ))}
      </div>
    </div></>
  );
};

export default Products;
