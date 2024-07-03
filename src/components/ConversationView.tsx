import { useState } from "react";
import img1 from "../assets/8.jpg";
import img2 from "../assets/6.jpg";
import img3 from "../assets/7.jpg";
import ConversationTile from "./ConversationTile";
import IConversation from "../interfaces/IConversation";

function ConversationView() {
    const [selectedConversations, setSelectedConversations] = useState<number[]>([]);
    const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);
    const [hiddenConversations, setHiddenConversations] = useState<number[]>([]); // État pour gérer les conversations cachées

    const conversationsList: IConversation[] = [
        {
            name: "John Doe",
            msg: "john.doe@gmail.com",
            imgurl: img1,
        },
        {
            name: "Alex Ray",
            msg: "alex.ray@gmail.com",
            imgurl: img2,
        },
        {
            name: "Kate Hunington",
            msg: "kate.hunington@gmail.com",
            imgurl: img3,
        },
    ];

    const handleLongPress = (index: number) => {
        if (!selectedConversations.includes(index)) {
            setSelectedConversations([...selectedConversations, index]);
            setShowCheckboxes(true);
        }
    };

    const handleClick = (index: number) => {
        if (!selectedConversations.includes(index)) {
            setSelectedConversations([...selectedConversations, index]);
        } else {
            setSelectedConversations(selectedConversations.filter((item) => item !== index));
        }

        if (selectedConversations.length === 1 && selectedConversations.includes(index)) {
            setSelectedConversations([]);
            setShowCheckboxes(false);
        } else {
            setShowCheckboxes(true);
        }
    };

    const handleCancelSelection = () => {
        setSelectedConversations([]);
        setShowCheckboxes(false);
    };

    const handleDeleteSelected = () => {
        setHiddenConversations([...hiddenConversations, ...selectedConversations]); // Ajouter les conversations sélectionnées aux conversations cachées
        setSelectedConversations([]);
        setShowCheckboxes(false);
    };

    return (
        <>
            <div className="d-flex row tail">
                <ul className="list-group list-group-lignt">
                    <li
                        className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center  cool`}
                    > Whats'App <div className="icones"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                    </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg></div>
                    </li>
                    {conversationsList.map((item, i) => (
                        <div key={i}>
                            <ConversationTile
                                conversation={item}
                                index={i}
                                onLongPress={handleLongPress}
                                onClick={() => handleClick(i)}
                                selected={selectedConversations.includes(i)}
                                showCheckbox={showCheckboxes}
                                hidden={hiddenConversations.includes(i)} // Passer l'état de visibilité de la conversation
                            />
                        </div>
                    ))}
                </ul>
            </div>
            <div className="boutons">
                {selectedConversations.length > 0 && (
                    <button style={{ margin: "20px" }} onClick={handleCancelSelection}>Annuler</button>
                )}
                {selectedConversations.length > 0 && (
                    <button style={{ margin: "20px" }} onClick={handleDeleteSelected}>Supprimer</button>
                )}
            </div>
        </>
    );
}

export default ConversationView;
