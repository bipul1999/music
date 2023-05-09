const music= document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById('play');
const artist= document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


 let progress = document.getElementById("progress");
 let total_duration= document.getElementById("total_duration");
 let current_Time = document.getElementById("current_Time");
 const progress_div = document.getElementById("progress_div");
const lyrics = [
    {
       name:"music",
       title:"romantic song",   // 00
       artist:"bipul singh",
    },
    {
        name:"hara hara",
        title:"bhakti song",     //01
        artist:"R B singh",
    },
    {
        name:"dr.ji",
       title:"bekar song",      //02
       artist:"apurva singh",
    },
    {
        name:"saawan",
       title:"bekar song",       //03
       artist:"apurva singh",
    },
    {
        name:"murder3",
       title:"sad song",       //04
       artist:"k.k",
    },
    {
        name:"faded",
       title:"tonne",               //05
       artist:"allen walker",
    },
    {
        name:"freinds",               //06
       title:"freindship",
       artist:"marshmellow",
    },
    {
        name:"perfect",               //07
       title:"chil song",
       artist:"ED shirren",
    },
    {
        name:"shape",               //08
       title:"english song",
       artist:"ED sheeran",
    },
    {                           
        name:"on my",            //9
       title:"pubg song",
       artist:"allen bhaiya",
    },
    {
        name:"hale",               //10
       title:"english song",
       artist:"ED sheeran",
    },
    {
        name:"grind",               //11
       title:"rap",
       artist:"emiway bantai",
    },
    {
        name:"mere naina",               //12
       title:"sad song",
       artist:"lata mangeskar",
    },
    {
        name:"ride",               //13
       title:"rap",
       artist:"bantai",
    },
    {
        name:"mohabbat",               //14
       title:"rap",
       artist:"bantai",
    },
    {
        name:"milti",               //15
       title:"rap",
       artist:"bantai",
    },
    {
        name:"no love",               //16
       title:"rap",
       artist:"bantai",
    },
    {
        name:"murder3",               //13
       title:"rap",
       artist:"bantai",
    },
    {
        name:"Aye",               //13
       title:"rap",
       artist:"bantai",
    },
];


  let isPlaying = false;
//   for play function.....
  const playMusic = ()=> {
    isPlaying = true;
    music.play();
   
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
// for pause
 const pauseMusic=()=> {
    isPlaying = false;
    music.pause();
   
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};
play.addEventListener('click',()=> {
    // isPlaying ? pauseMusic():playMusic();
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});
//   changing the music data:
const loadSong = (lyrics) => { 
    title.textContent = lyrics.title;
    artist.textContent = lyrics.artist;
    music.src = "music/" + lyrics.name + ".mp3";
    img.src = "images/" + lyrics.name + ".jpg";

};
    //  loadSong(lyrics[6]);
    //for next button
    SongIndex = 0;
   const nextSong = ()=>{
    SongIndex = (SongIndex+1) % lyrics.length;
    //SongIndex++;
     loadSong(lyrics[SongIndex]);
     playMusic();

   };
   {
   const prevSong = ()=>{
    SongIndex = (SongIndex-1 + lyrics.length) % lyrics.length;
    //SongIndex++;
     loadSong(lyrics[SongIndex]);
     playMusic();
   }
   //progress line
    music.addEventListener("timeupdate",(event)=>{
        // console.log(event);
         const{currentTime, duration} = event.srcElement;
         console.log(currentTime);
         console.log(duration);
         let progress_time =(currentTime / duration) *100;
        //  console.log(progress_time);
         progress.style.width = `${progress_time}%`;
         //music duration update==
         let min_duration=Math.floor(duration /60);
         let sec_duration= Math.floor(duration %60);
        //  console.log(min_duration);
        //  console.log(sec_duration);
         let tot_duration = `${min_duration}:${sec_duration}`;
         total_duration.textContent =`${tot_currentTime}`;
         

    });


    progress_div.addEventListener('click',(event)=>{
        console.log(event);
    })
     //if music end then play next song
    music.addEventListener('ended',nextSong);
   next.addEventListener('click', nextSong);
   prev.addEventListener('click', prevSong);


   }