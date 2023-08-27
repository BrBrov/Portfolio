import {Component, ReactElement} from 'react';
import './summary-info.scss';
import SummaryInfo from '../../models/summary-models.ts';

export default class Summary extends Component<SummaryInfo> {

  public render(): ReactElement {
    console.dir(this);
    return (
      <>
        <div className='summary__info'>
          <div className='summary__photo'>
            <img className='summary__image' srcSet={ this.props.photo } alt='Author photo'/>
          </div>
          <div className='summary__contacts'></div>
        </div>
      </>
    );
  }
}