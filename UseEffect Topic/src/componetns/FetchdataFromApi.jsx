import React, { useEffect, useState } from "react";
const FetchdataFromApi =  () => {
      const [users, setUsers] = useState([])
    
  useEffect(() => {
    // always fetch data inside useEffects
    // await time liye usko wait
    const fetchdata = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      // api is vari json fun

      // ek bar ma iek fun ek he api call hogyi
      const data = await api.json();
      console.log("API Data =", data )

      setUsers(data);

    };
    // calling 
    fetchdata();
  }, []);

  return <div>

     {
        users.map((user)=><div key = {user.id} style ={{ textAlign:" center" ,backgroundColor :'grey'}}>
         <h1>{user.name}</h1>
         <h3>{user.username}</h3>
         <span>{user.email}</span>
         <p>{user.address.city}</p>
         <p>lat :- {user.address.geo.lat}</p>
         <p>lng :- {user.address.geo.lng}</p>
          
        
        
        </div>)
        

     }
  
  
  </div>;
};

export default FetchdataFromApi;
 