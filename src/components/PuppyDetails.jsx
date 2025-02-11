const PuppyDetails = (props) => {
 console.log(props.selectedPuppy);
  return (
    <h1>{props.selectedPuppy.name}</h1>
  )
}

export default PuppyDetails