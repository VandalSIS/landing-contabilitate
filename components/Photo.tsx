import NextImage, { type ImageProps } from "next/image";

export default function Photo({ quality = 90, ...props }: ImageProps) {
  return <NextImage quality={quality} {...props} />;
}
