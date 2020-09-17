import React from 'react';
import loading from '../../assets/loading.gif';
import './loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;
