import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactSection = styled.section`
  padding: 60px 10%;
  min-height: 100vh;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 40px 5%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactInfo = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2),
              0 0 30px rgba(33, 150, 243, 0.3),
              0 0 50px rgba(33, 150, 243, 0.2);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(33, 150, 243, 0.1);
  width: 100%;
  max-width: 600px;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  &:hover {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3),
                0 0 40px rgba(33, 150, 243, 0.4),
                0 0 70px rgba(33, 150, 243, 0.3);
    border-color: rgba(33, 150, 243, 0.2);
  }

  h3 {
    font-size: 1.8rem;
    color: #1a237e;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #37474f;
    margin-bottom: 2rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
  
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #333;
    text-decoration: none;
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    cursor: pointer;
    
    @media (max-width: 768px) {
      padding: 0.75rem;
      font-size: 0.9rem;
    }
    
    &:hover {
      background: rgba(33, 150, 243, 0.1);
      color: #2196f3;
      transform: translateX(10px);
    }

    svg {
      font-size: 1.4rem;
      color: #2196f3;
      
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
  
  img {
    width: auto;
    height: 200px;
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      height: 150px;
    }
    
    &:hover {
      transform: scale(1.05);
      filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.25));
    }
  }
`;

const CopyNotification = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(33, 150, 243, 0.9);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    left: 10px;
    text-align: center;
    padding: 0.75rem 1rem;
  }
`;

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { ref: sectionRef, controls: sectionControls, variants: sectionVariants } = useScrollAnimation();
  const { ref: infoRef, controls: infoControls } = useScrollAnimation();
  const { ref: logoRef, controls: logoControls } = useScrollAnimation();

  const handleCopyEmail = (e) => {
    e.preventDefault();
    const email = 'pimentelgrace6@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    });
  };

  return (
    <ContactSection 
      id="contact"
      ref={sectionRef}
      as={motion.section}
      initial="hidden"
      animate={sectionControls}
      variants={sectionVariants}
    >
      <SectionTitle>Get In Touch</SectionTitle>
      <ContentWrapper>
        <ContactInfo
          ref={infoRef}
          initial={{ opacity: 0, y: 50 }}
          animate={infoControls}
          variants={sectionVariants}
        >
          <div>
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me through any of these platforms:</p>
            
            <SocialLinks>
              <a 
                href="#"
                onClick={handleCopyEmail}
              >
                <FaEnvelope /> pimentelgrace6@gmail.com
              </a>
              <a href="https://github.com/GracePimentel23" target="_blank" rel="noopener noreferrer">
                <FaGithub /> github.com/GracePimentel23
              </a>
              <a href="https://www.linkedin.com/in/grace-pimentel26" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> linkedin.com/in/grace-pimentel26
              </a>
            </SocialLinks>
          </div>
          
          <div>
            <h4>Location</h4>
            <p>Rochester, NY</p>
          </div>

          <LogoContainer
            ref={logoRef}
            initial={{ opacity: 0, y: 20 }}
            animate={logoControls}
            variants={sectionVariants}
          >
            <img src={process.env.PUBLIC_URL + '/images/graces_logo.png'} alt="Grace's Logo" />
          </LogoContainer>
        </ContactInfo>
      </ContentWrapper>

      {showNotification && (
        <CopyNotification
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Email copied to clipboard!
        </CopyNotification>
      )}
    </ContactSection>
  );
};

export default Contact; 