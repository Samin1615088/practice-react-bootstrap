import React from 'react';
import { Button, Card, Image } from 'react-bootstrap/';


const News = (props) => {
    const { title, content, description, urlToImage } = props.article;
    console.log(urlToImage);
    return (
        <div className='mt-4'>
            <Card className='w-75'>
                <Card.Header>{description}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{content}</Card.Text>
                    <Image src={urlToImage} className='w-25' rounded />
                </Card.Body>
                <Card.Footer className='text-center'>
                    <Button variant="success" className="w-25">Click for Detailed Report</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default News;