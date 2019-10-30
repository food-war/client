import React, { Component } from 'react';
import axios from 'axios';
import { DEV_API_URL, LOCAL_URL } from './config';

export default class App extends Component {
  onClickTest = async () => {
    let requestURL = `${DEV_API_URL}/api/user/test`;

    try {
      await axios
        .get(requestURL)
        .then(res => {
          alert('success');
          console.log(res);
        })
        .catch(error => {
          alert('failed');
          console.log(error);
        });
    } catch (e) {
      alert('catch');
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <h1>Food war</h1>
        <button onClick={this.onClickTest}>통신 테스트</button>
      </div>
    );
  }
}
