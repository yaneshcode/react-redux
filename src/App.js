import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { WelcomeClass } from './components/classComponent';
import { WelcomeFunction } from './components/functionComponent';
import { Clock } from './components/clockComponent';
import { Toggle } from './components/toggleComponent';
import { NumberList } from './components/listComponent';

const list =  [
{
  "_id": "5ca7ddc6922fe7718fbd073d",
  "index": 0,
  "title": "MOBILDATA",
  "about": "Magna eiusmod ullamco est elit laboris laborum cupidatat voluptate. Pariatur sint officia exercitation labore sit ea. Laborum consequat culpa occaecat consequat sit ut. Magna qui est velit id ipsum nisi culpa adipisicing incididunt laboris voluptate proident ipsum.\r\n",
  "status": "active",
  "name": "Hebert Glass"
},
{
  "_id": "5ca7ddc6690cf4169b2d9da8",
  "index": 1,
  "title": "ZIGGLES",
  "about": "Culpa Lorem nulla laborum cupidatat. Minim eiusmod culpa eu culpa aute deserunt anim. Ex magna tempor est officia eiusmod laborum Lorem. Veniam fugiat incididunt laborum non. Pariatur deserunt irure consequat ullamco mollit do velit tempor fugiat do commodo dolor magna.\r\n",
  "status": "active",
  "name": "Hooper Cotton"
},
{
  "_id": "5ca7ddc6370977fe4f53567c",
  "index": 2,
  "title": "NETPLODE",
  "about": "Ea aute proident labore irure irure irure cupidatat in labore officia reprehenderit dolor. Dolor mollit ut ad ipsum occaecat. Irure pariatur incididunt velit labore tempor et sit nostrud cupidatat adipisicing dolore eu reprehenderit dolore. Irure ex ea anim aute irure id.\r\n",
  "status": "active",
  "name": "Camacho Hubbard"
},
{
  "_id": "5ca7ddc64a71ede8815c9108",
  "index": 3,
  "title": "ZILLADYNE",
  "about": "Dolor fugiat exercitation incididunt elit reprehenderit est ullamco ad sint nulla laboris. Dolor dolore officia voluptate labore minim deserunt. Proident est ex ad eiusmod ad eiusmod sit dolore. Magna amet ex ullamco reprehenderit id. Eu eiusmod laborum adipisicing culpa excepteur exercitation nulla officia mollit. Sit officia cupidatat duis mollit aliquip veniam aute labore est ad ullamco irure adipisicing.\r\n",
  "status": "active",
  "name": "Lara Lamb"
},
{
  "_id": "5ca7ddc6a9220dd92c5c2db8",
  "index": 4,
  "title": "OATFARM",
  "about": "Nostrud minim pariatur culpa in magna anim enim veniam. Magna fugiat consectetur enim ullamco in ea eu mollit sint. Nulla laboris voluptate eu id amet in Lorem et dolor ad occaecat do ad laboris. Ea id culpa culpa irure.\r\n",
  "status": "active",
  "name": "Graves Dudley"
},
{
  "_id": "5ca7ddc679b1b66c8e740eac",
  "index": 5,
  "title": "ZILLA",
  "about": "Aliquip non amet elit proident ex exercitation reprehenderit. Do irure eiusmod consectetur exercitation nostrud proident non mollit ut nisi. Ipsum in consequat consequat ut. Laborum veniam esse duis fugiat sit consequat pariatur ex. Qui in in adipisicing laborum laborum. Ullamco culpa aute cillum adipisicing enim excepteur laboris deserunt aliquip deserunt.\r\n",
  "status": "active",
  "name": "Sandra Dixon"
},
{
  "_id": "5ca7ddc6234111bcd4b4bb52",
  "index": 6,
  "title": "UNI",
  "about": "Officia irure esse incididunt incididunt laboris cupidatat nisi ut culpa minim aute nulla dolor aute. Esse ipsum velit culpa nulla eiusmod et adipisicing nulla. Qui enim aliquip enim do voluptate. Ut sunt minim pariatur in ad ad laboris minim fugiat nulla laboris. Occaecat fugiat reprehenderit laborum dolore officia. Exercitation adipisicing culpa ut culpa incididunt in aute.\r\n",
  "status": "inactive",
  "name": "Adela Sosa"
}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Toggle/>

          <NumberList numbers={list}/>
          <WelcomeClass name="World"/>
          <WelcomeFunction name="World"/>
          <Clock/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
