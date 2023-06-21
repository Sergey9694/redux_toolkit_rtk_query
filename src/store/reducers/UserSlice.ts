import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./actionCreators";

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

    //тут создаем функции внутри которых как-то изменяем состояние
    reducers: {},
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled.type]: (
            state,
            action: PayloadAction<IUser[]>
        ) => {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

//Можно отдельно вытащить отдельно редюсер и отдельно экшн креэйторы
export default userSlice.reducer;
