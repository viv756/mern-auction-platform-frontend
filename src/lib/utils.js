import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const calculateTimeLeft = (startTime, endTime) => {
  const now = new Date();
  const startDifference = new Date(startTime) - now;
  const endDifference = new Date(endTime) - now;
  let timeLeft = {};

  if (startDifference > 0) {
    timeLeft = {
      type: "Starts In:",
      days: Math.floor(startDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((startDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((startDifference / 1000 / 60) % 60),
      seconds: Math.floor((startDifference / 1000) % 60),
    };
  } else if (endDifference > 0) {
    timeLeft = {
      type: "Ends In:",
      days: Math.floor(endDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((endDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((endDifference / 1000 / 60) % 60),
      seconds: Math.floor((endDifference / 1000) % 60),
    };
  }
  return timeLeft;
};

export const formatTimeLeft = ({ days, hours, minutes, seconds }) => {
  const pad = (num) => String(num).padStart(2, "0");
  return `(${days} Days) ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};
