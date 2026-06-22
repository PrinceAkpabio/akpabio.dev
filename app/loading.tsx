import PageLoaderElement from "../components/page-loader";

export default function Loading({ onComplete }: { onComplete?: () => void }) {
  return <PageLoaderElement onComplete={onComplete} />;
}
