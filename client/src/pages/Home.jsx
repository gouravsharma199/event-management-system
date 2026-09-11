import { useEffect,useState } from "react";

import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import Loading from "../components/Loading";
import { getEvents } from "../services/eventService";
import { useRef } from "react";
import { useFetcher } from "react-router-dom";

function Home(){
    const [events,setEvents] = useState([]);
    const [search,setSearch] = useState("");
    const [loading,setLoadig] = useState("");
    const [error,setError] = useState("");

    const loadEvents = async () =>{
        try{
            setLoadig(true);
            setError("");
            const result = await getEvents({search});
            setEvents(result.data || []);

        }catch (err){
            setError("unable to load events please try again")
        }finally {
            setLoadig(false);
        }
    };

    useEffect(()=>{
        loadEvents ();
    },[]);

    const handleSearch = (e) =>{
        e.preventDefault();
        loadEvents();
    };
    return(
        <>
        <Navbar></Navbar>
        <main>
            <section >
                <div>
                    <Span>Event Discovery</Span>
                </div>
            </section>
        </main>
        </>
    )



}

