import { ADD_BLOG, EDIT_BLOG, REMOVE_BLOG } from "../initials/initialActions";
import { blogState } from "../initials/initialStates";

const blogReducer = (state=blogState,action) => {
    switch(action.type){
        case ADD_BLOG:
            return [
                ...state,
                action.blog
            ]
        case REMOVE_BLOG:
            return [
                state.filter(({
                    id
                })=>{return id!==action.id})
            ]
        case EDIT_BLOG:
            return state.map((blog)=>{
                if (blog.id === action.id) {
                    return{
                        ...blog,
                        ...action.updates
                    }
                }else{
                    return blog;
                }
            })
        default:
            return state;
    }
}
export default blogReducer;