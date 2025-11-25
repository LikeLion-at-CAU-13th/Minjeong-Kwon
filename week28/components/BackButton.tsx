"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeftCircle } from "react-icons/fi";

interface BackButtonProps {
    label?: string;
}

export default function BackButton({ label = "프로젝트 목록으로" }: BackButtonProps) {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors gap-x-2"
        >
            <FiArrowLeftCircle />
            {label}
        </button>
    );
}
