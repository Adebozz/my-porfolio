import NavBar from "../components/NavBar";
import { AuroraBackground } from "../components/ui/aurora-background";
import { motion } from "framer-motion";

export default function Home() {
  return (
    
    <AuroraBackground>
      <NavBar />
      <div className="pt-32 px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-gray-200"
        >
          Welcome Home 
        </motion.h3>
      </div>
    </AuroraBackground>
  );
}
