import { getMemberBio } from "@api/info.api";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export function MemberBio({ slug }: { slug: string }) {
  const [bio, setBio] = useState<string>("");

  useEffect(() => {
    (async () => setBio(await getMemberBio(slug)))();
  }, [slug]);

  return <ReactMarkdown>{bio}</ReactMarkdown>;
}