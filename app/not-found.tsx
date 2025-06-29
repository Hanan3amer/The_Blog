import Link from "next/link";
import { FiAlertCircle } from "react-icons/fi";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center shadow-sm mx-auto w-1/2 my-5 shadow-red-300">
      <FiAlertCircle className="text-7xl font-bold mb-4 text-red-600" />
      <p className="mb-6 text-gray-700">
        Sorry, the page you are looking for not found.
      </p>
      <Link href="/" className="text-gray-600 underline">
        Go back to Blog
      </Link>
    </div>
  );
}
