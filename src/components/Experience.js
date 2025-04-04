import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceSection = styled.section`
  padding: 60px 10%;
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2),
              0 0 30px rgba(33, 150, 243, 0.3),
              0 0 50px rgba(33, 150, 243, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgba(33, 150, 243, 0.1);
  
  &:hover {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3),
                0 0 40px rgba(33, 150, 243, 0.4),
                0 0 70px rgba(33, 150, 243, 0.3);
    border-color: rgba(33, 150, 243, 0.2);
  }
`;

const Experience = styled.div`
  h3 {
    color: #333;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  
  .experience-item {
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    border-left: 3px solid #007bff;
    
    h4 {
      color: #007bff;
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }
    
    .date {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    
    ul {
      color: #666;
      padding-left: 1.5rem;
      
      li {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const Skills = styled.div`
  h3 {
    color: #333;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  
  .skill-category {
    margin-bottom: 1.5rem;
    
    h4 {
      color: #007bff;
      margin-bottom: 0.75rem;
      font-size: 1.25rem;
    }
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: #e1f5fe;
  color: #0288d1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #0288d1;
    color: white;
    transform: translateY(-2px);
  }
`;

const ExperienceComponent = () => {
  const { ref: sectionRef, controls: sectionControls, variants: sectionVariants } = useScrollAnimation();
  const { ref: card1Ref, controls: card1Controls, variants: cardVariants } = useScrollAnimation();
  const { ref: card2Ref, controls: card2Controls } = useScrollAnimation();

  return (
    <ExperienceSection 
      id="experience"
      ref={sectionRef}
      as={motion.section}
      initial="hidden"
      animate={sectionControls}
      variants={sectionVariants}
    >
      <SectionTitle>Experience & Skills</SectionTitle>
      <ContentWrapper>
        <ExperienceCard
          ref={card1Ref}
          initial="hidden"
          animate={card1Controls}
          variants={cardVariants}
        >
          <Experience>
            <h3>Experience</h3>
            
            <div className="experience-item">
              <h4>CODE NATION - Web Designer</h4>
              <div className="date">June 2020 - Aug 2020</div>
              <ul>
                <li>Developed proficiency in JavaScript through creative projects focused on interactive art.</li>
                <li>Gained foundational skills in HTML and CSS, applying them to build basic web layouts.</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h4>GOOGLE: CODE NEXT - Software Developer/Web Designer</h4>
              <div className="date">July 2021 - Aug 2021</div>
              <ul>
                <li>Strengthened Python skills through hands-on learning, with a focus on using music as a medium for coding.</li>
                <li>Worked closely with team members to develop optimized solutions to project requirements.</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h4>CODE PATH - Software Developer/Web Designer</h4>
              <div className="date">July 2022 - Aug 2022</div>
              <ul>
                <li>Deepened understanding of Python while exploring new strategies for writing clean, efficient Python code.</li>
                <li>Applied advanced problem-solving skills to tackle real-world coding challenges.</li>
              </ul>
            </div>
          </Experience>
        </ExperienceCard>
        
        <ExperienceCard
          ref={card2Ref}
          initial="hidden"
          animate={card2Controls}
          variants={cardVariants}
        >
          <Skills>
            <h3>Skills</h3>
            <div className="skill-category">
              <h4>Software</h4>
              <SkillTags>
                {["Microsoft Office", "Visual Studio Code", "Figma", "Wireshark", "FlutterFlow", "FileZilla", "GitHub", "Linux", "AWS", "ASP.NET Core"].map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </div>
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <SkillTags>
                {["HTML", "CSS", "Java", "JavaScript", "PHP", "SQL", "Python", "MySQL", "React", "Vim/Vi", "C#"].map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </div>
            <div className="skill-category">
              <h4>Languages</h4>
              <SkillTags>
                {["English", "Spanish"].map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </div>
          </Skills>
        </ExperienceCard>
      </ContentWrapper>
    </ExperienceSection>
  );
};

export default ExperienceComponent; 