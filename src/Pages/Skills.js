import React from 'react';
import { getStringByLineFromJSON } from '../Helpers/JsonHelper';

const skills = {
  languages: [
    'Javascript/ES2015+',
    'HTML5/CSS',
    'PHP',
    'Python',
    'Typescipt',
    'Golang',
    'Java',
    'SQL',
  ],
  'frameworks/libraries': [
    'ReactJS',
    'React Native',
    'Express/NodeJS',
    'Angular',
    'Laravel',
    'Django',
    'Ionic Framework',
    'HapiJS',
    'SailsJS',
    'Socket',
    'MySQL',
    'MongoDB',
    'jQuery',
    'WordPress'
  ]
}

const Skills = () => (
  <div>
    <pre dangerouslySetInnerHTML={{__html: getStringByLineFromJSON(skills)}}>
    </pre>
  </div>
)

export default Skills;