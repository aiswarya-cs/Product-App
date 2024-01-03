import React, { useState } from 'react'
import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap';
import {Datas} from "./Productsdata"
import "./Product.css"

const Products = () => {
   
    const [Datalist, setDatalist] = useState(Datas);
    
  const clickedMe=()=> {
      alert("Added to cart")
    }
    
    const decQty = (id) => {
        const newdata = Datalist.map((i) =>
            i.id === id && i.Qty > 1 ? { ...i, Qty: i.Qty - 1 } : i
        );
        setDatalist(newdata);
    }

    const inccQty = (id) => {
        const newdata = Datalist.map((i) =>
            i.id === id ? { ...i, Qty: i.Qty + 1 } : i
        );
        setDatalist(newdata);
    }
    


  return (
    <>
    <container>
    <Navbar expand="lg"  className="bg-body-tertiary" 
    style={{
      zIndex:"1",
      position:"fixed",
      width:"100%"
    }}>
      <Container fluid>
        <Navbar.Brand className='nav-head'><span>Pr</span>oStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#card">Products</Nav.Link>
            <Nav.Link href="#">Contact US</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>

{/* ------------banner---------------- */}
    
    <div id="home" className='text-center col-lg-6' style={{
                    width: "100%",
                    height: "600px",
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("https://indianexpress.com/wp-content/uploads/2023/11/oneplus12.jpg?resize=1536,864")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                    
                   

                }}>
                    <div className='col-lg-6' style={{width:"50%", height: "600px", textAlign:"center",color:"#fff"}}>
                        <h1 >YOUR SUCCESS IN THE INDUSTRY IS OUR MISSION</h1>
                        <p>Actually, this is quite simple to achieve  because each time we help them in sorting out different accounting intricacies or save the day before filing the taxes, they are happy indeed.</p>
                    </div>
                </div>


{/* -------------card-------------- */}
    <div id="card" className='d-inline-flex row' style={{justifyContent:"space-evenly"}} >
       {Datalist.map((i)=>{
           return(
            <Card className='shadow  mb-2 bg-body rounded m-5' style={{ width: '17rem', marginTop:"20px",alignItems:"center", textAlign:"center"}} key={i.id} >
            <Card.Img style={{height:"200px", backgroundSize:"100% 100%"}} variant="top" src={require(`./Productassets/${i.image}.png`)}/>
            <Card.Body>
              <Card.Title>{i.model}</Card.Title>
              <Card.Text>{i.desc}</Card.Text>
              <h3>Price:₹{i.price}</h3>
              <div>
                  <p>
                  Qty:
                  <Button onClick={() => decQty(i.id)} className='m-1'>-</Button>{i.Qty}
                  <Button onClick={() => inccQty(i.id)} className='m-1'>+</Button> </p>
              </div>
              <Button className='ms-3' variant="primary" onClick={clickedMe}>Add to Cart</Button>
             
            
      </Card.Body>
    </Card>
           )
        })}
          
      
      </div> 
    

    </container>
    </>
  )
}

export default Products