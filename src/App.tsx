import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/actionCreators";
import PostContainer from "./components/PostContainer";
import "./App.css";

const App = () => {
    // const { users, isLoading, error } = useAppSelector(
    //     (state) => state.userReducer
    // );
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, []);

    return (
        <div>
            {/* {isLoading && <h1>Идет загрузка данных</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users)} */}
            <PostContainer />
        </div>
    );
};

export default App;
