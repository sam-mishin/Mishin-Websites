import { ImageResponse } from "next/og";
import { OgImageContent, ogImageSize, ogImageAlt } from "./lib/og-image";

export const runtime = "edge";
export const size = ogImageSize;
export const contentType = "image/png";
export const alt = ogImageAlt;

export default function Image() {
  return new ImageResponse(<OgImageContent />, { ...ogImageSize });
}
