import React, { Fragment } from 'react';
import pikachu from '../images/pikachu.png';

export const Image = () => (
  <Fragment>
    <h1>Image</h1>
    <img src={pikachu} width="300" alt="A suprised Pikachu" />
  </Fragment>
);
