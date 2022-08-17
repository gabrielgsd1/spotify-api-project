export interface SpotifyResult {
  id: string;
  name: string;
  type: SpotifyAPITypes;
  href: string;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyComponentProps {
  // imgUrl: string;
}

export interface SpotifyItems<T> {
  items: Array<T>;
}

export type SpotifyAPITypes = "album" | "artist" | "track";

export interface ImageData {
  height: number;
  width: number;
  url: string;
}

export interface Images {
  images: ImageData[];
}

export type Track = SpotifyResult & {
  duration_ms: number;
  explicit: boolean;
  artists: Artist[];
  album: Album;
  preview_url: string | null;
};

export type Artist = SpotifyResult &
  Images & {
    followers: {
      total: number;
    };
    genres: string[];
  };

export type Album = SpotifyResult &
  Images & {
    album_type: "album" | "single";
    artists: SpotifyResult[];
    release_date: string;
    total_tracks: number;
  };

export type SpotifyAPIResponse = {
  tracks?: SpotifyItems<Track>;
  artists?: SpotifyItems<Artist>;
  albums?: SpotifyItems<Album>;
};

export interface SpotifyResponseEventListener {
  data: SpotifyAPIResponse;
}
