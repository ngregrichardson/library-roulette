import useSound from "use-sound";
import daddySfx from "../../assets/sounds/daddy.mp3";
import fartSfx from "../../assets/sounds/fart.mp3";
import hornSfx from "../../assets/sounds/horn.mp3";
import lazerSfx from "../../assets/sounds/lazer.mp3";
import pingasSfz from "../../assets/sounds/pingas.mp3";

const useRandomSounds = () => {
  const [playDaddy] = useSound(daddySfx, { volume: 1 });
  const [playFart] = useSound(fartSfx, { volume: 1 });
  const [playHorn] = useSound(hornSfx, { volume: 1 });
  const [playLazer] = useSound(lazerSfx, { volume: 1 });
  const [playPingas] = useSound(pingasSfz, { volume: 1 });

  const soundMethods = [playDaddy, playFart, playHorn, playLazer, playPingas];

  const playRandomSound = () => {
    soundMethods[Math.floor(Math.random() * soundMethods.length)]();
  };

  return {
    sounds: soundMethods,
    playRandomSound,
  };
};

export default useRandomSounds;
