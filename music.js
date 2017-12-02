

function Library (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

function Playlist(name){
    this.name = name;
    this.tracks = [];
}

function Track (name, rating , timeLength) {
    this.title = name;
    this.rating = rating;
    this.timeLength = timeLength;
}



Library.prototype.addPlaylist = function(Playlist){
  this.playlists.push(Playlist.name);
}





Playlist.prototype.addSong = function(Track){
      this.tracks.push(Track);
}





Playlist.prototype.overallRating = function(){
  let overallRating = 0 ;
  this.tracks.forEach(track => {
    overallRating += track.rating;
  });
  let result = overallRating / this.tracks.length;
  return result;
}





Playlist.prototype.totalDuration = function(){
  let totalDuration = 0;
  this.tracks.forEach((track) => {
    totalDuration += track.timeLength;
  });
    return totalDuration;
}





const music = new Library("booty jams", "Reid");
const myTunes = new Playlist("myTunes");
const newmix = new Playlist("new Mix");
const mySong = new Track("boom boom" , 5, 400);
const moreSong = new Track("space odity", 5 , 900);
const badSong = new Track("Blue daba", 1 , 1010010);


music.addPlaylist(myTunes);
music.addPlaylist(newmix);
myTunes.addSong(mySong);
myTunes.addSong(moreSong);
myTunes.addSong(badSong);

console.log("library name: ", music);
console.log("duration: ", myTunes.totalDuration() );
console.log("over all rating " , myTunes.overallRating());
