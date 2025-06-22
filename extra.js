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
    var calc_type = rng_x();
    if (calc_type == 1){ // addition
        var ans = rng_a + rng_b;
        return ["what is " + rng_a + " plus " + rng_b,ans];
    }
    else if (calc_type == 2){ // subtraction
        var ans = rng_a - rng_b;
        return ["what is " + rng_a + " minus " + rng_b,ans];
    }
    else if (calc_type == 3){ // multiplication
        var ans = rng_a * rng_b;
        return ["what is " + rng_a + " times " + rng_b,ans]
    }
    else if (calc_type == 4){ // division
        var product = rng_a * rng_b;
        var ans = rng_a;
        return ["what is " + product + " divided by " + rng_b,ans]
    }
}