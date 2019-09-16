import React from 'react';
import { getStringByLineFromJSON } from '../Helpers/JsonHelper';

const portfolioItems = [
  {
    title: 'PTE Study Centre Tutorial',
    description: 'Bla',
    technologies: [
      'Laravel',
      'JQuery',
      'Bootstrap'
    ]
  }
]

const Portfolio = () => (
  <div>
    <pre dangerouslySetInnerHTML={{__html: getStringByLineFromJSON(portfolioItems)}}>
    </pre>
  </div>
)

export default Portfolio;