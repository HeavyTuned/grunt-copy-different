# grunt-copy-different
[![license][license-image]][license-url]
[![node][node-image]][node-url]

[node-image]:https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]:https://nodejs.org/download/

[license-image]:https://img.shields.io/github/license/JCMais/node-libcurl.svg?style=flat-square
[license-url]:https://raw.githubusercontent.com/JCMais/node-libcurl/develop/LICENSE-MIT
A grunt task for compaaring file content and copying diff files into a target directory

## Install
```npm install grunt-copy-different --save```


### Config
```javascript

grunt-copy-different: {
	default: {
		files: [
			{src:"html/build/*"}
		],
		compareWith: "html/buildTemp/",
		destination: "html/buildIncrement/"
	}
}

```

### function
	The Tasks searches for every file in the files array and checks if it finds the same filename in the compareWith directory. Then it hashes the file content of both files (md5) and copies every different file into the destination dir.s