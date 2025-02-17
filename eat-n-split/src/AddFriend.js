import { useState } from "react";


export default function AddFriend({ onAddFriend }) {
    const [AddFriend, setAddFriend] = useState(false);
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');



    function handleAddFriend() {
        setAddFriend((F) => F = !F);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !imageUrl) {
            return;
        }

        const newFriend = { id: Math.random(), name: name, image: imageUrl, balance: 0 };

        setName('');
        setImageUrl('');

        onAddFriend(newFriend);
    }

    return (
        <div>
            {AddFriend &&
                <div>
                    <form className="add-form" onSubmit={handleSubmit}>
                        <div>
                            <span> 👯 Friend Name </span>
                            <input type="text" value={name} onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        </div>
                        <div>
                            <span>🌆 Image Url </span>
                            <input type="text" value={imageUrl} onChange={(e) => {
                                setImageUrl(e.target.value);
                            }} />
                        </div>
                        <button> Add </button>
                    </form>
                </div>}
            <button onClick={handleAddFriend}> {AddFriend ? `Close` : `Add Friend`}</button>
        </div>
    );
}
