type PodcastVideoEmbedProps = {
  title: string;
  videoId: string;
};

export function PodcastVideoEmbed({ title, videoId }: PodcastVideoEmbedProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-[6px] border border-white/[0.08] bg-black/45">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
