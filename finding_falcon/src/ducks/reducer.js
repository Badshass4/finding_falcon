import {
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_SUCCESS,
  FETCH_VEHICLES_FAILURE,
  FETCH_VEHICLES_SUCCESS,
  SET_VEHICLE_NUM,
  SELECT_PLANETS,
} from "./constants";
// const [destinations, setDestination] = useState([
//   { name: "Donlon", distance: 100 },
//   { name: "Enchai", distance: 200 },
//   { name: "Jebing", distance: 300 },
//   { name: "Sapir", distance: 400 },
//   { name: "Lerbin", distance: 500 },
//   { name: "Pingasor", distance: 600 },
// ]);

// const [vehicles, setVehicles] = useState([
//   { name: "Space pod", total_no: 2, max_distance: 200, speed: 2 },
//   { name: "Space rocket", total_no: 1, max_distance: 300, speed: 4 },
//   { name: "Space shuttle", total_no: 1, max_distance: 400, speed: 5 },
//   { name: "Space ship", total_no: 2, max_distance: 600, speed: 10 },
// ]);
const initialState = {
  planets: [],
  selectedPlanets: [],
  vehicles: [],
  selectedVehicles: [],
  score: 0,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.payload,
      };
    case FETCH_PLANETS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: action.payload,
      };
    case FETCH_VEHICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_VEHICLE_NUM:
      const updatedVehicles = state.vehicles.map((vehicle) => {
        if (vehicle.name === action.payload) {
          vehicle.total_no -= 1;
        }
        return vehicle;
      });
      const selectedVehicles = [...state.selectedVehicles, action.payload];
      return {
        ...state,
        selectedVehicles,
        vehicles: updatedVehicles,
      };
    case SELECT_PLANETS:
      const newPlanet = {
        id: action.payload.slNo,
        name: action.payload.pname,
      };
      let selectedPlanets = state.selectedPlanets;
      const ids = state.selectedPlanets.map((planet)=>{
        return planet.id
      });
      if (state.selectedPlanets.length === 0 || !ids.includes(newPlanet.id)) {
        selectedPlanets.push(newPlanet);
      } else {
        selectedPlanets = state.selectedPlanets.map((planet) => {
          if (planet.id === newPlanet.id) {
            planet.name = newPlanet.name;
          }
          return planet;
        });
      }
      return {
        ...state,
        selectedPlanets,
      };
    default:
      return state;
  }
};

export default reducer;
