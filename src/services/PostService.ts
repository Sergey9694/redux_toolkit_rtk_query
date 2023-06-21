import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

export const postAPI = createApi({
    reducerPath: "postAPI", //уникальный ключ, определяющий текущий сервис
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com", //базовый url
    }),
    //тут описываем все эндпоинты на которые отправляем запросы и меняем состояние
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            //number - тип аргумента, который ожидает хук
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit,
                },
            }),
        }), //query для получения данных с сервера, mutation - для их изменения
    }),
});
