import { useDroppable } from '@dnd-kit/core';

import { CANVAS_DROP_ZONE_ID } from '../store/stickers';
import type { CanvasProps } from '../types/sticker';

export function Canvas({ children }: CanvasProps) {
  const { setNodeRef, isOver } = useDroppable({ id: CANVAS_DROP_ZONE_ID });

  return (
    <div
      ref={setNodeRef}
      className={`w-full h-80 border-4 border-dashed rounded-3xl flex flex-wrap items-start p-8 transition-colors ${isOver ? 'bg-blue-50 border-blue-400' : 'bg-white border-gray-200'}`}
    >
      {children}
    </div>
  );
}
