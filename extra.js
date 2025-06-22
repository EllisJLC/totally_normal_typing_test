function randomMath() {
    function rng_x (){ // choose calculation type
		return Math.floor(Math.random() * Math.floor(5));
	}
    function rng_a (){ // pick variable a
        return Math.floor(Math.random() * Math.floor(9));
    } 
    function rng_b (){ // pick variable b
        return Math.floor(Math.random() * Math.floor(9));
    } 
    var calc_type = parseInt(rng_x());
    if (calc_type == 1){ // addition
        var a = parseInt(rng_a);
        var b = parseInt(rng_b);
        var ans = parseInt(a + b);
        return ["what is " + a + " plus " + b,ans];
    }
    else if (calc_type == 2){ // subtraction
        var a = parseInt(rng_a);
        var b = parseInt(rng_b);
        var ans = parseInt(a - b);
        return ["what is " + a + " minus " + b,ans];
    }
    else if (calc_type == 3){ // multiplication
        var a = parseInt(rng_a);
        var b = parseInt(rng_b);
        var ans = parseInt(a * b);
        return ["what is " + a + " times " + b,ans]
    }
    else if (calc_type == 4){ // division
        var a = parseInt(rng_a);
        var b = parseInt(rng_b);
        var product = parseInt(a * b);
        return ["what is " + product + " divided by " + b,a]
    }
}