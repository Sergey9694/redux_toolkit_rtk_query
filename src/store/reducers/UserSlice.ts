import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: true,
    error: "",
};

// В redux toolkit редюсеры наз слайсами

export const userSlice = createSlice({
    name: "user", //уникальное название должно быть у каждого слайса
    initialState, //сюда - дефолтное значение состояния
    reducers: {},
});

//Можно отдельно вытащить отдельно редюсер и отдельно экшн креэйторы
export default userSlice.reducer;
