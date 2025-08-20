function App() {

  return (
    <div>
      <Force mass = {3} accleration = {4}/>
      <Force mass = {5} accleration = {4}/>
      <Force mass = {2} accleration = {4}/> 
      <Force  mass  = {40} accleration = {2.5}/>
      <Force mass = {10} accleration = {2} /> 
      <Gravity mass = {20} /> 
  )
}

const Force = (props) => {

  return (
    <div>
      F  =  { props.mass } *{props.accleration} = {props.mass*props.accleration} 
      

    </div>
  )
 
 }  
 const Gravity  = (props) => {
  return (
    <div> 
      G  = {props.mass}* {props.mass}  = {props.G}
      </div> 
  )
}
export default App
