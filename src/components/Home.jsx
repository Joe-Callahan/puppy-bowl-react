import { useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  
  const selectPuppy = (e) => {
    e.preventDefault();
    props.setSelectedPuppy(e.target.value);
  }
  return (
    <>
      <h1>Welcome to The Puppy Bowl!</h1>
        {
          props.allPuppies.map((singlePuppy) => {
            return (
              <>
                <div id="homeContainer">
                  <Link key={singlePuppy.id} to={`/details/${singlePuppy.id}`} />
                    <div className="homePuppyContainer"
                      onClick={(e) => { selectPuppy(e) }}>
                      <img
                        src={ singlePuppy.imageUrl }
                        alt={ `image of ${singlePuppy.name}` }
                        className = "homePuppyImage"
                      />
                      {singlePuppy.name}
                    </div>
                </div>
              </>
            )
          })
        }       
    </>
  )
}

export default HomePage