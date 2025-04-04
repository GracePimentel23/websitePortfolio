import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 120px 10%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 1;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  color: #1a237e;
  position: relative;
  padding-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #2196f3, #64b5f6);
    border-radius: 2px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
`;

const TextContent = styled.div`
  p {
    color: #37474f;
    line-height: 1.8;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const ExperienceSection = styled.div`
  margin-top: 3rem;
`;

const ExperienceSectionTitle = styled.h4`
  font-size: 1.8rem;
  color: #1a237e;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(33, 150, 243, 0.2);
`;

const ExperienceItem = styled.div`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(33, 150, 243, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border-color: rgba(33, 150, 243, 0.2);
  }
`;

const ExperienceItemTitle = styled.h5`
  font-size: 1.6rem;
  color: #1a237e;
  margin-bottom: 0.8rem;
`;

const ExperienceDate = styled.span`
  display: block;
  color: #2196f3;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ExperienceDescription = styled.p`
  color: #546e7a;
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const SkillsSection = styled.div`
  margin-top: 3rem;
`;

const SkillsTitle = styled.h4`
  font-size: 1.8rem;
  color: #1a237e;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(33, 150, 243, 0.2);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const SkillItem = styled.div`
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(33, 150, 243, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border-color: rgba(33, 150, 243, 0.2);
  }
`;

const SkillTitle = styled.h5`
  font-size: 1.3rem;
  color: #1a237e;
  margin-bottom: 0.8rem;
`;

const SkillDescription = styled.p`
  color: #546e7a;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const InfoSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(33, 150, 243, 0.15),
              0 0 40px rgba(33, 150, 243, 0.2);
  border: 1px solid rgba(33, 150, 243, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #333;
    text-decoration: none;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(33, 150, 243, 0.05);
      color: #2196f3;
      transform: translateX(5px);
    }

    svg {
      color: #2196f3;
      font-size: 1.2rem;
    }
  }
`;

const Objective = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: #1a237e;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    color: #37474f;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const Education = styled.div`
  h3 {
    color: #1a237e;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  h4 {
    color: #2196f3;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #37474f;
    line-height: 1.6;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const Hobbies = styled.div`
  h3 {
    color: #1a237e;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    color: #37474f;
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    &:before {
      content: "💙";
      color: #2196f3;
      font-size: 1.2rem;
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
`;

const About = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    const email = 'pimentelgrace6@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    });
  };

  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <ContentWrapper>
        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            y: -10,
            boxShadow: '0 20px 60px rgba(33, 150, 243, 0.3), 0 0 80px rgba(33, 150, 243, 0.4)',
            borderColor: 'rgba(33, 150, 243, 0.4)'
          }}
        >
          <ContactInfo>
            <a 
              href="#"
              onClick={handleCopyEmail}
              style={{ cursor: 'pointer' }}
            >
              <FaEnvelope /> pimentelgrace6@gmail.com
            </a>
            <a href="tel:917-391-3592">
              <FaPhone /> 917-391-3592
            </a>
            <a href="https://github.com/GracePimentel23" target="_blank" rel="noopener noreferrer">
              <FaGithub /> github.com/GracePimentel23
            </a>
            <a href="https://www.linkedin.com/in/grace-pimentel26" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> linkedin.com/in/grace-pimentel26
            </a>
          </ContactInfo>
          
          <Objective>
            <h3>Objective</h3>
            <p>
              Actively pursuing a co-op opportunity in web design and software development, aiming to apply my skills while enhancing my
              expertise. I offer a strong combination of technical proficiency and problem-solving abilities to create innovative solutions for
              web and mobile design projects.
            </p>
          </Objective>
          
          <Education>
            <h3>Education</h3>
            <h4>Rochester Institute of Technology</h4>
            <p>Bachelor of Science in Web and Mobile Computing</p>
            <p>Expected May 2026</p>
          </Education>
        </InfoSection>

        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            y: -10,
            boxShadow: '0 20px 60px rgba(33, 150, 243, 0.3), 0 0 80px rgba(33, 150, 243, 0.4)',
            borderColor: 'rgba(33, 150, 243, 0.4)'
          }}
        >
          <Hobbies>
            <h3>Hobbies</h3>
            <ul>
              <li>Playing the Ukulele</li>
              <li>Cooking</li>
              <li>Digital Art with Procreate</li>
            </ul>
          </Hobbies>

          <TextContent>
            <p>
              I am a passionate web developer and software engineer with a strong foundation in creating innovative digital solutions. 
              My journey in technology is driven by a desire to build impactful applications that make a difference.
            </p>
          </TextContent>
        </InfoSection>
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
    </AboutSection>
  );
};

export default About; 