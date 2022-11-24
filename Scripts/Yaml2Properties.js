/**
	{
		"api":1,
		"name":"YAML to .properties",
		"description":"Convert YAML to .properties.",
		"author":"fravelgue",
		"icon":"metamorphose",
		"tags":"yaml,yml,properties,convert"
	}
**/

const yaml = require('@boop/js-yaml')


function main(input) {
	try {
		const doc = yaml.loadAll(input.text)
		input.text = propertiesToArray(doc).join("\r\n")		 
	}
	catch(error) {
		input.postError("Invalid YAML file.")
	}
}

//https://stackoverflow.com/a/53620876
function propertiesToArray(obj) {
	const isObject = val =>
      val && typeof val === 'object' && !Array.isArray(val);
  
    const addDelimiter = (a, b) =>
      a ? `${a}.${b}` : b;
  
    const paths = (obj = {}, head = '') => {
      return Object.entries(obj || {})
        .reduce((product, [key, value]) => 
          {
            let fullPath = addDelimiter(head, key)
            return isObject(value) ?
              product.concat(paths(value, fullPath))
            : product.concat(fullPath + "=" + value)
          }, []);
    }
  
    return paths(obj);
}
