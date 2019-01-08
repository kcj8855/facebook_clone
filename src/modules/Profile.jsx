import { handleActions, createAction } from 'redux-actions'
import { profile } from '../data'

const initialState = {
  profile,
}

const GET_PROFILE = 'profile/GET_PROFILE'

export const getProfile = createAction(GET_PROFILE)

export default handleActions({
  [GET_PROFILE]: (state, action) => state.profile
}, initialState)