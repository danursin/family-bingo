import { Button, Confirm, Grid } from "semantic-ui-react";
import React, { CSSProperties, useState } from "react";

import { BingoCard } from "./types";

interface BingoCellProps {
    card: BingoCard;
    onActivated: (card: BingoCard) => void;
}

const style: React.CSSProperties = {
    cursor: "pointer",
    padding: 0
    // minHeight: 100
};

const buttonStyle: CSSProperties = {
    width: "100%"
};

const BingoCell: React.FC<BingoCellProps> = ({ card, onActivated }) => {
    const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
    return (
        <>
            <Confirm
                open={confirmOpen}
                content={`Did you get "${card.content}?"`}
                onClose={() => setConfirmOpen(false)}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={() => {
                    setConfirmOpen(false);
                    onActivated(card);
                }}
                confirmButton="I DID!"
                cancelButton="Oops, no I didn't"
            />
            <Grid.Column style={style}>
                <Button
                    style={buttonStyle}
                    type="button"
                    basic
                    onClick={() => setConfirmOpen(true)}
                    color={card.activated ? "green" : undefined}
                    disabled={card.activated}
                    content={card.content}
                    icon={card.activated && "check circle"}
                />
            </Grid.Column>
        </>
    );
};

export default BingoCell;
