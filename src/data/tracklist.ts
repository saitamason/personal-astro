export interface TrackType {
  name: string;
  genre: string;
  length: string;
  url: string;
}

export const tracklist: TrackType[] = [
  {
    name: "Featured Tracks",
    genre: "Various",
    length: "7:13",
    url: "https://soundcloud.com/saitamason/featured-tracks",
  },
  {
    name: "Hug",
    genre: "Electronic",
    length: "4:17",
    url: "https://soundcloud.com/saitamason/hug",
  },
  {
    name: "Shinsaibashi",
    genre: "Hip-Hop Beats",
    length: "3:29",
    url: "https://soundcloud.com/saitamason/shinsaibashi",
  },
  {
    name: "Adaptogen",
    genre: "Dubstep",
    length: "3:30",
    url: "https://soundcloud.com/saitamason/adaptogen",
  },
  {
    name: "Utsettelse",
    genre: "Drum & Bass",
    length: "5:15",
    url: "https://soundcloud.com/saitamason/utsettelse",
  },
];

export default tracklist;
