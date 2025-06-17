import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 container mx-auto p-10">
      <div>
        <h2 className="heading">EcoShop</h2>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-4">
          <Link href={"/"} className="nav-heading uppercase">
            home
          </Link>
          <Link href={"/"} className="nav-heading uppercase">
            pages
          </Link>
          <Link href={"/"} className="nav-heading uppercase">
            about
          </Link>
          <Link href={"/"} className="nav-heading uppercase">
            designer
          </Link>
          <Link href={"/"} className="nav-heading uppercase">
            store
          </Link>
          <Link href={"/"} className="nav-heading uppercase">
            contact
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Image src={"/user-icon.svg"} alt="person" width={20} height={20} />
          <Image src={"/cart-icon.svg"} alt="person" width={20} height={20} />
          <Image src={"/search-icon.svg"} alt="person" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
