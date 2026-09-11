import { BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'

import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import Checkout from "./pages/Checkout";
import MyBooking from "./pages/MyBooking";
import BookingConfirmation from "./pages/BookingConfirmation";
import AdminEvents from "./pages/AdminEvents";

function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>} />

                <Route 
                path="/events/:id"
                element = {<EventDetail/>}
                 />
                 <Route 
                  path = "/checkout"
                  element = {<Checkout/>}
                 />
                <Route 
                  path = "/booking-confirmed"
                  element = {<BookingConfirmation/>}
                 />
                 <Route 
                  path = "/my-booking"
                  element = {<MyBooking/>}
                 />
                 <Route 
                  path = "/admin/events"
                  element = {<AdminEvents/>}
                 />

            </Routes>

        </BrowserRouter>
    )


}
    

export default App;


