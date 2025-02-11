import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [allPuppies, setAllPuppies] = useState([]);

  useEffect (() => {
    const getPuppies = async() => {
      const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players');
      const jsonObj = await response.json();
      setAllPuppies(jsonObj.data.players);
    }
    getPuppies();
  }, [])
 
  return (
    <>
      <h1>Welcome to The Puppy Bowl!</h1>
        {
          allPuppies.map((singlePuppy) => {
            return (
              <>
                <div id="homeContainer">
                  <Link key={singlePuppy.id} to={`/${singlePuppy.id}`}>
                    <div className="homePuppyContainer">
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