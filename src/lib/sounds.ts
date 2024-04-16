import { makeAudio } from "@solid-primitives/audio"
import { createSignal } from "solid-js";
import { SOUNDS } from "~/configs/sounds";
import { getRandomItem } from "~/lib/utils";

export const existingAudio = createSignal<HTMLAudioElement | null>(null);

export const playSound = (name: string, volume: number = 0.3) => {
    const [ea, setExistingAudio] = existingAudio;
    const prevAudio = ea();
    
    if(prevAudio) {
        prevAudio.pause();
        prevAudio.currentTime = 0;
    }

    const newAudio = makeAudio(`/sfx/${name}.mp3`);

    newAudio.volume = volume;
    newAudio.play();

    setExistingAudio(newAudio);
}

export const playRandomSound = () => {
    const sound = getRandomItem(SOUNDS);
    playSound(sound, 1);

    return sound;
}