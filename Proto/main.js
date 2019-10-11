const Track = function(props) {
	this.name = props.name;
	this.url = props.url;

	// this.playTrack = () => console.log('is playing ', this.name);
};

Track.prototype.playTrack = function () {
	console.log('is playing ', this.name);
};

const YoutubeTrack = function (params) {
	Track.apply(this, arguments);
	this.image = params.image;
};

YoutubeTrack.prototype = Object.create(Track.prototype);
YoutubeTrack.prototype.constructor = YoutubeTrack;
YoutubeTrack.prototype.playTrack = function () {
	console.log('is playing Youtube track', this.name);
};

const track01 = new Track({
	name: 'track01',
	url: 'track01.mp3'
});

const track02 = new Track({
	name: 'track02',
	url: 'track02.mp3'
});

console.log(track01);
console.log(track02);

track01.playTrack();
track02.playTrack();

const youtubeTrack01 = new YoutubeTrack({
	name: 'YoutubeTrack01',
	url: 'YoutubeTrack01.mp3',
	image: 'imageTrack01.jpg'
});

const youtubeTrack02 = new YoutubeTrack({
	name: 'YoutubeTrack02',
	url: 'YoutubeTrack02.mp3',
	image: 'imageTrack02.jpg'
});

console.log(youtubeTrack01);
console.log(youtubeTrack02);
youtubeTrack02.playTrack();
console.log(YoutubeTrack.prototype.constructor);