import { Paper } from "../icons/paper";
import { Rock } from "../icons/rock";
import { Scissors } from "../icons/scissors";

export type RPSselection = "rock" | "paper" | "scissors";

interface RPSButtonProps {
  type: RPSselection;
  selected?: boolean;
  clickable?: boolean;
}

export function RPSButton({
  type,
  selected = false,
  clickable = true,
}: RPSButtonProps) {
  const choice = () => {
    if (type === "rock") {
      return <Rock></Rock>;
    }
    if (type === "paper") {
      return <Paper></Paper>;
    }
    if (type === "scissors") {
      return <Scissors></Scissors>;
    }
  };

  return (
    <>
      <button className="rps-button">{choice()}</button>
    </>
  );
}
