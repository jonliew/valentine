
import { targetTime } from '@/constants';
import { useEffect, useState } from 'react';
import { CountdownUnit } from './CountdownUnit';

const targetDate = new Date(targetTime);

function getTimeRemaining(endDate: Date) {
	const total = endDate.getTime() - new Date().getTime();
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));
	return { total, days, hours, minutes, seconds };
}

export function Countdown() {
	const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeRemaining(targetDate));
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='flex flex-row justify-center gap-4 mt-4'>
			<CountdownUnit value={timeLeft.days} label="Days" />
			<CountdownUnit value={timeLeft.hours} label="Hours" />
			<CountdownUnit value={timeLeft.minutes} label="Minutes" />
			<CountdownUnit value={timeLeft.seconds} label="Seconds" />
		</div>
	);
}