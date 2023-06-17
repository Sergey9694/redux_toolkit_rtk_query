import { combineReducers, configureStore } from "@reduxjs/toolkit";

//создан корневой редюсер (можно использовать просто объект)
const rootReducer = combineReducers({});

//функция для конфига redux store, используем configureStore из redux toolkit
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

//Базовые типы для взаимодействия со стором
export type RootState = ReturnType<typeof rootReducer>; //тип состояния, получаем из редюсера
export type AppStore = ReturnType<typeof setupStore>; //тип стора
export type AppDispatch = AppStore["dispatch"]; //тип диспатча, определив тип диспатча нельзя будет задиспатчить те типы, которые не определены
