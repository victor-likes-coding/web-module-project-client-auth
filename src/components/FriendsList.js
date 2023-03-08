import React, { useEffect, useState } from "react";
import { withAxios } from "../hocs/withAxios";

const FriendsList = () => {
    // use /api/friends to get the list of friends from the API
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await withAxios().get("/friends");
                setFriends(res.data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <div>
            <h2>Friends List</h2>

            {/* here is the list of friends from api */}
            {friends?.map((friend) => (
                <div key={friend.id}>
                    <p>
                        - {friend.name} - {friend.email}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FriendsList;
