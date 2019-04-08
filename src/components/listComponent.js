import React from 'react';

export function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  <li>
    <p>
    {number.name}<br/>
    </p>
  </li>
);
return (
  <div>
  LIST:<br/>
  <ul>{listItems}</ul>
  </div>
);
}


// Index: {number.index}<br/>
// Title: {number.title}<br/>
// About: {number.about}<br/>
// Status: {number.status}<br/>


// "_id": "5ca7ddc6234111bcd4b4bb52",
// "index": 6,
// "title": "UNI",
// "about": "Officia irure esse incididunt incididunt laboris cupidatat nisi ut culpa minim aute nulla dolor aute. Esse ipsum velit culpa nulla eiusmod et adipisicing nulla. Qui enim aliquip enim do voluptate. Ut sunt minim pariatur in ad ad laboris minim fugiat nulla laboris. Occaecat fugiat reprehenderit laborum dolore officia. Exercitation adipisicing culpa ut culpa incididunt in aute.\r\n",
// "status": "inactive",
// "name": "Adela Sosa"
