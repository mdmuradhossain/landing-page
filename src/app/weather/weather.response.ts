export interface WeatherResponse {
  city: {
    name: string;
  };
  list: {
    dt_tx: string;
    main: {
      temp: string;
    };
  }[];
}
