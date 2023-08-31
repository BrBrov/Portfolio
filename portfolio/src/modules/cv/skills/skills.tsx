import {Component} from 'react';
import './skills.scss';
import {title, skills } from '../../../materials/skills.ts';
import SkillData from '../../../models/skills-model.ts';
import Skill from './skill/skill.tsx';

export default class Skills extends Component {
  render() {
    const skillsElems = skills.map(( skill: SkillData, id: number) => (
      <Skill key = { id } { ...skill }/>
    ));
    return (
      <>
        <div className='skills'>
          <div className='skills__title-wrapper'>
            <span className='skills__title'>{ title }</span>
          </div>
          <div className='skills__info-wrapper'>
            { skillsElems }
          </div>
        </div>
      </>
    );
  }
}