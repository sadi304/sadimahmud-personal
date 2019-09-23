import React from 'react';
import { getStringByLineFromJSON } from '../Helpers/JsonHelper';

const portfolioItems = [
  {
    '...': 'Will update later.'
  }
]

const Portfolio = () => (
  <div>
    <pre dangerouslySetInnerHTML={{__html: getStringByLineFromJSON(portfolioItems)}}>
    </pre>
  </div>
)

export default Portfolio;