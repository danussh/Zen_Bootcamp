var AudioClass = /** @class */ (function () {
    function AudioClass() {
        this.audioDataList = [];
    }
    AudioClass.prototype.addSong = function (audioData) {
        this.audioDataList.push(audioData);
    };
    AudioClass.prototype.playSong = function () {
        this.currentSong = 0;
        return this.audioDataList[this.currentSong];
    };
    AudioClass.prototype.getPrevious = function () {
        if (this.currentSong === 0) {
            this.currentSong = this.audioDataList.length - 1;
        }
        else {
            this.currentSong = this.currentSong - 1;
        }
        return this.audioDataList[this.currentSong];
    };
    AudioClass.prototype.getNext = function () {
        if (this.currentSong === (this.audioDataList.length - 1)) {
            this.currentSong = 0;
        }
        else {
            this.currentSong = this.currentSong + 1;
        }
        return this.audioDataList[this.currentSong];
    };
    return AudioClass;
}());
var audioClassObject = new AudioClass();
audioClassObject.addSong({ movie: "V", moiveImage: "Images/v-movie.webp", starring: "Nani, Sudheer Babu",
    musicDirector: "Thaman", singers: "Amit Trivedi", audioPath: "Songs/manasu-maree.mp3",
    audioFile: "mp3"
});
audioClassObject.addSong({ movie: "V", moiveImage: "Images/v-movie.webp", starring: "Nani, Sudheer Babu",
    musicDirector: "Thaman", singers: "Shravi Yadav", audioPath: "Songs/BabyTouchMeNow.mp3",
    audioFile: "mp3"
});
audioClassObject.addSong({ movie: "V", moiveImage: "Images/v-movie.webp", starring: "Nani, Sudheer Babu",
    musicDirector: "Thaman", singers: "Yazin Nizar", audioPath: "Songs/RangaRangeli.mp3",
    audioFile: "mp3"
});
audioClassObject.addSong({ movie: "V", moiveImage: "Images/v-movie.webp", starring: "Nani, Sudheer Babu",
    musicDirector: "Thaman", singers: "Shreya Ghosal", audioPath: "Songs/Vastunna.mp3",
    audioFile: "mp3"
});
var count = 0;
document.getElementById("play").addEventListener("click", function () {
    if (count % 2 === 1) {
        count += 1;
        onPause();
        return;
    }
    else if (count !== 0) {
        count += 1;
        onResume();
        return;
    }
    count += 1;
    var audioObject = audioClassObject.playSong();
    var row = document.getElementById("rowId");
    var colDiv = document.createElement("div");
    colDiv.setAttribute("class", "col-sm-12 col-md-5 margin-class2");
    row.appendChild(colDiv);
    var image = document.createElement("img");
    image.setAttribute("id", "imageId");
    image.setAttribute("src", audioObject.moiveImage);
    image.setAttribute("alt", "Album");
    image.setAttribute("width", "450px");
    image.setAttribute("height", "300px");
    colDiv.appendChild(image);
    var table = document.createElement("table");
    table.setAttribute("width", "100%");
    table.setAttribute("style", "margin-top: 5px;margin-bottom: 5px;");
    colDiv.appendChild(table);
    var tr1 = document.createElement("tr");
    table.appendChild(tr1);
    var tr2 = document.createElement("tr");
    table.appendChild(tr2);
    var td1 = document.createElement("td");
    td1.setAttribute("width", "50%");
    td1.setAttribute("id", "value1");
    td1.innerText = "Movie Name: " + audioObject.movie;
    tr1.appendChild(td1);
    var td2 = document.createElement("td");
    td2.setAttribute("width", "50%");
    td2.setAttribute("id", "value2");
    td2.innerText = "Starring: " + audioObject.starring;
    tr1.appendChild(td2);
    var td3 = document.createElement("td");
    td3.setAttribute("width", "50%");
    td3.setAttribute("id", "value3");
    td3.innerText = "Music Director: " + audioObject.musicDirector;
    tr2.appendChild(td3);
    var td4 = document.createElement("td");
    td4.setAttribute("width", "50%");
    td4.setAttribute("id", "value4");
    td4.innerText = "Singers: " + audioObject.singers;
    tr2.appendChild(td4);
    var audio = document.createElement("audio");
    audio.controls = true;
    audio.setAttribute("id", "audioId");
    audio.setAttribute("src", audioObject.audioPath);
    audio.setAttribute("style", "margin-left: 50px;");
    audio.autoplay = true;
    colDiv.appendChild(audio);
});
function onPause() {
    var audioDiv = document.getElementById("audioId");
    audioDiv.pause();
}
;
function onResume() {
    var audioDiv = document.getElementById("audioId");
    audioDiv.play();
}
;
document.getElementById("previous").addEventListener("click", function () {
    var audioObject = audioClassObject.getPrevious();
    var image = document.getElementById("imageId");
    image.setAttribute("src", audioObject.moiveImage);
    var value1 = document.getElementById("value1");
    value1.innerText = "Movie Name: " + audioObject.movie;
    var value2 = document.getElementById("value2");
    value2.innerText = "Starring: " + audioObject.starring;
    var value3 = document.getElementById("value3");
    value3.innerText = "Music Director: " + audioObject.musicDirector;
    var value4 = document.getElementById("value4");
    value4.innerText = "Singers: " + audioObject.singers;
    var audio = document.getElementById("audioId");
    audio.setAttribute("src", audioObject.audioPath);
});
document.getElementById("next").addEventListener("click", function () {
    var audioObject = audioClassObject.getNext();
    var image = document.getElementById("imageId");
    image.setAttribute("src", audioObject.moiveImage);
    var value1 = document.getElementById("value1");
    value1.innerText = "Movie Name: " + audioObject.movie;
    var value2 = document.getElementById("value2");
    value2.innerText = "Starring: " + audioObject.starring;
    var value3 = document.getElementById("value3");
    value3.innerText = "Music Director: " + audioObject.musicDirector;
    var value4 = document.getElementById("value4");
    value4.innerText = "Singers: " + audioObject.singers;
    var audio = document.getElementById("audioId");
    audio.setAttribute("src", audioObject.audioPath);
});
