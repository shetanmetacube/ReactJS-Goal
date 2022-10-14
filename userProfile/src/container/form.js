import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PForm = () => {
    const [ name, setName ] = useState('Shetan');
    const [ email, setEmail] = useState('shetan.singh@metacube.com');
    const [ age, setAge] = useState('31');
    const [ phone, setPhone] = useState('9782623362');
    const [ address, setAddress] = useState('Ratanada, Jodhpur');
    const [ gender, setGender] = useState(0);
    const [fileName, setFileName] = useState("Add Profile Image");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
       navigate('/profile', {state: {name, email, age, phone, address, gender, fileName}})

    }

    const clear = (e) => {
        e.preventDefault();
        setName('')
        setEmail('')
        setAge('')
        setPhone('')
        setAddress('')
        setGender(0)
        setFileName('')
        
    }
    const setSex = (value) => {
        setGender(value)
    }
    return (
        <>
            <Container style={{ "width": 500, marginTop: 50 }} >
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)}/>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows="3" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                        <Form.Label>Select profile image</Form.Label>
                        <Form.Control
                            type="file"
                            className="custom-file-label"
                            id="inputGroupFile01"
                            label={fileName}
                            onChange={(e) => setFileName(e.target.files[0])}
                            custom
                        />
                    </Form.Group>


                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Label>Gender</Form.Label>    
                            <Form.Check
                                inline
                                label="Male"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                checked= {gender ===1 ? true : false}
                                onChange={() => setSex(1)}
                            />
                            <Form.Check
                                inline
                                label="Female"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                checked= {gender ===2 ? true : false}
                                onChange={() => setSex(2)}
                            />
                            <Form.Check
                                inline
                                name="group1"
                                /* disabled */
                                label="Other"
                                type={type}
                                id={`inline-${type}-3`}
                                checked= {gender ===3 ? true : false}
                                onChange={() => setSex(3)}
                            />
                        </div>
                    ))}

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    <button className='btn btn-outline-danger' onClick={clear}>Cancel</button>
                </Form>
            </Container>
        </>
    )
}

export default PForm;