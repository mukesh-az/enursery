const CardImage = ({ url, alt, height, width }) => {

  
  return (
      <img height={height?? "300px"}  width={width?? "100%"} src={url} alt={alt} />
  )
}


export default CardImage