import profileImage from '../assets/profile-int.png';
import './Profile.css'
const Profile = () => {
  return (
    <div className='contenedor-profile'>
      <img src={profileImage} />
      <p className="text-over-image">Soy Mathew Cordero Aquino, tengo 21 años y soy ingeniero en sistemas. Además, soy desarrollador web con experiencia laboral de 2 años en el sector, con conocimientos en herramientas de frontend.</p>
    </div>
  );
}

export default Profile