// Add the total

export const sum = (data) => {
	let total;

	data &&
		data.reduce((acc, item) => {
			if (item.qty) {
				total = item.qty + acc;
			}

			return total;
		}, 0);
	if (!total) total = 0;
	return total;
};
