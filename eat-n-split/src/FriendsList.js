import { useState } from "react";
import AddFriend from "./AddFriend";
import { initialFriends } from "./App";
import { FriendsListItem } from "./FriendsListItem";


export function FriendsList() {
    const [friends, setFriends] = useState([...initialFriends]);


    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
    }

    function handleUpdateBalance(newFriend) {
        setFriends(friends => friends.map(friend => friend.id === newFriend.id ? { ...friend, balance: newFriend.balance } : friend))
    }


    return (
        <div>
            {friends.map((friend) => (
                <FriendsListItem friend={friend} key={friend.id} onUpdateBalance={handleUpdateBalance} />
            ))}
            <AddFriend onAddFriend={handleAddFriend}></AddFriend>

        </div>
    );
}

