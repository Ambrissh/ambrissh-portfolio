"use client";

import { useState } from "react";

type PodcastVideoEmbedProps = {
  title: string;
  videoId: string;
};

export function PodcastVideoEmbed({ title, videoId }: PodcastVideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-[6px] border border-white/[0.08] bg-black/45">
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer bg-black text-left"
          aria-label={`Play ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-75 transition-opacity duration-200 group-hover:opacity-90"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/15">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-1 h-6 w-6 fill-current"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
