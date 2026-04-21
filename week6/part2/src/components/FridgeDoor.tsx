import type { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';

interface FridgeDoorProps {
  children?: ReactNode;
}

export function FridgeDoor({ children }: FridgeDoorProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'fridge',
  });

  const fridgeDoorClasses = [
    'relative h-[420px] w-full rounded-xl border-2 bg-slate-100 p-4 transition-colors duration-150',
    isOver ? 'border-emerald-500' : 'border-slate-300',
  ].join(' ');

  return (
    <section ref={setNodeRef} className={fridgeDoorClasses}>
      {children}
    </section>
  );
}
