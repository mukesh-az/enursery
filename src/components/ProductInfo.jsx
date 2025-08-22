import Card from 'react-bootstrap/Card';
import CardImage from '../components/cardImage';


const ProductInfo = ({ product }) => {
    return (
   

            <Card
                bg={"light"}
                key={product.id}
                style={{ width: '25rem' }}
            >
                <Card.Body>
                    <h4>{product.title}</h4>
                    <CardImage 
                     width={"100px"}
                     height={"100px"}
                    url={product.image} alt={product.title} />
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
            </Card>


      
    );
};

export default ProductInfo;