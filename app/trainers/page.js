import GetTrainers from "@/components/sidebar/GetTrainers";
import "../../app/styles/trainer.css";

export default function Trainers() {
  return (
    <div>
      <p className="trainerTitle">Trainers</p>
      <GetTrainers />
    </div>
  );
}
