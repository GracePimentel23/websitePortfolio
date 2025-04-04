import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(225, 245, 254, 0.9) 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2),
              0 0 30px rgba(33, 150, 243, 0.3),
              0 0 50px rgba(33, 150, 243, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgba(33, 150, 243, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 80px 5% 2rem;
    height: auto;
    min-height: 100vh;
    justify-content: flex-start;
    overflow-y: auto;
  }
  
  &:hover {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3),
                0 0 40px rgba(33, 150, 243, 0.4),
                0 0 70px rgba(33, 150, 243, 0.3);
    border-color: rgba(33, 150, 243, 0.2);
  }
`;

const BackgroundText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${props => props.isName ? "'Mea Culpa', cursive" : "inherit"};
  font-size: ${props => props.size || (props.isName ? '20vw' : '8vw')};
  color: ${props => props.isName ? 'rgba(33, 150, 243, 0.1)' : 'rgba(33, 150, 243, 0.03)'};
  white-space: nowrap;
  z-index: 0;
  pointer-events: none;
  text-align: center;
  line-height: 1;
  letter-spacing: ${props => props.isName ? '-2px' : 'normal'};
  font-weight: ${props => props.isName ? 'normal' : '300'};
`;

const FloatingRoles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Role = styled(motion.div)`
  position: absolute;
  font-size: 1.4rem;
  color: #1976d2;
  font-weight: 500;
  opacity: 0.8;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform-origin: center;
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
  padding-right: 6rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 2rem;
    text-align: center;
    order: 2;
    width: 100%;
  }
`;

const HeadshotWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin-left: 6rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0 auto 2rem;
    order: 1;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.2));
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    z-index: -1;
    transform: rotate(15deg);
    transition: all 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(33, 150, 243, 0.1));
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    z-index: -2;
    transform: rotate(-15deg);
    transition: all 0.3s ease;
  }
  
  &:hover {
    &::before {
      transform: rotate(30deg) scale(1.05);
    }
    
    &::after {
      transform: rotate(-30deg) scale(0.95);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    transition: all 0.3s ease;
    filter: brightness(1.1) contrast(1.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2),
                0 0 40px rgba(33, 150, 243, 0.2);
    
    &:hover {
      transform: scale(1.05);
      filter: brightness(1.2) contrast(1.2);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3),
                  0 0 60px rgba(33, 150, 243, 0.3);
    }
  }
`;

const AnimatedText = styled(motion.div)`
  font-size: ${props => props.isName ? '4rem' : '1.25rem'};
  font-weight: ${props => props.isName ? '800' : '400'};
  margin-bottom: ${props => props.isName ? '2rem' : '1rem'};
  background: ${props => props.isName ? 'linear-gradient(45deg, #2196f3, #21cbf3)' : 'none'};
  -webkit-background-clip: ${props => props.isName ? 'text' : 'none'};
  -webkit-text-fill-color: ${props => props.isName ? 'transparent' : 'inherit'};
  letter-spacing: ${props => props.isName ? '-1px' : 'normal'};
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: ${props => props.isName ? '2.5rem' : '1rem'};
    margin-bottom: ${props => props.isName ? '1.5rem' : '0.75rem'};
  }
  
  span {
    display: block;
    color: ${props => props.isName ? 'inherit' : '#666'};
    opacity: ${props => props.isName ? 1 : 0.9};
  }
`;

const AboutContainer = styled(motion.div)`
  margin-top: 3rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2),
              0 0 30px rgba(33, 150, 243, 0.3),
              0 0 50px rgba(33, 150, 243, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgba(33, 150, 243, 0.1);
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  &:hover {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3),
                0 0 40px rgba(33, 150, 243, 0.4),
                0 0 70px rgba(33, 150, 243, 0.3);
    border-color: rgba(33, 150, 243, 0.2);
  }
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(45deg, #2196f3, #21cbf3);
  border-radius: 30px;
  text-decoration: none;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3),
              0 0 20px rgba(33, 150, 243, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 1rem;
    margin-top: 1.5rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(33, 150, 243, 0.4),
                0 0 30px rgba(33, 150, 243, 0.3),
                0 0 50px rgba(33, 150, 243, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
    background: linear-gradient(45deg, #1976d2, #1e88e5);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 10px rgba(33, 150, 243, 0.3);
  }
`;

const backgroundTitles = [
  { text: "Grace Pimentel", direction: "right", isName: true, duration: 25, y: -20 },
  { text: "Web Developer", direction: "right", isName: false, duration: 12, y: -90, size: '15vw' },
  { text: "Software Engineer", direction: "left", isName: false, duration: 10, y: -60, size: '6vw' },
  { text: "Full-Stack", direction: "right", isName: false, duration: 14, y: 60, size: '12vw' },
  { text: "UI/UX Designer", direction: "left", isName: false, duration: 11, y: 90, size: '5vw' },
  { text: "Problem Solver", direction: "right", isName: false, duration: 13, y: 120, size: '10vw' },
];

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="home">
      {backgroundTitles.map((title, index) => (
        <BackgroundText
          key={index}
          isName={title.isName}
          size={title.size}
          initial={{ 
            x: title.direction === "left" ? "-100%" : "100%",
            y: `${title.y}%`,
            opacity: 0
          }}
          animate={{ 
            x: title.direction === "left" ? "100%" : "-100%",
            opacity: 1
          }}
          transition={{
            duration: title.duration,
            repeat: Infinity,
            ease: "linear",
            opacity: {
              duration: 0.5,
              delay: index * 0.1
            }
          }}
        >
          {title.text}
        </BackgroundText>
      ))}
      
      <ContentWrapper>
        <AnimatedText
          isName
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Grace Pimentel</span>
        </AnimatedText>
        
        <AboutContainer
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatedText>
            <span>
              Passionate web developer and software engineer with a keen eye for design and a drive for innovation. 
              I specialize in creating responsive, user-centric applications that combine elegant design with robust functionality. 
              My expertise spans full-stack development, with a particular focus on crafting intuitive user experiences 
              and scalable solutions.
            </span>
          </AnimatedText>
          <AnimatedText>
            <span>
              Currently pursuing a Bachelor of Science in Web and Mobile Computing at 
              Rochester Institute of Technology, expected to graduate in May 2026. 
              Actively seeking co-op opportunities to apply my skills in real-world projects 
              while continuing to expand my technical expertise.
            </span>
          </AnimatedText>
          <ContactButton
            href="#contact"
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Contact Me
          </ContactButton>
        </AboutContainer>
      </ContentWrapper>
      
      <HeadshotWrapper>
        <motion.img
          src={process.env.PUBLIC_URL + '/images/Grace_Headshot.png'}
          alt="Grace Pimentel"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        />
      </HeadshotWrapper>
    </HeroSection>
  );
};

export default Hero; 