import { useState } from "react";


export function FriendsListItem({ friend, onUpdateBalance }) {
    const [isBillSplit, setBillSplit] = useState(false);

    function handleBillSplit() {
        setBillSplit((bs) => bs = !bs);
    }
    return (
        <div>
            <img src={friend.image} alt={friend.name} />
            <span>{friend.balance <= 0 ? `You owe ${friend.name} $${Math.abs(friend.balance)}` : `${friend.name} owes you ${friend.balance}`}</span>
            <button onClick={handleBillSplit}> {isBillSplit ? 'Close' : 'Select'}</button>
            {isBillSplit && <SplitBill onUpdateBalance={onUpdateBalance} friend={friend} />}
        </div>
    );
}

export function SplitBill({ friend, onUpdateBalance }) {
    const [bill, setBill] = useState(0);
    const [myCost, setMyCost] = useState(0);
    const [billPayer, setBillPayer] = useState('You');

    const paidByFriend = bill ? bill - myCost : 0;


    function handleSubmit(e) {
        e.preventDefault();

        if (billPayer === 'You') {
            const updatedFriend = { ...friend, balance: friend.balance + paidByFriend };
            console.log('Updated friend (You paying):', paidByFriend);
            onUpdateBalance(updatedFriend);
        } else {
            const updatedFriend = { ...friend, balance: friend.balance - myCost }
            console.log('Updated friend (Friend paying):', myCost);
            onUpdateBalance(updatedFriend);
        }

        setBill(0);
        setMyCost(0);
        setBillPayer('You');


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3> Split a bill with {friend.name} </h3>
                <div>
                    <span> Bill value </span>
                    <input type="text" value={bill} onChange={(e) => {
                        setBill(Number(e.target.value));
                    }}></input>
                </div>
                <div>
                    <span> Your expense </span>
                    <input type="text" value={myCost} onChange={(e) => {
                        setMyCost(Number(e.target.value));
                    }}></input>
                </div>
                <div>
                    <span> {friend.name}'s expense: </span>
                    <input type="text" readOnly value={bill - myCost}></input>
                </div>
                <label>🤑 Who is paying the bill?
                    <select value={billPayer} onChange={(e) => setBillPayer(e.target.value)}>
                        <option value='You'>You</option>
                        <option value={friend.name}>{friend.name}</option>
                    </select>
                </label>
                <button> Split Bill</button>
            </form>
        </div>
    )
}