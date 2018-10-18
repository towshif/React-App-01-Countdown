import React from 'react'


const Controls = ({paused, onPausedToggle}) => {
 
//  console.log(paused) 
 return  <div className="field is-grouped is-grouped-centered">    
    <p className="control">
      <button className="button is-danger is-medium is-rounded" disabled={paused} onClick={ onPausedToggle }>
        Pause
      </button>
    </p>
    <p className="control">
     <button className="button is-success is-medium is-rounded" disabled={!paused} onClick={onPausedToggle}>      
        Resume
      </button>
    </p>
  </div>
}

export default Controls