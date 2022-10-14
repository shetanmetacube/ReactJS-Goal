import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap'
import { useEffect } from "react";

const Profile = () => {
    const { state } = useLocation()
    useEffect(() => {
        console.log(state)
        if (!state?.fileName ){
             alert("Register First!")
             return
        }
    }, [state])

    return (
        <>
            <Container style={{ "width": 500, marginTop: 50 }} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={state?.fileName? URL.createObjectURL(state?.fileName) : "#"} />
                    <Card.Body>
                        <Card.Title>Profile Details</Card.Title>
                        <Card.Text>
                            Name: {state?.name}
                        </Card.Text>
                        <Card.Text>
                            Email: {state?.email}
                        </Card.Text>
                        <Card.Text>
                            Age: {state?.age}
                        </Card.Text>
                        <Card.Text>
                            Phone: {state?.phone}
                        </Card.Text>
                        <Card.Text>
                            Gender: {state?.gender === 1 ? "Male" : state?.gender === 2 ? "Female" : "Other"}
                        </Card.Text>
                        <Card.Text>
                            Address: {state?.address}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Profile;