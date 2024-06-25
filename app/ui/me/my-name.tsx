import { playfair } from "@/app/ui/fonts";

export default function MyName({ className }: { className: string }) {
  return (
    <>
      <h1 className="sr-only">Antoine Calma</h1>
      <h1
        className={`${className} text-4xl xl:text-8xl ${playfair.className} relative whitespace-nowrap text-wmauve-11 dark:text-mauve-11`}
      >
        <div className="appear-text relative">
          <span className="letter-weight-animation animation-delay-1">A</span>
          <span className="letter-weight-animation animation-delay-2">n</span>
          <span className="letter-weight-animation animation-delay-3">t</span>
          <span className="letter-weight-animation animation-delay-4">o</span>
          <span className="letter-weight-animation animation-delay-5">i</span>
          <span className="letter-weight-animation animation-delay-6">n</span>
          <span className="letter-weight-animation animation-delay-7">e</span>
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
