import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,  Row, Form, Col, Container,Card} from 'react-bootstrap';
import './Userside.css';


export default function Userside(){

    const [user,setUser] = useState({
      FirstName:'',
      LastName:'',
      Email:'',
      Password:'',
      City:'',
      Zip: '',
  });

    const getUserData = (e) =>{
        setUser({
            ...user, [e.target.name]:e.target.value
        })
    }
  
    const postData = async(e) =>{ e.preventDefault();
      const {FirstName,LastName,Email,Password,City,Zip} = user;  
      if(FirstName && LastName && Email && Password && City && Zip){ 
      const res  = await fetch(
           "https://something-unique-aaedb-default-rtdb.firebaseio.com/database.json", 
           { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
             FirstName,
             LastName,
             Email,
             Password,
             City,
             Zip
            }),
         }); 
        if (res){
          setUser({
            FirstName:'',
            LastName:'',
            Email:'',
            Password:'',
            City:'',
            Zip: '',
              });
        alert("Data Stored Successfully")
        }
      }else{
        alert("Please fill all the fields")
      }
    }
       return(
       <Container>
    <Card className="card">
        <div>
       <h1 className = 'heading' align = 'center'>Profile Details</h1>
           </div>
    <Form method = 'POST'>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" name = "FirstName" placeholder="Enter First Name" value = {user.FirstName} onChange = {getUserData}/>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Last Name" name = "LastName" value = {user.LastName} onChange = {getUserData} />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="name" placeholder="Enter your e-mail" name = 'Email' value = {user.Email} onChange = {getUserData}/>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="last name" placeholder="Enter your password" name = 'Password' value = {user.Password} onChange = {getUserData}/>
      </Form.Group>
    </Row>
    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Internship</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>Data Science</option>
          <option>Web Development</option>
        </Form.Select>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Skills</Form.Label>
      <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>Python</option>
          <option>R</option>
          <option>Machine Learning</option>
          </Form.Select>
    </Form.Group>
  
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control name = 'City' value = {user.City} onChange = {getUserData}/>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>Haryana</option>
          <option>Delhi</option>
          <option>Rajasthan</option>
        </Form.Select>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control name = 'Zip' value = {user.Zip} onChange = {getUserData}/>
      </Form.Group>
    </Row>
    
    <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Upload your resume</Form.Label>
    <Form.Control type="file"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Preference</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                inline
                label="In-office"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
            />
            <Form.Check
                inline
                label="Work From Home"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
            />
            </div>
            ))}
            </Form.Group>
    <Button variant="primary" type="submit" size = 'xxl' onClick = {postData}>
      Submit
    </Button>
  </Form>
  </Card>
  </Container>
   )    
}

