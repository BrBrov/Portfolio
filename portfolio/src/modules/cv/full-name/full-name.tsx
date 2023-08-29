import {Component} from 'react';
import './full-name.scss';

export default class FullName extends Component {
  render() {
    return (
      <>
        <div className='full-name'>
          <span className='full-name__name'>Henadzi</span>
          <span className='full-name__surname'>Vasukovich</span>
        </div>
      </>
    );
  }
}