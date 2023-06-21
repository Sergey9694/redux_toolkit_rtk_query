import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import { postAPI } from "../services/PostService";

//создан корневой редюсер (можно использовать просто объект)
const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer, //добавляем редюсер сюда - [Путь редюсера]: сам редюсер
});

//функция для конфига redux store, используем configureStore из redux toolkit
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        //добавляем миддлвайр для RTK Query
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware),
    });
};

//Базовые типы для взаимодействия со стором
export type RootState = ReturnType<typeof rootReducer>; //тип состояния, получаем из редюсера
export type AppStore = ReturnType<typeof setupStore>; //тип стора
export type AppDispatch = AppStore["dispatch"]; //тип диспатча, определив тип диспатча нельзя будет задиспатчить те типы, которые не определены
