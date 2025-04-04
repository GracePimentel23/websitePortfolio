import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25),
              0 0 30px rgba(33, 150, 243, 0.3),
              0 0 50px rgba(33, 150, 243, 0.2);
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(33, 150, 243, 0.1);
  
  @media (max-width: 768px) {
    height: auto;
    padding: 10px 15px;
    flex-direction: column;
    align-items: center;
  }
  
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.35),
                0 0 40px rgba(33, 150, 243, 0.4),
                0 0 70px rgba(33, 150, 243, 0.3);
    border-bottom-color: rgba(33, 150, 243, 0.2);
  }
`;

const MyLogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
  
  img {
    height: 80px;
    width: auto;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      height: 60px;
    }
    
    &:hover {
      transform: scale(1.05);
      filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15));
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: #007bff;
  }

  &.active {
    color: #007bff;
    background: rgba(0, 123, 255, 0.1);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <MyLogo
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img src={process.env.PUBLIC_URL + '/images/logo_GrowthPotential.png'} alt="Growth & Potential Logo" />
      </MyLogo>
      <NavLinks>
        <NavLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </NavLink>
        <NavLink
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Experience
        </NavLink>
        <NavLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </NavLink>
        <NavLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;