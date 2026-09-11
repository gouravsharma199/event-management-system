import {Link} from "react-router-dom";

function EventCard({event}){
    const available = event.capacity-event.booked;
    return(
        <div>
            <img src={event.image || 
            "https://images.unsplash.com"}
            alt={event.name}
            className="event-image"
            />
            <div>
                <span className="">
                    <h3>
                        {event.name}
                    </h3>
                    <P>
                        {event.venue}
                    </P>
                    <p>
                        {
                            new Date(event.date).toLocaleDateString("en-US",{
                                month : "short",
                                day: "2-digit",
                                year: "numeric"
                            })}{ " "}.{" "}
                            {
                                new Date(event.date).toLocaleTimeString("en-US",{
                                    hour : "2-digit",
                                    minute : "2- digit",
                                })
                            }
                    </p>
                    <div>
                        <div>
                            <strong>
                                ${event.price}
                            </strong>
                            <span>
                                / ticket
                            </span>
                        </div>

                        <span>
                            {available > 0 ? `${available} seats left` : "Sold Out"}
                        </span>
                    </div>
                </span>
                <Link>
                to= {
                    `/events/${event._id}`
                }
                </Link>
            </div>
        </div>
    )
}

export default EventCard;