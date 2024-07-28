import { playfair } from "@/app/ui/fonts";

export default function MyName({ className }: { className: string }) {
  return (
    <>
      <h1 className="sr-only">Antoine Calma</h1>
      <h1
        className={`${className} ${playfair.className} relative whitespace-nowrap text-4xl text-wmauve-11 sm:text-7xl xl:text-8xl dark:text-mauve-11`}
      >
        <div className="appear-text relative flex w-[296px] justify-between sm:w-[550px] xl:w-[725px]">
          <span className="letter-weight-animation animation-delay-1">A</span>
          <span className="letter-weight-animation animation-delay-2">n</span>
          <span className="letter-weight-animation animation-delay-3">t</span>
          <span className="letter-weight-animation animation-delay-4">o</span>
          <span className="letter-weight-animation animation-delay-5">i</span>
          <span className="letter-weight-animation animation-delay-6">n</span>
          <span className="letter-weight-animation animation-delay-7">e</span>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <span className="letter-weight-animation animation-delay-8">C</span>
          <span className="letter-weight-animation animation-delay-9">a</span>
          <span className="letter-weight-animation animation-delay-10">l</span>
          <span className="letter-weight-animation animation-delay-11">m</span>
          <span className="letter-weight-animation animation-delay-12">a</span>
        </div>
      </h1>
    </>
  );
}
