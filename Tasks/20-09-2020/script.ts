
type audioFileType = "wav" | "mp3" | "ogg"
interface audioDataConfig{
    movie:string;
    moiveImage: string;
    starring: string;
    musicDirector: string;
    singers: string;
    audioPath: string;
    audioFile: audioFileType
}

class AudioClass{
    audioDataList :Array<audioDataConfig>
    currentSong: number;
    constructor(){
        this.audioDataList = []
    }

    addSong(audioData: audioDataConfig): void{
        this.audioDataList.push(audioData)
    }

    playSong(): audioDataConfig{
        this.currentSong = 0;
        return this.audioDataList[this.currentSong]
    }

    getPrevious(): audioDataConfig{
        if (this.currentSong === 0){
            this.currentSong = this.audioDataList.length - 1
        }
        else{
            this.currentSong = this.currentSong - 1
        }
        return this.audioDataList[this.currentSong]
    }

    getNext(): audioDataConfig{
        if (this.currentSong === (this.audioDataList.length - 1)){
            this.currentSong = 0
        }
        else{
            this.currentSong = this.currentSong + 1
        }
        return this.audioDataList[this.currentSong]
    }
}
let audioClassObject = new AudioClass()
audioClassObject.addSong({movie:"V", moiveImage:"Images/v-movie.webp", starring:"Nani, Sudheer Babu",
                            musicDirector:"Thaman", singers:"Amit Trivedi", audioPath:"Songs/manasu-maree.mp3"
                            , audioFile: "mp3"
                            });
audioClassObject.addSong({movie:"V", moiveImage:"Images/v-movie.webp", starring:"Nani, Sudheer Babu",
                        musicDirector:"Thaman", singers:"Shravi Yadav", audioPath:"Songs/BabyTouchMeNow.mp3"
                        , audioFile: "mp3"
                        });
audioClassObject.addSong({movie:"V", moiveImage:"Images/v-movie.webp", starring:"Nani, Sudheer Babu",
                        musicDirector:"Thaman", singers:"Yazin Nizar", audioPath:"Songs/RangaRangeli.mp3"
                        , audioFile: "mp3"
                        });
audioClassObject.addSong({movie:"V", moiveImage:"Images/v-movie.webp", starring:"Nani, Sudheer Babu",
                        musicDirector:"Thaman", singers:"Shreya Ghosal", audioPath:"Songs/Vastunna.mp3"
                        , audioFile: "mp3"
                        });

let count = 0;
(<HTMLButtonElement>document.getElementById("play")).addEventListener("click", function(){
    if (count % 2 === 1){
        count += 1
        onPause()
        return
    }
    else if (count !== 0){
        count += 1
        onResume()
        return
    }
    count += 1
    let audioObject = audioClassObject.playSong()
    let row = <HTMLDivElement>document.getElementById("rowId")
    let colDiv = document.createElement("div")
    colDiv.setAttribute("class", "col-sm-12 col-md-5 margin-class2")
    row.appendChild(colDiv);
    let image = document.createElement("img")
    image.setAttribute("id", "imageId")
    image.setAttribute("src", audioObject.moiveImage)
    image.setAttribute("alt", "Album")
    image.setAttribute("width", "450px")
    image.setAttribute("height", "300px")
    colDiv.appendChild(image)

    let table = document.createElement("table")
    table.setAttribute("width", "100%")
    table.setAttribute("style", "margin-top: 5px;margin-bottom: 5px;")
    colDiv.appendChild(table)

    let tr1 = document.createElement("tr")
    table.appendChild(tr1)

    let tr2 = document.createElement("tr")
    table.appendChild(tr2)

    let td1 = document.createElement("td")
    td1.setAttribute("width", "50%")
    td1.setAttribute("id", "value1")
    td1.innerText = "Movie Name: " + audioObject.movie
    tr1.appendChild(td1)

    let td2 = document.createElement("td")
    td2.setAttribute("width", "50%")
    td2.setAttribute("id", "value2")
    td2.innerText = "Starring: " + audioObject.starring
    tr1.appendChild(td2)

    let td3 = document.createElement("td")
    td3.setAttribute("width", "50%")
    td3.setAttribute("id", "value3")
    td3.innerText = "Music Director: " + audioObject.musicDirector 
    tr2.appendChild(td3)

    let td4 = document.createElement("td")
    td4.setAttribute("width", "50%")
    td4.setAttribute("id", "value4")
    td4.innerText = "Singers: " + audioObject.singers
    tr2.appendChild(td4)

    let audio = document.createElement("audio")
    audio.controls = true
    audio.setAttribute("id", "audioId")
    audio.setAttribute("src", audioObject.audioPath)
    audio.setAttribute("style", "margin-left: 50px;")
    audio.autoplay = true
    colDiv.appendChild(audio)
});


function onPause(){
    let audioDiv = <HTMLAudioElement>document.getElementById("audioId")
    audioDiv.pause()

};

function onResume(){
    let audioDiv = <HTMLAudioElement>document.getElementById("audioId")
    audioDiv.play()

};

(<HTMLButtonElement>document.getElementById("previous")).addEventListener("click", function(){
    let audioObject = audioClassObject.getPrevious()
    let image = <HTMLElement>document.getElementById("imageId")
    image.setAttribute("src", audioObject.moiveImage)
    let value1 = <HTMLElement>document.getElementById("value1")
    value1.innerText = "Movie Name: " + audioObject.movie
    let value2 = <HTMLElement>document.getElementById("value2")
    value2.innerText = "Starring: " + audioObject.starring
    let value3 = <HTMLElement>document.getElementById("value3")
    value3.innerText = "Music Director: " + audioObject.musicDirector 
    let value4 = <HTMLElement>document.getElementById("value4")
    value4.innerText = "Singers: " + audioObject.singers
    let audio = <HTMLElement>document.getElementById("audioId")
    audio.setAttribute("src", audioObject.audioPath)

});

(<HTMLButtonElement>document.getElementById("next")).addEventListener("click", function(){
    let audioObject = audioClassObject.getNext()
    let image = <HTMLElement>document.getElementById("imageId")
    image.setAttribute("src", audioObject.moiveImage)
    let value1 = <HTMLElement>document.getElementById("value1")
    value1.innerText = "Movie Name: " + audioObject.movie
    let value2 = <HTMLElement>document.getElementById("value2")
    value2.innerText = "Starring: " + audioObject.starring
    let value3 = <HTMLElement>document.getElementById("value3")
    value3.innerText = "Music Director: " + audioObject.musicDirector 
    let value4 = <HTMLElement>document.getElementById("value4")
    value4.innerText = "Singers: " + audioObject.singers
    let audio = <HTMLElement>document.getElementById("audioId")
    audio.setAttribute("src", audioObject.audioPath)

});



                
        
