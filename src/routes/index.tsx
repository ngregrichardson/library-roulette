
import { trackEvent } from "@aptabase/web";
import { Title } from "@solidjs/meta";
import { createSignal, onMount } from "solid-js";
import { Portal } from "solid-js/web";
import DifficultyPicker from "~/components/DifficultyPicker";
import Safe from "~/components/Safe";
import Spinner from "~/components/Spinner";
import { DIFFICULTIES } from "~/configs/difficulties";
import { playRandomSound, playSound } from "~/lib/sounds";

const MIN_SPINS = 2;
const MAX_SPINS = 4;
const NUM_CHAMBERS = 6;
const SPIN_TIME = 1;

export default function Home() {
  const [difficulty, setDifficulty] = createSignal(1);
  const [isSpinning, setIsSpinning] = createSignal(false);
  let spinner: HTMLDivElement | undefined;
  let safe: HTMLHeadingElement | undefined;

  const handleChangeDifficulty = (diff: number) => {
    if(difficulty() === diff) return;
    setDifficulty(diff);
    playSound("revcock");
  }

  const handleSafe = () => {
    if(safe) {    
      safe.classList.add("animate-safe");
      safe.classList.remove("hidden");

      setTimeout(() => {
        safe.classList.remove("animate-safe");
        safe.classList.add("hidden");
      }, 600);
    }
  }

  const handleSpin = () => {
    if(spinner) {
      setIsSpinning(true);
      const initialSpins = (Math.floor(Math.random() * (MAX_SPINS - MIN_SPINS + 1)) + MIN_SPINS) * 360;
      const chamberChoice = Math.floor(Math.random() * NUM_CHAMBERS);
      const additionalSpins = (360 / NUM_CHAMBERS) * (chamberChoice + 1);
      const totalSpins = initialSpins + additionalSpins;

      spinner.style.transition = `transform ${SPIN_TIME}s ease-out`;
      spinner.style.transform = `rotateZ(${totalSpins}deg)`;

      setTimeout(() => {
        setIsSpinning(false);
        let sound = "safe";
        if(chamberChoice <= difficulty()) {
          sound = playRandomSound();
        }else {
          handleSafe();
        }

        trackEvent('spin', { difficulty: DIFFICULTIES[difficulty()], sound });

        spinner.style.transition = "none";
        spinner.style.transform = `rotateZ(${additionalSpins}deg)`;
      }, SPIN_TIME * 1000);
    }
  }

  onMount(() => {
    alert("Welcome to Library Roulette! Click or tap the cylinder to spin the chamber and see if you get a sound.\n\nWARNING: DO NOT WEAR HEADPHONES\n\nGood luck!")
  });

  return (
    <>
      <Title>Library Roulette</Title>
      <main class="flex-1 w-full">
        <div class="max-w-3xl m-auto w-full h-full flex items-center justify-center">
          <button class="w-3/4 aspect-square rounded-full" onClick={handleSpin} disabled={isSpinning()} aria-label="Spin the cylinder!">
            <Spinner ref={spinner!} chambers={NUM_CHAMBERS} filled={difficulty() + 1} />
          </button>
        </div>
        <div class="absolute top-3 right-3 flex items-center">
          <DifficultyPicker isDisabled={isSpinning()} difficulty={difficulty()} setDifficulty={handleChangeDifficulty} />
        </div>
      </main>
      <Portal>
        <Safe ref={safe!} />
      </Portal>
    </>
  );
}
