import React from 'react';

const currentYear = new Date().getFullYear()

function SiteFooter(props) {
  return (
    <footer id="bottom" className="page-micro fine-print">
      <ul className="list-inline--delimited">
        <li>&copy; {currentYear} David Minnerly</li>
        <li><a href="https://github.com/vocksel/my-website">Website Source</a></li>
        <li>Background from <a href="http://ommwriter.com">OmmWriter</a></li>
      </ul>
    </footer>
  )
}

export default SiteFooter;
