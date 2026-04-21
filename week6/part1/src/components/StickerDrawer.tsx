import { AVAILABLE_STICKERS } from '../store/stickers';
import { Sticker } from './Sticker';

export function StickerDrawer() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow print:hidden">
      {AVAILABLE_STICKERS.map((sticker) => (
        <Sticker key={sticker.id} id={sticker.id} emoji={sticker.emoji} />
      ))}
    </div>
  );
}
