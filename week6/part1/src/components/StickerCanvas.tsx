import type { StickerId } from '../types/sticker';
import { Canvas } from './Canvas';

type StickerCanvasProps = {
  items: StickerId[];
};

export function StickerCanvas({ items }: StickerCanvasProps) {
  return (
    <div className="flex-1">
      <Canvas>
        {items.length === 0 ? (
          <p className="text-gray-300 font-bold m-auto">Pudota tarroja tähän</p>
        ) : (
          items.map((emoji, idx) => (
            <span key={`${emoji}-${idx}`} className="text-5xl m-2">
              {emoji}
            </span>
          ))
        )}
      </Canvas>
      <p className="text-xs text-gray-400 mt-4 text-center print:hidden">
        Tip: Press Ctrl+P to see the print view.
      </p>
    </div>
  );
}
