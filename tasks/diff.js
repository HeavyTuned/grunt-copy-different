var path = require('path');
var crypto = require('crypto');
module.exports = function gruntTask(grunt) {
	'use strict';
	
	
	grunt.registerMultiTask('grunt-copy-different', 'A grunt task for compaaring file content and copying diff files into a target directory', function() {
		var options = this.data;
		
		this.files.forEach(function(f){
			var files = f.src;
			var filesToCopy = {};		
			files.forEach(function(singleFile){

				var fileName = path.basename(singleFile);
				if(grunt.file.exists(options.compareWith+fileName)){
					var file1 = grunt.file.read(singleFile);
					var file2 = grunt.file.read(options.compareWith+fileName);
					
					var hash1 = crypto.createHash("md5").update(file1).digest('hex');
					var hash2 = crypto.createHash("md5").update(file2).digest('hex');
					if(hash1 !== hash2){
						filesToCopy[fileName] = file2;
					}
				}
			});

			for(var fileName in filesToCopy){
				var fileContent = filesToCopy[fileName];
				console.log(fileName);
				grunt.file.write(options.destination+fileName, fileContent);
			}
		});
	});
};