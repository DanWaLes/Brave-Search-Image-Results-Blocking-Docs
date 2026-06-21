function encodedToRule(str) {
	// can be used on:
	// * images.saatchiart.com by-user
	// * wixmp.com CDN by-user
	// shouldnt be used on:
	// * artlimited.net by-user

	// remove last character
	str = str.substring(0, str.length - 1);

	// insert slashes every 16 characters
	str = str.replace(/.{16}/g, '$&/');

	// add the rule
	return `search.brave.com##.image-result:has(img[src*="/${str}"])`;
}
