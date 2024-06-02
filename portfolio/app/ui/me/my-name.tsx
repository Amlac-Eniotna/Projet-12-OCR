import { playfair } from '@/app/ui/fonts';

export default function MyName({ className }) {
  return (
    <h1
      className={`${className} lg:text-8xl text-4xl ${playfair.className} text-mauve-11 relative overflow-hidden whitespace-nowrap`}
    >
      <div className="relative appear-text">
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
  );
}
