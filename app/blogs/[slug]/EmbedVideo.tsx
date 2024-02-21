'use client';

import { useEffect, useState } from 'react';

export default function EmbedVideo({ embedId }: { embedId: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <iframe
        title={`video ${embedId}`}
        className="min-h-[12rem] sm:min-h-[15rem] lg:min-h-[18rem] rounded-2xl"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
      />
    </div>
  );
}
