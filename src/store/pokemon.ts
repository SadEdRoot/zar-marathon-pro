import {Dispatch} from "redux";
import req from "../utils/request";
import {ITypeRequest} from "../interface/pokemon";
import {IStateRequest} from "../interface";
import {IInitialState} from "./index";

export enum PokemonActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT'
}

interface TypesAction {
  type: PokemonActionTypes
  payload?: string[]
}

export interface IPokemonsInitialState {
  types: IStateRequest<string>
}

type ActionsT = TypesAction;

const initialState: IPokemonsInitialState = {
  types: {
    isLoading: false,
    data: null,
    error: null
  }
}

const pokemons = (state = initialState, action: ActionsT) => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        }
      };
    case PokemonActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        }
      };
    case PokemonActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        }
      };
    default:
        return state
  }
};

export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionsT>,) => {
    dispatch({type: PokemonActionTypes.FETCH_TYPES});
    try {
      const response = await req<ITypeRequest>('getPokemonTypes', {});
      console.log('####: res:', response);
      dispatch({type: PokemonActionTypes.FETCH_TYPES_RESOLVE, payload: response})
    } catch (error) {
      dispatch({type: PokemonActionTypes.FETCH_TYPES_REJECT, payload: error})
    }
  }
}

export default pokemons;
