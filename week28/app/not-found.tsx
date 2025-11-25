import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
            <h1 className="text-3xl sm:text-4xl font-bold">페이지를 찾을 수 없어요</h1>
            <p className="text-gray-500 text-center">
                요청하신 프로젝트가 존재하지 않거나, 주소가 잘못되었어요.
            </p>
            <Link
                href="/projects"
                className="mt-4 text-blue-600 hover:text-blue-800 underline"
            >
                프로젝트 목록으로 돌아가기
            </Link>
        </div>
    );
}
