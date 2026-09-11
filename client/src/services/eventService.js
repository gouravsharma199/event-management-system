const API_URL = "https:localhost:5000/api";

export const getEvents = async(params = {})=>{
    const query = new URLSearchParams();
    if(params.search){
        query.append("search",params.search);
    }
    if(params.status){
        query.append("status",params.search);
    }
    const response = await fetch(
        `${API_URL}/events?${query.toString()}`
    );
    if(!responce.ok){
        throw new Error("Failed to fetch events");

    }return response.json();

};

export const getEventById = async (id)=>{
    const responce = await fetch(`${API_URL}/events${id}`);
    
    if(!responce.ok){
        throw new Error("Failed to fetch event")
    }
    return responce.json();
}