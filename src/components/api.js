const api = 'http://messenger.westeurope.cloudapp.azure.com/';

// export function postPublicMessage(token, content) {
// 	let url = api + 'api/conversation';	
	
// 	let model = {
// 		content
// 	}

// 	return fetch(url, {
// 		method: "POST",
// 		headers: {

// 			'AUTH':  "",
// 			'content-type': 'application/json'
// 		}
// 	})
// }

// export function getPublicMessenges(from, count) {
// 	let url = api + '/api/conversations/public/messeges?from=$(from)&count=$(count)';

// 	return fetch(url).then(function (response){
// 		if(response.status >= 200 && response.status <= 299)
// 			return  response.json();
// 		else
// 			console.log('error'); 
// 	});
// }



export function signin(login, password) {
	let model = {
        "login": login,
        "password": password,
	}
	console.log('signin() -> model: ', model);

	let url = api + 'api/authentication/signin';
	console.log('signin() -> url: ', url);


	return fetch(url, {
						method: 'POST', 
						headers: { 'Content-Type': 'application/json' }, //T
						body: JSON.stringify(model)
					})
			.then(response => {
				if (response.status >= 200 && response.status <= 299) {
					console.log("signin()->fetch(): response status is ok" );
					return response.json();
				}
				else {
					console.log("signin()->fetch(): response status is NOT ok" );
					console.log("signin()->fetch(): response status = " + response.status );
				}
			})
			.then(json => {
				console.log('signin(): returning json = ' + json)
				return json.token
			});
}

export function signup(login, password, name) {
    let model = {
        "login": login,
        "password": password,
        "name": name,
	};
	
	console.log('signup() -> model: ', model);

    let url = api + 'api/authentication/signup';

    console.log('signup() -> url: ', url);

    return fetch(url, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(model),
					})
			.then(response => {
				if (response.status >= 200 && response.status <= 299) {
					console.log("signup()->fetch(): response status is ok" );
					return response.json();
				} else {
					console.log("signup()->fetch(): response status is NOT ok" );
					console.log("signup()->fetch(): response status = " + response.status );
				}
			})
			.then(json => {
				console.log('signup(): returning json.token = ' + json.token)
				return json.token;
    		});
}
