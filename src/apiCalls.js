export const fetchResponse = (url) => {
    return fetch(url)
    .then(response => {
        if(!response.ok) {
          console.log('HTTP request unsuccessful');
          throw new Error(`Network Error - status ${response.status} at URL: ${response.url}`)
        } else {
          console.log('HTTP request successful');
        }
        return response;
      })
      .then(response => response.json())
}

export const postData = (reservation) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: "POST",                       
    headers: {                            
    'Content-type': 'application/json'  
    },
    body: JSON.stringify(                   
      {
        name: reservation.name,
        date: reservation.date, 
        time: reservation.time, 
        number: Number(reservation.number)
      }
    )
  })
  .then(response => {
    if (!response.ok) {
        console.log('HTTP POST request unsuccessful');
        throw new Error(`status ${response.status} at URL: ${response.url}`);
    } else {
        console.log('HTTP POST request successful');
    }
    return response;
  })
  .then(response => response.json());
}