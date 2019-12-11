const env = 'development'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'AG0f2RGlQKWej6Dwk3Y0qA',
		APISecret : 'NfPfcyjZe0Xmqa6vVRhp2o3q9x1RLJwwPufC'
	},
	production:{	
		APIKey : '',
		APISecret : ''
	}
};

module.exports = config[env]
