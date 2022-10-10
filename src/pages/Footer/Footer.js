import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer>
      <Container>
        <Row>
<Col xs={12} sm md lg xl xxl={3}>
  <h5>Contact Us</h5>
  <ul className='list-unstyled'>
    <li>Nigeria,</li>
    <li>Enugu,</li>
    <li>Mechanic WorkShop.</li>
    <li>+234-70-3568-6422</li>
  </ul>
</Col>
<Col xs={12} sm md lg xl xxl={3}>
  <h5>Company</h5>
  <ul className='list-unstyled'>
    <li>About</li>
    <li>Blog</li>
    <li>Press</li>
  </ul>
</Col>
<Col xs={12} sm md lg xl xxl={3}>
  <h5>Terms & Policies</h5>
  <ul className='list-unstyled'>
    <li>Policies</li>
    <li>Terms of use</li>
    <li>Code of Conduct</li>
    <li>Privacy</li>
  </ul>
</Col>
<Col xs={12} sm md lg xl xxl={3}>
  <div className='social'>
    <SocialIcon network="twitter" fgColor="#ff5a01" url="https://" style={{ height: 30, width: 30 }}/>
    <SocialIcon network="pinterest"  url="https://" style={{ height: 30, width: 30 }} />
    <SocialIcon network="facebook" fgColor="#ff5a01" url="https://" style={{ height: 30, width: 30 }}/>
    <SocialIcon network="whatsapp"  url="https://" style={{ height: 30, width: 30 }} />
  </div>
</Col>
        </Row>
        <div className='footer-bottom'>
          <p className="text-sm-center">
            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
          </p>
        </div>
      </Container>
      </footer>
    </>
  )
}

export default Footer
