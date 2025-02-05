import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Frown, Heart } from "lucide-react";
import { useState } from "react";
import { Countdown } from "./Countdown";
import { Button } from "./ui/button";
import { H1, Large } from "./ui/typography";

export function Question() {
	const [showNoButton, setShowNoButton] = useState(true);
	const [isYesChosen, setIsYesChosen] = useState(false);
	const [hasResponded, setHasResponded] = useLocalStorage('hasResponded', false)

	const onNoConsideration = () => {
		setShowNoButton(false);
	}
	
	const onYesClick = () => {
		const numberOfHearts = 20; // Number of hearts to generate
		for (let i = 0; i < numberOfHearts; i++) {
				const heartContainer = document.createElement("div");
				heartContainer.className = "heart";
				heartContainer.innerHTML = "❤️";
				heartContainer.style.left = `${Math.random() * 95}vw`; // Random horizontal position
				heartContainer.style.animationDelay = `${Math.random() * 2}s`; // Random delay for each heart
				document.body.appendChild(heartContainer);

				setTimeout(() => {
						document.body.removeChild(heartContainer);
				}, 2000);
		}
		setIsYesChosen(true);
		setHasResponded(true);
	};

	if (isYesChosen || hasResponded) {
		return (
			<div className="h-[calc(100vh-57px)] flex justify-center items-center">
				<div className="flex flex-col m-4">
					<div className="flex flex-row justify-center items-center">
						<Heart color="red" size="36"/>
						<H1 className="mx-4">Woohoo!</H1>
						<Heart color="red" size="36"/>
					</div>
					<div className="flex flex-row items-center">
						<Large className="mt-2">I'm glad you said yes! Check back here in a bit for your next surprise!</Large>
					</div>
					<Countdown />
					<div className="flex flex-row justify-center items-center mt-20">
						Here's a flower in the meantime 🌹
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="h-[calc(100vh-57px)] flex justify-center items-center">
			<div className="flex flex-col m-4">
				<div className="flex flex-row items-center">
					<Heart color="red" size="36"/>
					<H1 className="mx-4">Will you be my Valentine?</H1>
					<Heart color="red" size="36"/>
				</div>
				<div className="mt-8 flex gap-4 justify-center">
					{showNoButton && <Button variant={"destructive"} onMouseOver={onNoConsideration} onTouchStart={onNoConsideration} onFocus={onNoConsideration}><Frown /> No</Button>}
					<Button onClick={onYesClick}><Heart /> Yes, of course!</Button>
				</div>
			</div>
		</div>
	)
}