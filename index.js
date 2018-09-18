function Speaker(options) {
    this.givenName = options.givenName;
    this.surname = options.surname;
    this.email = options.email;
    this.biography = options.biography;
    this.date = options.inactiveDate;
    isActive = true;
}

Speaker.prototype.getBiography = function () {
    console.log(this.givenName, this.biography)
}

Speaker.prototype.markInactive = function (date) {
    isActive = false;
}

function KeynoteSpeaker(options) {
    Speaker.call(this, options);
    this.websites = [];
    this.keynoteTopics = [];
    this.breakouts = [];
}

KeynoteSpeaker.prototype = Object.create(Speaker);
KeynoteSpeaker.prototype.constructor = Speaker.prototype; 

function WorkshopSpeaker(options) {
    Speaker.call(this, options);
    this.workshopTopics = []
}
WorkshopSpeaker.prototype = Object.create(Speaker);
WorkshopSpeaker.prototype.constructor = Speaker.prototype; 

const Speaker1 = new Speaker({
    givenName: "Alice",
    surname: "Fredricks",
    email: "fred@fred.com",
    biography: "whatever"
})
const KeynoteSpeaker1 = new KeynoteSpeaker({
    givenName: "James",
    surname: "Alloweouewroiu",
    email: "james@fred.com",
    biography: "whateverEvenMore"
})
const WorkshopSpeaker1 = new WorkshopSpeaker({
    givenName: "Michelle",
    surname: "Carl",
    email: "hereIAm@fred.com",
    biography: "whateverTheMost"
})
console.log(Speaker1)
console.log(KeynoteSpeaker1)
console.log(WorkshopSpeaker1)