import {TypedUseSelectorHook, useSelector} from "react-redux"
import {TypeReducer} from "../store/reducers"

export const useTypedSelector: TypedUseSelectorHook<TypeReducer> = useSelector