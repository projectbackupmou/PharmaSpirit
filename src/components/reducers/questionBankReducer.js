//import store from "../../store";
import { GET_QUESTION } from "../actions/types";

const intialState={
    question_list:[
        {id:1,
          name:"Management Question1"
        },
          {id:1,
          name:"Management Question1"
          },
          {id:1,
              name:"Management Question3"
            },
            {id:1,
              name:"Management Question4"
            }
      ]

}

export default function (state=intialState,action){
  switch(action.type){
     case GET_QUESTION:
         return{
             ...state
         }
         default:
             return state
  }
}