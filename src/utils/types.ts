type ApiLoading = "idle" | "pending" | "succeeded" | "failed";

export interface AlbumData {
  userId: number;
  id: number;
  title: string;
}

export interface PhotoData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface AlbumsReduxState {
  data: Readonly<AlbumData>[];
  loading: ApiLoading;
  error: string;
}

export interface AlbumReduxState {
  data: Readonly<PhotoData>[];
  loading: ApiLoading;
  error: string;
}

export interface UsersReduxState {
  data: Readonly<UserData>[];
  loading: ApiLoading;
  error: string;
}

export interface FetchAlbumsParams {
  params: Record<"_start" | "_limit", number>;
}

export interface FetchAlbumParams {
  params: Record<"_start" | "_limit" | "albumid", number>;
}

export interface AlbumInfo {
  user: Partial<UserData>;
  album: AlbumData;
}
