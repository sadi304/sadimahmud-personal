import React from 'react';
import { getStringByLineFromJSON } from '../Helpers/JsonHelper';

const contacts = {
  shoutout: "Reach me via these options",
  shoutoutAgain: "Anytime!",
  email: "<a href=mailto:sadisagar@gmail.com>sadisagar@gmail.com</a>",
  github: "<a target=_blank href=https://github.com/sadi304>sadi304</a>",
  twitter: "<a target=_blank href=https://twitter.com/sadi304>sadi304</a>"
}

const Contact = () => (
  <div>
    <pre dangerouslySetInnerHTML={{__html: getStringByLineFromJSON(contacts)}}>
    </pre>
  </div>
)

export default Contact;