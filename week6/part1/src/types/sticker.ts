import type { ReactNode } from 'react';

export type StickerId = string;

export type StickerItem = {
  id: StickerId;
  emoji: string;
};

export type StickerProps = StickerItem;

export type CanvasProps = {
  children: ReactNode;
};
