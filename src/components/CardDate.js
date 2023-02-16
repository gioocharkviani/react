function Date(props) {
    const month = props.Date.toLocaleString('en-Us' , {month : 'long'});
    const day = props.Date.toLocaleString('en-Us' , {day : '2-digit'});
    const year = props.Date.getFullYear();
  return (
    <div className='card-item date'> 
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div>
  )
}

export default Date
