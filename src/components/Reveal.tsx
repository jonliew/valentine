
import { Heart } from "lucide-react";
import { useState } from "react";
import { H1, P } from "./ui/typography";

export function Reveal() {
	const [counter, setCounter] = useState(0);

	const onHeartClick = () => {
		setCounter((count) => count + 1);		
	};

	if (counter >= 5) {
		return (
			<div className="h-[calc(100vh-57px)] flex justify-center items-center">
				<div className="flex flex-col m-4">
					<div className="flex flex-row justify-center items-center">
						<P>Hmjhp zsijw ymj pnyhmjs zyjsxnq twlfsnejw.</P>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="h-[calc(100vh-57px)] flex justify-center items-center">
			<div className="flex flex-col m-4">
				<div className="flex flex-row items-center">
					<H1 className="mx-4">Click the heart 5 times!</H1>
				</div>
				<div className="mt-8 flex gap-4 justify-center">
					<Heart color="red" fill="red" size="64" onClick={onHeartClick}/>
				</div>
			</div>
		</div>
	)
}