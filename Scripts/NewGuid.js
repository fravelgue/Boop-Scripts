/**
	{
		"api":1,
		"name":"New GUID",
		"description":"Create a new GUID (UUID)",
		"author":"Fran",
		"icon":"fingerprint",
		"tags":"guid,uuid"
	}
**/
const Hashes = require('@boop/hashes')

// https://github.com/IvanMathy/Boop/blob/4015234a765c73a424bef60fdcc98d98059eaa40/Scripts/uuidv4.js
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function main(state) {
    state.text = uuidv4();
}
