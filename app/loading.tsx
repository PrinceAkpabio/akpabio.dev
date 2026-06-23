import PageLoaderElement from "@/components/sections/page-loader";

export default function Loading({ onComplete }: { onComplete?: () => void }) {
  return <PageLoaderElement onComplete={onComplete} />;
}
