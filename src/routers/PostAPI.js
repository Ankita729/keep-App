function postData(user,password,notes){
    var url = 'http://localhost:3000/users/';
    var data = {
        id:user,
        password:password,
        notes:notes
    };
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
      }
      export default (postData);
      