import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/actionCreators";

const App = () => {
    const { users, isLoading, error } = useAppSelector(
        (state) => state.userReducer
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            {isLoading && <h1>Идет загрузка данных</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users)}
        </div>
    );
};

export default App;
