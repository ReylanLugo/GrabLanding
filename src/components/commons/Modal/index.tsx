import React from "react";

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

export default function Modal({children, onClose}: ModalProps) {
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-4 rounded-md"
            >
                {children}
            </div>
        </div>
    );
}