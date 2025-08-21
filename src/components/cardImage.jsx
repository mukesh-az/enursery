const CardImage = ({ text, height, width }) => {

  
  return (
      <img height={height?? "300px"}  width={width?? "100%"} src={`/src/assets/${text}.jpg`} alt={text} />
  )
}


export default CardImage