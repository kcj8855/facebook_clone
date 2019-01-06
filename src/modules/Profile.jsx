import { handleAction, createAction } from 'redux-action'
import { profile } from '../data/index'

const initialState = {
  profile,
}

const GET_PROFILE = 'profile/GET_PROFILE'

export const getProfile = createAction(GET_PROFILE)

export default handleAction({
  [GET_PROFILE]: (state, action) => state.profile
}, initialState)