import { DndContext } from '@dnd-kit/core';

import { StickerCanvas } from './components/StickerCanvas';
import { StickerDrawer } from './components/StickerDrawer';
import { useStickerBoard } from './store/stickers';

export default function App() {
  const { items, handleDragEnd, loadPreset } = useStickerBoard();

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-12 min-h-screen bg-slate-50 font-sans">
        <div className="bg-zinc-800 text-white p-6 mb-8 rounded-2xl flex justify-between items-center shadow-lg print:hidden">
          <div>
            <h1 className="text-xl font-bold">Sticker Sandbox</h1>
            <p className="text-xs text-gray-400 italic">Drag emojis to the box below</p>
          </div>
          <div className="flex gap-4">
            <button onClick={loadPreset} className="bg-amber-500 px-4 py-2 rounded-lg font-bold">
              Load Preset 📦
            </button>
            <button onClick={() => window.print()} className="bg-blue-600 px-4 py-2 rounded-lg font-bold">
              Print Creation 🖨️
            </button>
          </div>
        </div>

        <div className="flex gap-12 items-start">
          <StickerDrawer />
          <StickerCanvas items={items} />
        </div>
      </div>
    </DndContext>
  );
}