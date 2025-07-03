import dynamic from "next/dynamic";

const Paraphraser = dynamic(() => import("@/components/paraphrase/ParaphraserRoot"));

export default function Home() {
  return <Paraphraser />;
}
