import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
    // Import store and actions from Context
    const { store, actions } = useContext(Context);

    return (
        <div className="container text-center">
            <div className="d-flex flex-column aligns-items-center my-5">
                <h3>This is my Django - React Boilerplate</h3>
                <p>Hit the button below to load the users data from Django server</p>
                <button type="button" className="btn btn-primary d-flex align-self-center" onClick={actions.getUser} style={{ width: "fit-content" }}>Hit Api</button>
                <p>See the console to look the data users or use the React complement from Google Chrome. Remember to create a super user or it will be empty</p>
                <p>Add some users with the <a href="/admin/">Admin Page</a> or use the <a href="/api/">API</a> rest framework</p>
                <p>Inspired in <a href="https://github.com/4GeeksAcademy/react-flask-hello" rel="noopener noreferrer" target="_blank">flask-react-hello Boilerplate</a> from 4Geeks Academy and <a href="https://dev.to/nagatodev/how-to-connect-django-to-reactjs-1a71" rel="noopener noreferrer" target="_blank">How to connect Django to ReactJs</a> from Faruq Abdulsalam </p>
                <div className="row justify-content-center">
                {/* show the store vars */}
                    {store.users &&
                        store.users.results.map((item, index) => {
                            return <div className="col-auto" key={index}>
                                <h3>User</h3>
                                <ul className="list-group">
                                    {Object.keys(item).map((attribute, indexAtr) => {
                                        return <li key={indexAtr} className="list-group-item">
                                            {attribute}: {item[attribute]}
                                        </li>;
                                    })}
                                </ul>
                            </div>;
                        })
                    }
                </div>
            </div>
        </div>
    );
};
