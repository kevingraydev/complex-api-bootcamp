let button = document.querySelector("button")
button.addEventListener('click', ()=> {
  var artist = document.querySelector('input').value
  var apikey = 'bus1HqEBgRZKvHEQQqWdMNoQz4xpH9tS'
  var api = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artist}&countryCode=US&apikey=bus1HqEBgRZKvHEQQqWdMNoQz4xpH9tS&sort=date,asc&size=1`
  fetch(api)
  .then(res => res.json())
  .then(response => {
    if (response.page.totalPages < 1) {
      document.querySelector('#show').innerHTML = `There are no upcoming shows for ${artist} currently scheduled.`
      document.querySelector('h2').innerHTML = artist
      document.querySelector("#showDate").innerHTML = null
      document.querySelector('#venueName').innerHTML = null
      document.querySelector('#venueStreet').innerHTML = null //`${city}, ${state}, ${country}`
      document.querySelector('#link').innerHTML = null //'Ticket Url: ' + `<a href=${theUrl}>${theUrl}</a>`
    }else{
      var group = response._embedded.events[0].name
      var concert = response._embedded.events[0]._embedded.venues[0]
      var venue = concert.name
      var date = response._embedded.events[0].dates.start.localDate
      var address = concert.address.line1
      var city = concert.city.name
      var state = concert.state.name
      var country = concert.country.countryCode
      var longitude = concert.location.longitude
      var latitude = concert.location.latitude
      var zipCode = concert.location.postalCode
      var theUrl = response._embedded.events[0].url
      console.log(response._embedded.events[0].url+"")
      // response._embedded.events[0].url
      // _links.first.href
      document.querySelector('h2').innerHTML = artist
      document.querySelector('#show').innerHTML = `Next Concert Event: ${group}`
      document.querySelector("#showDate").innerHTML = date
      document.querySelector('#venueName').innerHTML = venue
      document.querySelector('#venueStreet').innerHTML = `${city}, ${state}, ${country}`
      document.querySelector('#link').innerHTML = 'Ticket Url: ' + `<a href=${theUrl}>${theUrl}</a>`
  fetchResults(venue)

    }


})
});


function fetchResults(query) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${query}`;
  // const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=test`;
  fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const results = data.query.search;
    displayResults(results);
  //
  // .catch(() => console.log('An error occurred'));
})
}

function displayResults(results) {
  // Store a reference to `.searchResults`
  const searchResults = document.querySelector('.searchResults');
  // Remove all child elements
  searchResults.innerHTML = '';

  // Loop over results array
  results.forEach(result => {
   const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);

   searchResults.insertAdjacentHTML('beforeend',
      `<div class="resultItem">
      <h3>More About the Venue:</h3>
        <h4 class="resultItem-title">
          <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
        </h3>
        <span class="resultItem-snippet">${result.snippet}</span><br>
        <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
      </div>`
    );
  });
}
  //
	// Virus-free. www.avast.com


//
// function zomatoStart(){
//   var client = zomato.createClient({
//     userKey: 'b70ac75a6265af512619baee8bcb4d97'
//   });
//
//   client.getGeocode({
//     lat: '-33.8670522', //latitude
//     lon: '151.1957362', //longitude
//     }, function(err, result){
//         if(!err){
//          var jsonContent = JSON.parse(result);
//          console.log(jsonContent.nearby_restaurants[0]);
//         }else {
//           console.log(err);
//         }
//     });
// }


// // .ajax({
// // url: `https://developers.zomato.com/api/v2.1/collections?lat=${latitude}&lon=%20${longitude}`,
// // dataType: 'json',
// // async: true,
// // beforeSend: function(xhr){xhr.setRequestHeader('user-key',
// // 'b70ac75a6265af512619baee8bcb4d97');},  // This inserts the api key into the HTTP header
// // success: function(response) { console.log(response) } });
// // //
// //

// var api2 = `https://developers.zomato.com/api/v2.1/collections?lat=${latitude}&lon=%20${longitude}&X-Zomato-API-Key=b70ac75a6265af512619baee8bcb4d97`
// var api2 = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=50&type=restaurant&keyword=chinese&key=AIzaSyBWePzagGE683AUsSNYPuHMpLj93fztOjc`
// fetch(api2, {mode: 'no-cors'})
// .then(res => res.json()
// .then(response => {
//   console.log(response)
// });

  // document.querySelector('food').innerHTML +="<br>"+ item.title + "<br>"   +"<a href='"+item.title+"'>Google</a>"
// });
// `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=chinese&key=YOUR_API_KEY`
// // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
// // zomato API key: b70ac75a6265af512619baee8bcb4d97
//
//
//

    // var description = document.createTextNode(tempF)
//     // insertTemp.appendChild(text)
//     // insertSummary.appendChild(description)
// })
// });
// //
//
// console.log(response._embedded.events[0]._embedded.venues[0].city.name)
// // let tempC=response.data[0].temp;
// // let tempF=Math.ceil((tempC * 9/5) + 32);
// // insertTemp.innerHTML= tempF + "F"
// // var description = document.createTextNode(tempF)
// // insertTemp.appendChild(text)
// // insertSummary.appendChild(description)
// })
// });
//
// response._embedded.events[0]._embedded.venues[0]. = response
//
// .name: "Choctaw Grand Theater"
// .address.line1: "4418 US-69"
// .city.name: "Durant"
    // .state.name:
// .country.countryCode: "US"
// .location.longitude:
// .location.latitude: ""
// .location.postalCode: "74701"
