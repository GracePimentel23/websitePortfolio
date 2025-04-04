import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.footer`
  /* A subtle gradient that matches my portfolio's theme */
  background: linear-gradient(to right, rgba(33, 150, 243, 0.05), rgba(33, 150, 243, 0.1));
  padding: 1.5rem;
  text-align: center;
  margin-top: 3rem;
  
  /* Adding a gentle border at the top */
  border-top: 1px solid rgba(33, 150, 243, 0.1);
  
  /* Making sure it stays at the bottom */
  position: relative;
  bottom: 0;
  width: 100%;
`;

const MySignature = styled.p`
  /* Using a friendly, readable color */
  color: #37474f;
  font-size: 0.95rem;
  margin: 0;
  letter-spacing: 0.5px;
  
  /* Making the year pop with my favorite blue */
  .year {
    color: #2196f3;
    font-weight: 500;
  }
  
  /* Adding a little hover effect just for fun */
  &:hover .year {
    text-decoration: underline;
  }
`;

// My personal footer component
const Footer = () => {
  // Getting the current year automatically
  const thisYear = new Date().getFullYear();
  
  return (
    <MyFooter>
      <MySignature>
        Made with ❤️ by Grace Pimentel © <span className="year">{thisYear}</span>
      </MySignature>
    </MyFooter>
  );
};

export default Footer; 