import Link from "next/link";
import { useRouter } from "next/router";

const MobileNavbar = ({setIsOpen }) => {
	const router = useRouter();

	return (
		<div className="absolute z-10 left-0 top-20 bg-[#F9F8F4] flex lg:hidden flex-col items-start justify-start w-full space-y-12 py-6 px-8 text-md font-bold shadow-xl bg-white duration-200">
			<Link href="/" className="nav_items">
				Home
			</Link>
			<Link href="#about" className="nav_items">
				About
			</Link>
			<Link href="#process" className="nav_items">
				Process
			</Link>
			<button className={`border-[0.09rem] border-[#E4E6D9] w-full rounded-[6.25rem] py-3 px-6  text-[#8BA889] text-base font-semibold`}>Get in touch</button>
		</div>
	);
};

export default MobileNavbar;