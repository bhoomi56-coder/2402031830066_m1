function Hello({name="Guest", age=18, city="Unknown"}) {
   
  return (
    <div>
      <h1>Hello,{name}!</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  )
}   
export default Hello;