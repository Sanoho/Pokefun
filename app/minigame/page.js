import MemoryGame from "@/components/sidebar/MemoryGame";
import "../styles/memory.css";

export default function Memory() {
  return (
    <div>
      <h1 className="goal">Match the cards!</h1>
      <MemoryGame />
    </div>
  );
}
