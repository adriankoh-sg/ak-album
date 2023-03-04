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
