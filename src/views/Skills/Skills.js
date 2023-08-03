import React from "react";
import SkillBox from '../../Components/SkillBox/SkillBox'
import "./Skills.css";
function Skills() {
    let detail = [
        {
            id: 'i1',
            title: 'HTML',
            val: 90
        },
        {
            id: 'i2',
            title: 'CSS',
            val: 80
        },
        {
            id: 'i3',
            title: 'JavaScript',
            val: 85
        },
        {
            id: 'i4',
            title: 'Tailwind',
            val: 90
        },
        {
            id: 'i5',
            title: 'React',
            val: 90
        },
        {
            id: 'i6',
            title: 'Node',
            val: 90
        },
        {
            id: 'i7',
            title: 'Express',
            val: 85
        },
        {
            id: 'i8',
            title: 'MongoDB',
            val: 90
        },
        
    ]
    return (
        <section id="skill">
        <div className="skill-content">
            <h1>Skills</h1>
            <div className="skill-description">
                <SkillBox item={detail} />
            </div>
        </div>
        </section>
    )
}
export default Skills;
