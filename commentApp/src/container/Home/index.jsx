import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const [active, setActive] = useState(0)
    let commentArr = [
        {
            id: 1,
            name: "Comment 1",
            title: "title Comment 1",
            des: "Comment 1 Description here...."
        },
        {
            id: 2,
            name: "Comment 2",
            title: "title Comment 2",
            des: "Comment 2 Description here...."
        },
        {
            id: 3,
            name: "Comment 3",
            title: "title Comment 3",
            des: "Comment 3 Description here...."
        },
        {
            id: 4,
            name: "Comment 4",
            title: "title Comment 4",
            des: "Comment 4 Description here...."
        },
        {
            id: 5,
            name: "Comment 5",
            title: "title Comment 5",
            des: "Comment 5 Description here...."
        }
    ]

    const showDes = (index) => {
        setActive(index)
    }

    return (
        <Container className='containerMain'>
            <h1 className='textCenter'>Comment Box</h1>
            <hr></hr>
            <Row style={{marginTop: -17}}>
                <Col>
                    {commentArr.map((item, index) => (
                        <Row key={index} className='border' onClick={() => showDes(index)}>
                            <h2 >{item.name}</h2>
                        </Row>
                    ))}
                </Col>
                <Col>
                    <Row className='right'>
                        <h4>{commentArr[active].title}</h4>
                        <hr></hr>
                    </Row>
                    <Row className='rightDes'>
                        <h4>{commentArr[active].des}</h4>
                    </Row>
                </Col>


            </Row>

        </Container>
    )
};

export default Home;