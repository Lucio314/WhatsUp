import '../assets/css/conversation.css';
import IConversation from "../interfaces/IConversation";

interface Props {
    conversation: IConversation;
    index: number;
    onLongPress: (index: number) => void;
    onClick: () => void;
    showCheckbox: boolean;
    selected: boolean;
    hidden: boolean; // Nouvelle propriété pour contrôler la visibilité de la conversation
}

function ConversationTile(props: Props) {
    const { conversation, index, onLongPress, onClick, showCheckbox, selected, hidden } = props;

    const handleLongPress = () => {
        onLongPress(index);
    };

    const handleChangeCheckbox = () => {
        onClick();
    };

    return (
        <>
            {!hidden && ( // Vérifie si la conversation doit être affichée
                <li
                    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center  ${selected ? "active" : ""}`}
                    onContextMenu={handleLongPress}

                >
                    <div className="d-flex align-items-center">
                        <img
                            src={conversation.imgurl}
                            alt=""
                            style={{ width: "45px", height: "45px", borderRadius: "50%", marginRight: "10px" }}
                        />
                        <div>
                            <p className="fw-bold mb-1" style={{ fontSize: "16px" }}>{conversation.name}</p>
                            <p className="text-muted mb-0" style={{ fontSize: "14px" }}>{conversation.msg}</p>
                        </div>
                    </div>
                    {showCheckbox && (
                        <input type="checkbox" checked={selected} onChange={handleChangeCheckbox} style={{ marginLeft: "auto" }} />
                    )}
                </li>
            )}
        </>
    );
}

export default ConversationTile;
