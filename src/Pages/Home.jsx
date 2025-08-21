import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router";
import AboutUs from '../components/AboutUs';
import Products from './Products';

function Home() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Container className="homeContainer">
                <Row>
                    <Col md={6} className="bg-transparent text-white p-4">
                        <div className="topicContent">
                            <h1>Welcome To Paradise Nursery</h1>
                            <div className="divider"></div>
                            <p>Where Green Meets Serenity</p>
                        </div>
                        <Link to="/products">
                            <button className="get-started-button" >
                                Get Started
                            </button>
                        </Link>
                    </Col>
                    <Col md={6} className="bg-transparent text-white p-4">
                        <AboutUs />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
