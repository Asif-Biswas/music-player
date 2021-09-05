
const songList = [
    
    {
        'id': 1,
        'name': 'A new beginning',
        'path': 'audio/bensound-anewbeginning.mp3',
        'img1': 'images/newbeginning1.jpg',
        'img2': 'images/newbeginning2.jpeg',
        'img3': 'images/newbeginning3.jpeg',
    },
    {
        'id': 2,
        'name': 'Creative minds',
        'path': 'audio/bensound-creativeminds.mp3',
        'img1': 'images/cm1.jpg',
        'img2': 'images/cm2.jpg',
        'img3': 'images/cm3.jpeg',
    },
    {
        'id': 3,
        'name': 'Jazzy frenchy',
        'path': 'audio/bensound-jazzyfrenchy.mp3',
        'img1': 'images/jf1.jpg',
        'img2': 'images/jf2.jpg',
        'img3': 'images/jf3.jpg',
    },
    {
        'id': 4,
        'name': 'Little idea',
        'path': 'audio/bensound-littleidea.mp3',
        'img1': 'images/li1.jpg',
        'img2': 'images/li2.jpg',
        'img3': 'images/li3.png',
    },
    {
        'id': 5,
        'name': 'Ukulele',
        'path': 'audio/bensound-ukulele.mp3',
        'img1': 'images/uk1.png',
        'img2': 'images/uk2.png',
        'img3': 'images/uk3.jpg',
    },
    
]

const len = songList.length
let id = 1
//document.getElementById('s').setAttribute('src', songList[0].song01.path) 

document.getElementById('imgsrc').setAttribute('src', songList[id-1].img1)
document.getElementById('totalSong').innerHTML = songList.length
document.getElementById('musicName').innerHTML = songList[0].name

function togglePlayMusic(x){
    if(x === 1){
        document.getElementById('musicId-'+id).play()
        document.getElementById('playButton').className = 'hide'
        document.getElementById('pauseButton').className = ''
    }else{
        document.getElementById('musicId-'+id).pause()
        document.getElementById('playButton').className = ''
        document.getElementById('pauseButton').className = 'hide'
    }
}


for (let i = 0; i < songList.length; i++) {
    const element = songList[i];
    const e = '<div style="padding-top: 12px;"><div style="color: white; font-size: 20px; margin-left: 8px;">'+element.name+'</div><audio id="musicId-'+element.id+'" onclick="playy('+element.id+')" onended="musicEnded()" style="width: 100%;" controls><source id="" src="'+element.path+'" type="audio/mpeg">Your browser does not support the audio element.</audio></div>'
    document.getElementById('songList').innerHTML += e
}

function changeMusic(i){
    document.getElementById('imgsrc').setAttribute('src', songList[i].img1)
        document.getElementById('musicName').innerHTML = songList[i].name
        document.getElementById('playButton').className = 'hide'
        document.getElementById('pauseButton').className = ''
}


function playy(i){
    if(id !== i){
        document.getElementById('musicId-'+id).pause()
        id = i
        //togglePlayMusic(1)
        changeMusic(id-1)
    }
}


function nextMusic(){
    document.getElementById('musicId-'+id).pause()
    if(id === len){
        id = 1
    }else{
        id += 1
    }
    changeMusic(id-1)
    togglePlayMusic(1)
}

function prevMusic(){
    document.getElementById('musicId-'+id).pause()
    if(id === 1){
        id = len
    }else{
        id -= 1
    }
    changeMusic(id-1)
    togglePlayMusic(1)
}

repeat = true
function musicEnded(){
    if(repeat){
        nextMusic()
    }else{
        const rand = songList[Math.floor(Math.random() * songList.length)].id
        if(rand === id){
            nextMusic()
        }else{
            id = rand
            changeMusic(id-1)
            togglePlayMusic(1)
        }
    }
}

function repeatMusic(x){
    if(x === 1){
        repeat = true
        document.getElementById('repeat').className = 'green'
        document.getElementById('shuffle').className = ''
    }else{
        repeat = false
        document.getElementById('repeat').className = ''
        document.getElementById('shuffle').className = 'green'
    }
}

