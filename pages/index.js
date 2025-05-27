import 'semantic-ui-css/semantic.min.css';
import { AuroraBackground } from "../components/ui/aurora-background";
import MenuExampleTabularOnLeft from '../components/menubar';

export default function Home() {
  return (
    <AuroraBackground>
      <h3 className="text-2xl font-bold w-10">Welcome Home</h3>
      <MenuExampleTabularOnLeft />
    </AuroraBackground>
  );
}
