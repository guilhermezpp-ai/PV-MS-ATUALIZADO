import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        className="w-full h-full absolute inset-0 rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setIsLoaded(true)}
      className="relative w-full h-full bg-slate-900 group cursor-pointer overflow-hidden rounded-xl block"
      aria-label={`Reproduzir vídeo: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
        width="1280"
        height="720"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </button>
  );
};

export default YouTubeEmbed;