debugmode = true

exports.infoMessage = function (str, force) {
	if (config.developerOptions.logOtherMessages == "true" || force == "force" || force == true || debugmode == true) {
  		console.log('\x1b[2m\x1b[36m%s\x1b[0m', "[-] ".concat(str));
  	}
};

exports.successMessage = function (str, force) {
	if (force == "force" || force == true || debugmode == true) {
		console.log('\x1b[2m\x1b[32m%s\x1b[0m', "[*] ".concat(str));
	}
}

exports.warningMessage = function (str, force) {
	if (force == "force" || force == true || debugmode == true) {
		console.log('\x1b[2m\x1b[35m%s\x1b[0m', "[!] ".concat(str));
	}
}

exports.errorMessage = function (str, force) {
	if (force == "force" || force == true || debugmode == true) {
		console.error('\x1b[2m\x1b[31m%s\x1b[0m', "[!] ".concat(str));
	}
}

exports.debugMessage = function (str, force) {
	if (force == "force" || force == true || debugmode == true) {
		console.log('\x1b[2m\x1b[33m%s\x1b[0m', "[#] ".concat(str));
	}
}
