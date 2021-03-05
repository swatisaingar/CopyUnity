import * as types from './types';

export function requestBundlesInsertion(data){
    // console.log('insertedata',data)
    return {
        type: types.BUNDLES_REQUEST,
        data
    }
}

export function bundlleInsertionFailed(position) {
    console.log('positioncoming',position)
    return {
        type: types.BUNDLES_FAILED,
        position
    };
}

export function bundlensertionResponse(response) {
    return {
        type: types.BUNDLES_RESPONSE,
        response
    };
}