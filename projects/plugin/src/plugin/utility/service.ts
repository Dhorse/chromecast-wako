

export class service {

    // testpostRequest(){
    //     var request = require('request');

    //     request({
    //     method: 'POST',
    //     url: 'https://private-anon-bd493a9782-trakt.apiary-mock.com/sync/ratings',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer [access_token]',
    //         'trakt-api-version': '2',
    //         'trakt-api-key': '[client_id]'
    //     },
    //     body: "{  \"movies\": [    {      \"rated_at\": \"2014-09-01T09:10:11.000Z\",      \"rating\": 5,      \"title\": \"Batman Begins\",      \"year\": 2005,      \"ids\": {        \"trakt\": 1,        \"slug\": \"batman-begins-2005\",        \"imdb\": \"tt0372784\",        \"tmdb\": 272      }    },    {      \"rating\": 10,      \"ids\": {        \"imdb\": \"tt0000111\"      }    }  ],  \"shows\": [    {      \"rating\": 10,      \"title\": \"Breaking Bad\",      \"year\": 2008,      \"ids\": {        \"trakt\": 1,        \"slug\": \"breaking-bad\",        \"tvdb\": 81189,        \"imdb\": \"tt0903747\",        \"tmdb\": 1396      }    },    {      \"title\": \"The Walking Dead\",      \"year\": 2010,      \"ids\": {        \"trakt\": 2,        \"slug\": \"the-walking-dead\",        \"tvdb\": 153021,        \"imdb\": \"tt1520211\",        \"tmdb\": 1402      },      \"seasons\": [        {          \"rating\": 9,          \"number\": 3        }      ]    },    {      \"title\": \"Mad Men\",      \"year\": 2007,      \"ids\": {        \"trakt\": 4,        \"slug\": \"mad-men\",        \"tvdb\": 80337,        \"imdb\": \"tt0804503\",        \"tmdb\": 1104      },      \"seasons\": [        {          \"number\": 1,          \"episodes\": [            {              \"rating\": 8,              \"number\": 1            },            {              \"rating\": 8,              \"number\": 2            }          ]        }      ]    }  ],  \"seasons\": [    {      \"rating\": 10,      \"ids\": {        \"trakt\": 140912,        \"tvdb\": 703353,        \"tmdb\": 81266      }    }  ],  \"episodes\": [    {      \"rating\": 7,      \"ids\": {        \"trakt\": 1061,        \"tvdb\": 1555111,        \"imdb\": \"tt007404\",        \"tmdb\": 422183      }    }  ]}"
    //     }, function (error, response, body) {
    //     console.log('Status:', response.statusCode);
    //     console.log('Headers:', JSON.stringify(response.headers));
    //     console.log('Response:', body);
    //     });
    // }

    // sendRequest(type, url, headers, body){
    //     var request = require('request');

    //     request({
    //     method: type,
    //     url: url,
    //     headers: headers,
    //     body: body, 
    //     function (error, response, body) {
    //         console.log('Status:', response.statusCode);
    //         console.log('Headers:', JSON.stringify(response.headers));
    //         console.log('Response:', body);
    //     });
    // }

    // function httpCall(method: string, url:string, data:any, callback:(result:any)=>any) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open(method, url, true);
    //     if (callback) xhr.onload = function() { callback(JSON.parse(this['responseText'])); };
    //     if (data != null) {
    //         xhr.setRequestHeader('Content-Type', 'application/json');
    //         xhr.send(JSON.stringify(data));
    //     }
    //     else xhr.send();
    // }
    
}

