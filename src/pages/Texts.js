import React from 'react';
import TriangleBackground from '../components/TrianguloBG';
import Menu from '../components/Menu';
function Texts() {
  return (

    <div id="wrap">
     <Menu />
      <div className='portada'>
      <h1>Vakzthar Echoes</h1>
      <h3>Here, you will find a collection of untold stories, poetry, and reflections—where thoughts become echoes. Created by Vakzthar over different moments in time, these words capture fleeting emotions, unfinished ideas, and fragments of imagined worlds, waiting to be discovered.</h3>
      </div>
      <TriangleBackground />
    </div>
  );
}

export default Texts;