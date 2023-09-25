const R = document.getElementById('R')
const L = document.getElementById('L')
const natto = document.getElementById('natto')
const aburage = document.getElementById('aburage')
const rokong = document.getElementById('rokong')
let count = 0
let N = 0
let A = 0
let Ro = 0

function btn () {
    var audio = document.createElement('audio')
        const bark = Math.random()*33
        count +=1
        R.src='media/saga-2.png'
        L.src='media/saga-3.png'
        setTimeout(function(){
         R.src ='media/saga-1.png'
         L.src ='media/saga-4.png'
        },200)
    if (count>5){
        R.classList.toggle('hidden')
        L.classList.toggle('hidden')
        count-=5
    }
    if (bark < 11){
        A +=1
        aburage.innerText = A
        audio.setAttribute('src','media/aburage.mp3')
        audio.play()
    }
    else if (bark < 21){
        N +=1
        natto.innerText = N
        audio.setAttribute('src','media/natogohan.mp3')
        audio.play()
    }
    else if (20 < bark){
        Ro +=1
        rokong.innerText = Ro
        audio.setAttribute('src','media/rokongsojo.mp3')
        audio.play()
    }
}

