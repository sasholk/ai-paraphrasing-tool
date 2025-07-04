export async function paraphraseText(text: string): Promise<string> {
  const res = await fetch("/api/paraphrase", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Unknown error");
  }

  return data.result;
}
