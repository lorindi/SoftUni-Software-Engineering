function songs(array) {
  let num = array.shift();
  let word = array.pop();

  for (let el of array) {
    el = el.split("_");

    if (el[0] === word && word != "all") {
      console.log(el[1]);
    } else if (word === "all") {
      console.log(el[1]);
    }
  }
}
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);

// ---------- Solution 2 ----------


function songsCreator(inputArray) {
  const songsCount = inputArray.shift();
  const typeList = inputArray.pop();
  let songs = [];

  class Song {
    constructor(songType, songName, songTime) {
      this.name = songName;
      this.time = songTime;
      this.type = songType;
    }
  }

  for (const songInfo of inputArray) {
    let currentInfo = songInfo.split("_");
    const currentSong = new Song(
      currentInfo[0],
      currentInfo[1],
      currentInfo[2]
    );
    songs.push(currentSong);
  }

  if (typeList === "all") {
    for (const song of songs) {
      console.log(song.name);
    }
  }

  for (const song of songs) {
    if (song.type === typeList) {
      console.log(song.name);
    }
  }
}
