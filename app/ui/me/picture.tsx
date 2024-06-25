import Image from 'next/image';

export default function Picture({ className }: { className: string }) {
  return (
    <Image
      src="/me.jpg"
      width={480}
      height={480}
      className={`${className} rounded-full`}
      alt="Antoine Calma"
    />
  );
}
