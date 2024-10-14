import Image from "next/image";
import logo from "./../assets/images/logo/logo-white.svg";

export default function Home() {
	
	
	return (
		<div
			className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent"
		>
			<div className="container">
				<img src={logo} className="header-logo w-full"/>
			</div>
		</div>
	);
}
