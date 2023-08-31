import {Component} from 'react';
import './skill.scss';
import SkillData from '../../../../models/skills-model.ts';

export default class Skill extends Component<SkillData> {
  render() {
  const { name, value} = this.props;

  const id: string = `progress__${name}`;
  return (
      <div className='skill'>
        <label htmlFor={ id } className='skill__name'>{ name }</label>
        <div className='skill__value-wrapper'>
          <progress id={ id } className='skill__progress' value={ value } max='100'>{ value }</progress>
          <span className='skill__value'>{ `${value}%` }</span>
        </div>
      </div>
    );
  }
}