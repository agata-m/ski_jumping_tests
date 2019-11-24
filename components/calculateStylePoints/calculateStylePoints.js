const calculateStylePoints = (styleNotes) => {

	let minNote = Math.min(...styleNotes);
	let maxNote = Math.max(...styleNotes);
	let calculateStyleNotes = 0;

	for(let i = 0; i < styleNotes.length; i++) {
		calculateStyleNotes = calculateStyleNotes + styleNotes[i];
	} return calculateStyleNotes - (minNote + maxNote);
};

module.exports = calculateStylePoints;