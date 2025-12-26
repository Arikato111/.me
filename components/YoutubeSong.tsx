import { FC, useState } from "react";

const YoutubeSong: FC = () => {
  const darktheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const SongList = darktheme ?
    ["OnkmC5qZqRE", "90Fpjwctqlw", "90Fpjwctqlw", "OJ62RzJkYUo"]
    :
    ["5Z3kPL_UAys", "iB3_NR5bYVc", "UqJkaAnXSWw", "qkZtGDG36kw", "dHDNHIxmBNU", "w6Y_6zrCLFw", "UlmvjbjCLeA"];

  // useState but no setState because it's never used.
  const [randomNumber] = useState(Math.floor(Math.random() * SongList.length));

  return (
    <iframe
      style={{ position: "absolute" }}
      width="0"
      height="0"
      src={`https://www.youtube.com/embed/${SongList[randomNumber]}?autoplay=1&vq=medium&loop=1&controls=0&modestbranding=0&playlist=${SongList[randomNumber]}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

export default YoutubeSong;
