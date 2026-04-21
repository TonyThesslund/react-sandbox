import { DndContext, type DragEndEvent } from '@dnd-kit/core';

import { FridgeDoor } from './components/FridgeDoor';
import { WordMagnet } from './components/WordMagnet';
import { useMagnetStore } from './store/useMagnetStore';

function App() {
	const magnets = useMagnetStore((state) => state.magnets);
	const updateMagnet = useMagnetStore((state) => state.updateMagnet);
	const loadExpansionPack = useMagnetStore((state) => state.loadExpansionPack);

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (!over) {
			return;
		}

		if (over.id === 'fridge') {
			const translatedRect = active.rect.current.translated;
			const fridgeRect = over.rect;

			if (!translatedRect) {
				return;
			}

			const nextX = translatedRect.left - fridgeRect.left;
			const nextY = translatedRect.top - fridgeRect.top;

			updateMagnet(String(active.id), {
				status: 'fridge',
				x: nextX,
				y: nextY,
			});
		}
	};

	const bankMagnets = magnets.filter((magnet) => magnet.status === 'bank');
	const fridgeMagnets = magnets.filter((magnet) => magnet.status === 'fridge');

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 p-6">
				<header className="flex items-center justify-between gap-3 print:hidden">
					<h1 className="text-2xl font-bold text-slate-900">Fridge Poetry</h1>
					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={loadExpansionPack}
							className="rounded-md border border-slate-800 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
						>
							Load extra words
						</button>
						<button
							type="button"
							onClick={() => window.print()}
							className="rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-700"
						>
							Print
						</button>
					</div>
				</header>

				<div className="flex items-start gap-6">
					<section className="w-72 shrink-0 rounded-xl border border-slate-300 bg-white p-4 print:hidden">
						<h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
							Word Bank
						</h2>
						<div className="flex flex-wrap gap-2">
							{bankMagnets.map((magnet) => (
								<WordMagnet key={magnet.id} magnet={magnet} />
							))}
						</div>
					</section>

					<section className="min-w-0 flex-1">
						<FridgeDoor>
							{fridgeMagnets.map((magnet) => (
								<WordMagnet key={magnet.id} magnet={magnet} />
							))}
						</FridgeDoor>
					</section>
				</div>
			</main>
		</DndContext>
	);
}

export default App;
