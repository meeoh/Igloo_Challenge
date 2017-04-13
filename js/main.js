// Your code here ...
var client = new ApiGetClient();

var handleSuccess = function(data){     
    //api response function
    var response = JSON.parse(client.response.text).results;    
    var wrapper = $$("div.additionalPeople");    
    response.forEach(function(person) {
        var span = new Element("span", {
            styles: {
                'margin-top': '20px'                
            }
        });
        var img = new Element("img");
        img.setProperty("src", person.picture.large);
        var name = new Element("h3", {
            html: person.name.first + " " + person.name.last
        });
        var email = new Element("p", {
            html: person.email
        });

        img.inject(span)
        name.inject(span)
        email.inject(span)
        wrapper.adopt(span);
    });
}

var loadMore = function () {
    var options = {
        headers: {
            Accept: 'application/json'
        },
        method: 'get',
        queryparams: {
            results: 5
        },
        apibaseurl: 'https://randomuser.me',
        apipath: '/api',
        dataType: 'json',
        isSuccess: handleSuccess
    }
    client.initialize(options);    
}
