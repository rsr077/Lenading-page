import profilepic from './assets/th.jpeg'

 function Card() {
  return(
    <div className="card">
      <img className='card-image' src={profilepic} alt="profile picture"></img>
      <h2 className='card-title'>Rajeev Rajput</h2>
      <p className='cart-text'>I make Youtue video and write a code </p>
    </div>
  );
 }

 export default Card