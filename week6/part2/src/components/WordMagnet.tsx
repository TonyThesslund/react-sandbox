import type { CSSProperties } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import type { Magnet } from '../store/useMagnetStore';

interface WordMagnetProps {
  magnet: Magnet;
}

export function WordMagnet({ magnet }: WordMagnetProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: magnet.id,
  });

  const style: CSSProperties = {
    position: magnet.status === 'fridge' ? 'absolute' : 'relative',
    left: magnet.status === 'fridge' ? magnet.x : undefined,
    top: magnet.status === 'fridge' ? magnet.y : undefined,
    transform: CSS.Translate.toString(transform),
    touchAction: 'none',
    zIndex: isDragging ? 1000 : 1,
  };

  const magnetClasses = [
    'inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-50 px-3 py-1.5 text-sm font-bold text-slate-900',
    isDragging ? 'cursor-grabbing shadow-xl' : 'cursor-grab shadow-sm',
  ].join(' ');

  return (
    <div
      ref={setNodeRef}
      className={magnetClasses}
      style={style}
      {...listeners}
      {...attributes}
    >
      {magnet.word}
    </div>
  );
}
