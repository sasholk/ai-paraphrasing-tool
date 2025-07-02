import ParaphraseForm from "@/components/paraphrase/ParaphraseForm";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <ParaphraseForm />
    </Suspense>
  );
}
