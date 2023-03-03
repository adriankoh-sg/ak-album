export type TImageSize = 'small' | 'medium' | 'large' | 'extralarge' | 'mega';

export type TArtist = {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: { '#text': string; size: TImageSize }[];
};

export type TArtistsChart = {
  artists: {
    artist: TArtist[];
    '@attr': {
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
};

export type TError = {
  status: boolean;
  msg: string;
};
