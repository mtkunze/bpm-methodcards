function random_id(size) {
	size = size || 4;
	var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
	var id = "";
	
	while (size--) {
		id += chars[parseInt(Math.random()*chars.length)];
	}
	
	return id;
}

random_id(4);