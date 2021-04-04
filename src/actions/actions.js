import AdditionalFeatures from "../components/AdditionalFeatures";

export const NEW_FEATURE = 'NEW_FEATURE';
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const newFeature = (AdditionalFeatures) =>{
    return { 
    type: NEW_FEATURE, payload: AdditionalFeatures
    }
}

export const removeFeature = (feature) =>{
    return{
        type: REMOVE_FEATURE, payload:feature
    }
}