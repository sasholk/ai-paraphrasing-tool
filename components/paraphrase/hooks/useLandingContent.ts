import { useEffect, useState } from "react";
import { getCmsClient } from "@/lib/cms/client";

export const useLandingContent = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const cms = await getCmsClient();
      const content = await cms.getLandingContent();
      setTitle(content.title);
      setSubtitle(content.subtitle);
      setLoading(false);
    })();
  }, []);

  return { title, subtitle, loading };
};
