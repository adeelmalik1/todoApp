import {Types} from '../Constants';

const AddTask = (data) => {
    return {
        type:Types.ADD_TASK,
        payload:data
    }
}
export default AddTask;

export const SelectItems = (taskId) => {
    return {
        type:Types.SELECT,
        id:taskId
    }
}
export const Remove = (taskId) => {
    return {
        type:Types.REMOVE,
        id:taskId
    }
}

export const Clear = () => {
     return {
         type:Types.CLEAR,
     }
}