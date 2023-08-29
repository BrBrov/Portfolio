import {Component, Fragment} from 'react';
import CertData from '../../../../models/cert-model.ts';
import './certificate.scss';

export default class Certificate extends Component<CertData> {
  render() {
    const { name, link } = this.props;

    return (
      <Fragment>
        <li className='certificate__item'>
          <a className='certificate__link' href={ link }>{ name }</a>
        </li>
      </Fragment>
    );
  }
}