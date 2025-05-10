import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export const BasicOfMotion = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col gap-5">
        <Button className="rounded-none hover:opacity-80">Girar</Button>
        <motion.div
          //En initial suele ir el background, margen, padding, color, etc
          initial={{
            rotate: "0deg",
          }}
          animate={{
            rotate: "180deg",
          }}
          exit={{
            rotate: "0deg",
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="bg-red-800 size-25"
        ></motion.div>
      </div>
    </div>
  );
};
