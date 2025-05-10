import { ModeToggle } from "@/components/mode-toggle";
import { BasicOfMotion } from "@/modules/home/components/BasicOfMotion";

export const Hero = () => {
  return (
    <section id="hero" className="w-full max-w-2xl mx-auto px-4 py-10 h-full">
      <div className="flex gap-3 justify-center items-center">
        <h1 className="text-2xl text-center font-bold">Hello World </h1>
        <ModeToggle />
      </div>
      <BasicOfMotion />
    </section>
  );
};
