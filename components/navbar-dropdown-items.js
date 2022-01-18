import {
  AcademicCapIcon,
  VolumeUpIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const NavbarDropdownItem = () => {
  return (
    <>
      <Link href={"/"}>
        <a
          href=""
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
        >
          <AcademicCapIcon className="flex-shrink-0 h-6 w-6 text-[#1d4290]" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">
              Япон хэлний сургалт
            </p>
            {/* <p className="mt-1 text-sm text-gray-500">japan helnii surgalt</p> */}
          </div>
        </a>
      </Link>
      <Link href={"/"}>
        <a
          href=""
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
        >
          <CollectionIcon className="flex-shrink-0 h-6 w-6 text-[#1d4290]" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">
              Япон дахь хэлний бэлтгэлийн сургуулиуд
            </p>
          </div>
        </a>
      </Link>
      <Link href={"/"}>
        <a
          href=""
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
        >
          <VolumeUpIcon className="flex-shrink-0 h-6 w-6 text-[#1d4290]" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">
              Минна Но Нихонго 1 CD сонсгол
            </p>
          </div>
        </a>
      </Link>
      <Link href={"/"}>
        <a
          href=""
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
        >
          <VolumeUpIcon className="flex-shrink-0 h-6 w-6 text-[#1d4290]" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">
              Минна Но Нихонго 2 CD сонсгол
            </p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default NavbarDropdownItem;
