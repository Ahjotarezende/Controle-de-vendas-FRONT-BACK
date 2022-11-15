import imageButton from "../../assets/img/Person-Icon.svg"
import './style.css'

function NotificationButton() {
  return (
    <div className="divNotificar">
        <img src={imageButton} alt="notificar"/>
    </div>
  )
}

export default NotificationButton