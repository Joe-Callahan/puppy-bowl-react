import { useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  const [selectedPuppy, setSelectedPuppy] = useState({});
  console.log(selectedPuppy);
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
                      onClick={(event) => { setSelectedPuppy(event.target.value) }}>
                      <img
                        src={ singlePuppy.imageUrl }
                        alt={ `image of ${singlePuppy.name}` }
                        className = "homePuppyImage"
                      />
                      {singlePuppy.name}
                    </div>
                  </Link>
                </div>
              </>
            )
          })
        }       
    </>
  )
}

export default HomePage