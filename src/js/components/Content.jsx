import React from 'react';

function Content(props) {
  return (
    <section id={props.id} className="wrapper--content">
      {props.children}
    </section>
  )
}

export default Content;
