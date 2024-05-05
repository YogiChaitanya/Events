// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEventBtn = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" onClick={onClickEventBtn} className="event-button">
        <img src={imageUrl} className={eventImageClassName} alt="event" />
      </button>
      <p className="dance-name">{name}</p>
      <p className="location-name">{location}</p>
    </li>
  )
}

export default EventItem
