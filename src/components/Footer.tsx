import { createMemo } from "solid-js";
import { getRandomItem } from "~/lib/utils";

const emojis = ['❤️', '💙', '💗', '💚', '💖', '💓', '🖤', '💛', '🤍', '🫀', '🤎', '🧡', '💜', '🤟', '🫶', '❤️‍🔥', '💻', '💾', '👨‍💻', '🔊', '☕'];

const Footer = () => {
  const emoji = createMemo(() => getRandomItem(emojis));

  return (
    <footer class="flex p-2 text-center justify-center w-full">
      <a class="text-lg md:text-2xl font-bold" href="https://iamnoah.dev" target="_blank" aria-label="Noah Richardson's portfolio, opens in new tab">Made with {emoji()} by Noah Richardson</a>
    </footer>
  );
}

export default Footer;