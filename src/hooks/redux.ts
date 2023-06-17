import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

// по сути обычный useDispatch только с типизацией
export const useAppDispatch = () => useDispatch<AppDispatch>();
// по сути обычный useSelector только с типизацией
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
