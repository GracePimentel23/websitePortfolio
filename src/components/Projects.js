import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectsSection = styled.section`
  padding: 60px 10%;
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1),
              0 0 30px rgba(33, 150, 243, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(33, 150, 243, 0.1);
  display: ${props => props.visible ? 'block' : 'none'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15),
                0 0 40px rgba(33, 150, 243, 0.2);
    border-color: rgba(33, 150, 243, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1),
              0 0 20px rgba(33, 150, 243, 0.1);
  border: 1px solid rgba(33, 150, 243, 0.1);
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15),
                0 0 30px rgba(33, 150, 243, 0.2);
    border-color: rgba(33, 150, 243, 0.2);
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1),
              0 0 20px rgba(33, 150, 243, 0.1);
  border: 1px solid rgba(33, 150, 243, 0.1);
`;

const SlideshowImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
  opacity: ${props => props.active ? 1 : 0};
  position: absolute;
  top: 0;
  left: 0;
`;

const SlideshowControls = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
`;

const SlideshowDot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? '#2196f3' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#1976d2' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  background: white;
  position: relative;
  z-index: 2;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a237e;
  font-weight: 600;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: #2196f3;
  }
`;

const ProjectDescription = styled.p`
  color: #546e7a;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Tag = styled.span`
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(33, 150, 243, 0.1);

  &:hover {
    background: #bbdefb;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.2);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#2196f3' : '#e1f5fe'};
  color: ${props => props.active ? 'white' : '#0288d1'};
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

const projects = [
  {
    title: "Personalized Web Platform",
    description: "A dynamic, personalized web platform that adapts content based on user preferences, integrating back-end data processing with a front-end React-based interface.",
    image: process.env.PUBLIC_URL + '/images/Grace_Portfolio_SC.png',
    tags: ["React", "Java", "PHP", "MySQL", "CSS", "HTML"],
    date: "Aug 2024 - Present"
  },
  {
    title: "C# Web Service Consumer",
    description: "A C# front-end application that interacts with RESTful services provided by the iSchool API, featuring enhanced UI and proper API integration.",
    images: [
      process.env.PUBLIC_URL + '/images/iSchool_1.png',
      process.env.PUBLIC_URL + '/images/iSchool_2.png',
      process.env.PUBLIC_URL + '/images/iSchool_3.png',
      process.env.PUBLIC_URL + '/images/iSchool_4.png',
      process.env.PUBLIC_URL + '/images/iSchool_5.png'
    ],
    tags: ["C#", "AJAX", "Bootstrap", "jQuery", "HTML", "CSS", "JavaScript"],
    date: "Dec 2024"
  }
];

const Projects = () => {
  const { ref: sectionRef, controls: sectionControls, variants: sectionVariants } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [activeSlides, setActiveSlides] = React.useState({});

  // Initialize slideshow state for all projects with images
  React.useEffect(() => {
    const initialSlides = {};
    projects.forEach((project, index) => {
      if (project.images) {
        initialSlides[index] = 0;
      }
    });
    setActiveSlides(initialSlides);
  }, []);

  // Set up intervals for slideshows
  React.useEffect(() => {
    const intervals = {};
    projects.forEach((project, index) => {
      if (project.images) {
        intervals[index] = setInterval(() => {
          setActiveSlides(prev => ({
            ...prev,
            [index]: (prev[index] + 1) % project.images.length
          }));
        }, 3000);
      }
    });
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  const allTags = React.useMemo(() => {
    const tags = new Set();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <ProjectsSection 
      id="projects"
      ref={sectionRef}
      as={motion.section}
      initial="hidden"
      animate={sectionControls}
      variants={sectionVariants}
    >
      <SectionTitle>Projects</SectionTitle>
      <FilterContainer>
        <FilterButton
          active={activeFilter === 'all'}
          onClick={() => handleFilterChange('all')}
        >
          All Projects
        </FilterButton>
        {allTags.map(tag => (
          <FilterButton
            key={tag}
            active={activeFilter === tag}
            onClick={() => handleFilterChange(tag)}
          >
            {tag}
          </FilterButton>
        ))}
      </FilterContainer>
      <ProjectsGrid>
        {projects.map((project, index) => {
          const projectIndex = projects.findIndex(p => p.title === project.title);
          const isVisible = activeFilter === 'all' || project.tags.includes(activeFilter);
          
          return (
            <ProjectCard
              key={project.title}
              custom={index}
              variants={projectVariants}
              initial="hidden"
              animate={sectionControls}
              visible={isVisible}
            >
              {project.images ? (
                <SlideshowContainer>
                  {project.images.map((img, imgIndex) => (
                    <SlideshowImage
                      key={imgIndex}
                      src={img}
                      alt={`${project.title} - Slide ${imgIndex + 1}`}
                      active={imgIndex === (activeSlides[projectIndex] || 0)}
                    />
                  ))}
                  <SlideshowControls>
                    {project.images.map((_, dotIndex) => (
                      <SlideshowDot
                        key={dotIndex}
                        active={dotIndex === (activeSlides[projectIndex] || 0)}
                        onClick={() => setActiveSlides(prev => ({
                          ...prev,
                          [projectIndex]: dotIndex
                        }))}
                      />
                    ))}
                  </SlideshowControls>
                </SlideshowContainer>
              ) : (
                <ProjectImage src={project.image} alt={project.title} />
              )}
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagsContainer>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TagsContainer>
              </ProjectContent>
            </ProjectCard>
          );
        })}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 