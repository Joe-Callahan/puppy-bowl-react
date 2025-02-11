const PuppyDetails = (props) => {
 console.log(props.allPuppies);
  return (
    <h1>{props.allPuppies.name}</h1>
  )
}

export default PuppyDetails