function prime(number) {
	let dividers = 0
	
	for (c = 1; c <= number; c++) {
		if (number % c == 0) {
			dividers ++
		}
	}
		
	if (dividers > 2) {
		return false
	} else {
		return true
	}
}
