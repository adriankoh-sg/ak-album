export type TImageSize = 'small' | 'medium' | 'large' | 'extralarge' | 'mega';

export type TArtist = {
  name: string;
  mbid: string;
};

export type TAttributes = {
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
};

export type TArtistsChart = {
  artists: {
    artist: TArtist[];
    '@attr': TAttributes;
  };
};

export type TError = Error | SerializedError | string | unknown;

export type TImage = {
  '#text': string;
  size: string;
};

export type TAlbum = {
  name: string;
  playcount: string;
  url: string;
  mbid: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  image: TImage[];
};

export type TTopAlbumResponse = {
  topalbums: {
    album: TAlbum[];
    '@attr': TAttributes;
  };
};

export type TAlbumDetails = {
  album: {
    artist: string;
    image: TImage[];
    listeners: string;
    name: string;
    playcount: string;
    tags: {
      tag: {
        name: string;
        url: string;
      }[];
    };
    tracks: {
      track: {
        duration: string;
        name: string;
      }[];
    };
    url: string;
    wiki: {
      published: string;
      summary: string;
      content: string;
    };
  };
};
