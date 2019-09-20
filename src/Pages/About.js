import React from 'react';
import { getStringByLineFromJSON } from '../Helpers/JsonHelper';

const aboutMe = { 
  name: 'Sadi Mahmud', 
  home: 'Mirpur, Dhaka, Bangladesh',
  education: [
    'Notre Dame College',
    'Islamic University of Technology',
    'University of Dhaka'
  ],
  job: 'Full Stack Software Engineer',
  hobby: [
    'Travelling',
    'Gaming',
    'Wikipedia'
  ],
  leisure: [
    'Netflix',
    'Hackernoon/medium/toptal Articles',
    'goal.com/allfootball-app'
  ]
}

const AboutMe = () => (
  <div>
    <pre dangerouslySetInnerHTML={{__html: getStringByLineFromJSON(aboutMe, 2)}}>
    </pre>
  </div>
)

export default AboutMe;