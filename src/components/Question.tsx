import { Frown, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { H1 } from "./ui/typography";

export function Question() {
	const onYesClick = () => {

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
					<Button variant={"destructive"}><Frown /> No</Button>
					<Button onClick={onYesClick}><Heart /> Yes, of course!</Button>
				</div>
			</div>
		</div>
	)
}