import { useState } from 'react';
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';

import type { StickerId, StickerItem } from '../types/sticker';

export const CANVAS_DROP_ZONE_ID = 'canvas-area';

export const AVAILABLE_STICKERS: StickerItem[] = [
  { id: '⭐', emoji: '⭐' },
  { id: '🚀', emoji: '🚀' },
  { id: '🔥', emoji: '🔥' },
];

const COMMUNITY_SET: StickerId[] = ['⭐', '💖', '🔥', '🚀'];

function toStickerId(id: UniqueIdentifier): StickerId {
  return String(id);
}

export function useStickerBoard() {
  const [items, setItems] = useState<StickerId[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over?.id === CANVAS_DROP_ZONE_ID) {
      setItems((prev) => [...prev, toStickerId(event.active.id)]);
    }
  };

  const loadPreset = () => {
    setItems(COMMUNITY_SET);
  };

  return {
    items,
    handleDragEnd,
    loadPreset,
  };
}
