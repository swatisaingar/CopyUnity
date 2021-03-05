import { LOGIN_ENABLE_LOADER, LOGIN_DISABLE_LOADER } from './types';

export const enableLoader =() => {
    return {
        type: LOGIN_ENABLE_LOADER,
    }
}
export const disableLoader = () => {
    return {
        type: LOGIN_DISABLE_LOADER,
    }
}