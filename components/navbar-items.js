import Link from "next/link";

const NavbarItem = () => {
  return (
    <>
      <Link href={"/"}>
        <a
          href="#"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Мэдээ мэдээлэл
        </a>
      </Link>
      <Link href={"/"}>
        <a
          href="#"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Холбоо барих
        </a>
      </Link>
    </>
  );
};

export default NavbarItem;
