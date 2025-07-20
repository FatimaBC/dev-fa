import { useBackgroundStore } from "../store/backgroundStore";
import { HolographicWave } from "./Backgrounds";

function Content() {
  const { backgroundName } = useBackgroundStore();

  return (
    <section className="fixed inset-0 w-full h-full">
      <HolographicWave />
    </section>
  );
}

export default Content;
