export const getWeatherDEVMODE = async () => {
  return dummyData;
}

// api doc for api call: https://openweathermap.org/forecast5
export const getWeather = (cityName) => {
  let apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid='+ APIkey;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export const getWeatherOLD = () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=52aef8e7daa5ca4dd4b7b88e3d21d277`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export const getWeatherAt = (long, lat) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${APIkey}&units=metric`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
}

export const getWeatherAtDEV = async (long, lat) => {
  return localDummyData;
}

//Let's delete this when the app is ready :D
const dummyData = {
  city: {
    id: 660129, 
    name: "Espoo", 
    coord: {
      lat: 60.25,
      lon: 24.6667
      }, 
    country: "FI", 
    population: 0,
    sunrise: 1605161633,
    sunset: 1605189439,
    timezone: 7200
    },
  cnt: 40,
  cod: "200",
  list: [
    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },
    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },
    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },
    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 13:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    }
    ],
  message: 0
}

const localDummyData = {
  lat: 60.2,
  lon: 24.83,
  timezone: "Europe/Helsinki",
  timezone_offset: 7200,
  current: {  
    clouds: 75,
    dew_point: 1.63,
    dt: 1606138799,
    feels_like: -0.94,
    humidity: 80,
    pressure: 997,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: 4.78,
    uvi: 0.2,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04n",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 250,
    wind_speed: 5.7,
  },
  daily: [{
    clouds: 81,
    dew_point: 1.53,
    dt: 1606125600,
    feels_like: {
      day: -0.15,
      eve: -0.99,
      morn: 0,
      night: -0.48
    },
    humidity: 77,
    pop: 0.17,
    pressure: 996,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: {
      day: 5.12,
      eve: 4.83,
      max: 5.21,
      min: 4.58,
      morn: 5.21,
      night: 4.67
    },
    uvi: 0.2,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 256,
    wind_speed: 5
  },
  {
    clouds: 81,
    dew_point: 1.53,
    dt: 1606125600,
    feels_like: {
      day: -0.15,
      eve: -0.99,
      morn: 0,
      night: -0.48
    },
    humidity: 77,
    pop: 0.17,
    pressure: 996,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: {
      day: 5.12,
      eve: 4.83,
      max: 5.21,
      min: 4.58,
      morn: 5.21,
      night: 4.67
    },
    uvi: 0.2,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 256,
    wind_speed: 5
  },
  {
    clouds: 81,
    dew_point: 1.53,
    dt: 1606125600,
    feels_like: {
      day: -0.15,
      eve: -0.99,
      morn: 0,
      night: -0.48
    },
    humidity: 77,
    pop: 0.17,
    pressure: 996,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: {
      day: 5.12,
      eve: 4.83,
      max: 5.21,
      min: 4.58,
      morn: 5.21,
      night: 4.67
    },
    uvi: 0.2,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 256,
    wind_speed: 5
  }, {
    clouds: 81,
    dew_point: 1.53,
    dt: 1606125600,
    feels_like: {
      day: -0.15,
      eve: -0.99,
      morn: 0,
      night: -0.48
    },
    humidity: 77,
    pop: 0.17,
    pressure: 996,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: {
      day: 5.12,
      eve: 4.83,
      max: 5.21,
      min: 4.58,
      morn: 5.21,
      night: 4.67
    },
    uvi: 0.2,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 256,
    wind_speed: 5
  }, {
    clouds: 81,
    dew_point: 1.53,
    dt: 1606125600,
    feels_like: {
      day: -0.15,
      eve: -0.99,
      morn: 0,
      night: -0.48
    },
    humidity: 77,
    pop: 0.17,
    pressure: 996,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: {
      day: 5.12,
      eve: 4.83,
      max: 5.21,
      min: 4.58,
      morn: 5.21,
      night: 4.67
    },
    uvi: 0.2,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 256,
    wind_speed: 5
  }, {
    clouds: 81,
    dew_point: 1.53,
    dt: 1606125600,
    feels_like: {
      day: -0.15,
      eve: -0.99,
      morn: 0,
      night: -0.48
    },
    humidity: 77,
    pop: 0.17,
    pressure: 996,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: {
      day: 5.12,
      eve: 4.83,
      max: 5.21,
      min: 4.58,
      morn: 5.21,
      night: 4.67
    },
    uvi: 0.2,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 256,
    wind_speed: 5
  }, {
    clouds: 81,
    dew_point: 1.53,
    dt: 1606125600,
    feels_like: {
      day: -0.15,
      eve: -0.99,
      morn: 0,
      night: -0.48
    },
    humidity: 77,
    pop: 0.17,
    pressure: 996,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: {
      day: 5.12,
      eve: 4.83,
      max: 5.21,
      min: 4.58,
      morn: 5.21,
      night: 4.67
    },
    uvi: 0.2,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 256,
    wind_speed: 5
  }, {
    clouds: 81,
    dew_point: 1.53,
    dt: 1606125600,
    feels_like: {
      day: -0.15,
      eve: -0.99,
      morn: 0,
      night: -0.48
    },
    humidity: 77,
    pop: 0.17,
    pressure: 996,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: {
      day: 5.12,
      eve: 4.83,
      max: 5.21,
      min: 4.58,
      morn: 5.21,
      night: 4.67
    },
    uvi: 0.2,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 256,
    wind_speed: 5
  }, {
    clouds: 81,
    dew_point: 1.53,
    dt: 1606125600,
    feels_like: {
      day: -0.15,
      eve: -0.99,
      morn: 0,
      night: -0.48
    },
    humidity: 77,
    pop: 0.17,
    pressure: 996,
    sunrise: 1606113619,
    sunset: 1606138463,
    temp: {
      day: 5.12,
      eve: 4.83,
      max: 5.21,
      min: 4.58,
      morn: 5.21,
      night: 4.67
    },
    uvi: 0.2,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 256,
    wind_speed: 5
  }],
  hourly: [{
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  },{
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  },{
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  },{
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }, {
    clouds: 75,
    dew_point: 1.63,
    dt: 1606136400,
    feels_like: -0.76,
    humidity: 80,
    pop: 0,
    pressure: 997,
    temp: 4.78,
    visibility: 10000,
    weather: [{
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds"
    }],
    wind_deg: 263,  
    wind_speed: 5.43
  }]
}
