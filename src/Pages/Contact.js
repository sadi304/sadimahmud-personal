import React from 'react';
import { getStringByLineFromJSON } from '../Helpers/JsonHelper';

const contacts = {
  shoutout: "Reach me via these options",
  shoutoutAgain: "Anytime!",
  info: "",
  email: "<a href=mailto:sadisagar@gmail.com>sadisagar@gmail.com</a>",
  github: "<a href=https://github.com/sadi304>sadi304</a>",
  twitter: "<a href=https://twitter.com/sadi304>sadi304</a>"
}

const Contact = () => (
  <div>
    <pre dangerouslySetInnerHTML={{__html: getStringByLineFromJSON(contacts)}}>
    </pre>
  </div>
)

export default Contact;