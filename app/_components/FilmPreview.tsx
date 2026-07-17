"use client";

import { Play, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function FilmPreview() {
  const [open, setOpen] = useState(false);
  const videoSrc = process.env.NEXT_PUBLIC_CARE_VIDEO_URL;
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return <>
    <div className="film-frame">
      <img src="/media/care-film-storyboard.png" alt="Storyboard showing warm allied health visits at home and in the community" width="1792" height="1024" loading="lazy" />
      <button className="play-button" type="button" onClick={() => setOpen(true)} aria-label="Open our care film preview"><Play size={28} weight="fill" /></button>
    </div>
    {open && <div className="modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
      <div className="film-modal" role="dialog" aria-modal="true" aria-label="Better Care film preview" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close film"><X size={22} /></button>
        {videoSrc ? <video src={videoSrc} poster="/media/care-film-storyboard.png" controls autoPlay playsInline /> : <img src="/media/care-film-storyboard.png" alt="Production storyboard for the Better Care short film" width="1792" height="1024" />}
        <div className="film-modal-copy">{videoSrc ? "A short look at care delivered around real people, homes and goals." : "Production storyboard. The final short film will replace this preview once filming is complete."}</div>
      </div>
    </div>}
  </>;
}
