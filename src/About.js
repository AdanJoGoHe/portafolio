import React from 'react';
import './About.css';
import StarRating from './StarRating';

const skills = [
    { name: 'Java', rating: 4 },
    { name: 'Spring', rating: 4 },
    { name: 'C#', rating: 3 },
    { name: 'Python', rating: 3 },
    { name: 'TypeScript', rating: 3 },
];

const tools = [
    { name: 'JetBrains Suit', rating: 4 },
    { name: 'Jira', rating: 4 },
    { name: 'TeamCity', rating: 3 },
    { name: 'Jenkins', rating: 4 },
    { name: 'VSCode', rating: 3 },
];

function About() {
    return (
        <div className="about" id="about">
            <div className="presentation">
                <h1>About</h1>
                <p className="presentation-text">
                    I am a passionate programmer who loves technology, strives to be responsible, and is eager to learn new things.
                    Throughout my career, I have consistently shown dedication to my projects,
                    always seeking to improve and stay up-to-date with the latest technological advancements.
                    My commitment to excellence has led me to develop expertise in various programming languages and tools,
                    allowing me to create innovative solutions for a wide range of applications.
                </p>
                <p className="presentation-text">
                    With a strong foundation in problem-solving, communication, and teamwork,
                    I am confident in my ability to tackle any challenge that comes my way.
                    My enthusiasm for learning and sharing knowledge has not only propelled my professional growth
                    but has also allowed me to contribute positively to the teams and communities I am part of.
                </p>
                <p className="presentation-text">
                    As a developer, I understand the importance of staying adaptable and embracing change.
                    My curiosity and drive for continuous improvement have enabled me to excel in various roles and environments.
                    I am excited to continue exploring new horizons and making a meaningful impact in the world of technology.
                </p>
            </div>
            <div className="about-sections">
                <div className="skills-section">
                    <h2>Skills</h2>
                    {skills.map((skill) => (
                        <div key={skill.name} className="skill">
                            {skill.name} <StarRating rating={skill.rating} />
                        </div>
                    ))}
                </div>
                <div className="tools-section">
                    <h2>Tools</h2>
                    {tools.map((tool) => (
                        <div key={tool.name} className="tool">
                            {tool.name} <StarRating rating={tool.rating} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
