import React from 'react';
import { useParams } from 'react-router';
import useSkills from '../hooks/useSkills';

const SkillDetails = () => {
    const {skillId} =useParams()
    console.log(skillId)
    const {skills}=useSkills()
    console.log(skills)
    return (
        <div>
            <h1>skillId</h1>
        </div>
    );
};

export default SkillDetails;