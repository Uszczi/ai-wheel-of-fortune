import { DEFAULT_SEGMENTS, DEFAULT_SEGMENTS_STRING } from "@/lib/constants";
import WheelClient from "./WheelClient";

export const dynamic = "force-dynamic";

async function getInitialSegments(
  searchParamsPromise:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | { [key: string]: string | string[] | undefined },
) {
  const searchParams = await searchParamsPromise;

  const encoded = searchParams?.s;

  if (!encoded || typeof encoded !== "string") {
    return {
      segmentsText: DEFAULT_SEGMENTS_STRING,
      segments: DEFAULT_SEGMENTS,
    };
  }

  try {
    const decoded = decodeURIComponent(encoded);
    const lines = decoded.split("\n").filter((line) => line.trim() !== "");
    const segments = lines.map((line) => ({ label: line.trim() }));

    if (segments.length === 0) {
      return {
        segmentsText: DEFAULT_SEGMENTS_STRING,
        segments: DEFAULT_SEGMENTS,
      };
    }

    return { segmentsText: decoded, segments };
  } catch (error) {
    console.error("Failed to decode segments:", error);
    return {
      segmentsText: DEFAULT_SEGMENTS_STRING,
      segments: DEFAULT_SEGMENTS,
    };
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const initialData = await getInitialSegments(searchParams);

  return (
    <WheelClient
      initialSegments={initialData.segments}
      initialText={initialData.segmentsText}
    />
  );
}
