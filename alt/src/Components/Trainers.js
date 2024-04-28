import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function Trainers() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5001/view")
            .then((result) => {
                result.json()
                .then((resp) => {
                    setUser(resp)
                })
            })
    },[])
    return (
        <>
            <div className='card-container'>
                <div className='card-box'>
                    {user.map((item) =>
                        <div className='card'>
                            <Card className='box' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={"../images/"+item.img} />
                                <Card.Body>
                                    <Card.Title className='nam'>{item.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.prof}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Experience - {item.exp}</Card.Subtitle>
                                    <Card.Text>
                                        {item.sub}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
