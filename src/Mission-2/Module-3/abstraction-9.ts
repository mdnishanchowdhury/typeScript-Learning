// abstraction, the 3rd pillar of OOP
// interface
// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log('Playing music..')
//     }
//     pause(): void {
//         console.log('Music pause')
//     }
//     stop(): void {
//         console.log('Playing stop')
//     }
// }

// const myPlayer = new MusicPlayer();
// myPlayer.play();



// abstract class

abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
    play(): void {
        console.log('Playing music..')
    }
    pause(): void {
        console.log('Music pause')
    }
    stop(): void {
        console.log('Playing stop')
    }
}

const myPlayer = new MusicPlayer();
myPlayer.play();