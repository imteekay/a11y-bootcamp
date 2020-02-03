import React, { Fragment } from 'react';

export const Form = () => (
  <Fragment>
    <h1>Form</h1>

    <label htmlFor="name">Nome:</label>
    <input id="name" name="name" placeholder="Ex: TK" />

    <label htmlFor="age">Idade:</label>
    <input id="age" name="age" type="number" />

    <fieldset>
      <legend>Hobbies:</legend>

      <input type="checkbox" name="hobbie" id="hobbie1" value="coding" />
      <label htmlFor="hobbie1">Coding</label>

      <input type="checkbox" name="hobbie" id="hobbie2" value="reading" />
      <label htmlFor="hobbie2">Reading</label>

      <input type="checkbox" name="hobbie" id="hobbie3" value="writing" />
      <label htmlFor="hobbie3">Writing</label>
    </fieldset>

    <fieldset>
      <legend>OS:</legend>

      <input type="radio" name="os" id="os1" value="windows" />
      <label htmlFor="os1">Windows</label>

      <input type="radio" name="os" id="os2" value="mac" />
      <label htmlFor="os2">Mac</label>

      <input type="radio" name="os" id="os3" value="linux" />
      <label htmlFor="os3">Linux</label>
    </fieldset>

    <div>
      <label htmlFor="favcity">Favorite city?</label>
      <select id="favcity" name="favcity">
        <option value="1">Amsterdam</option>
        <option value="2">Hong Kong</option>
        <option value="3">London</option>
        <option value="4">New York</option>
        <option value="5">Sao Paulo</option>
        <option value="6">Tokyo</option>
      </select>
    </div>
  </Fragment>
);
