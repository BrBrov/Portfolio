import {Component, ReactElement} from 'react';
import './summary-info.scss';
import SummaryInfo from '../../../models/summary-models.ts';
import Contacts from './contacts/contacts.tsx';
import summary from '../../../materials/contacts.ts';
import photo from '../../../assets/photo.jpg';

export default class Summary extends Component<SummaryInfo> {

  public render(): ReactElement {
    return (
      <>
        <div className='summary__info'>
          <div className='summary__photo'>
            <img className='summary__image' srcSet={ photo } alt='Author photo'/>
          </div>
          < Contacts { ...summary }/>
        </div>
      </>
    );
  }
}