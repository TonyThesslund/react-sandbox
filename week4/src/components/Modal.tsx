import type { ReactNode } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
			onClick={onClose}
		>
			<div
				className="bg-white p-8 rounded-2xl shadow-xl w-96 relative"
				onClick={(e) => e.stopPropagation()}
			>
				{children}
				<button
					type="button"
					onClick={onClose}
					className="mt-6 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;
