const fetchData = async function(user){
    let data = {};
    var url = ' https://localhost:3000/users/'+user;
    await fetch(url,{
    method:"GET",
    headers:{
        'Content-Type': 'application/json'
      }
})
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            console.log(JSON.stringify(myJson));
            console.log(myJson.id);
            data = myJson;
            console.log(data);
            // return data;
            
 })
 console.log("data here", data);
 
 return data;
}
export default (fetchData);