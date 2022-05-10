import { Button, Grid } from "semantic-ui-react";
import React, { useContext } from "react";

import { AppContext } from "../../components/AppContext";
import { BingoCard } from "./types";
import BingoCell from "./BingoCell";

const Play: React.FC = () => {
    const { items } = useContext(AppContext);

    const rows: BingoCard[][] = [];
    const numRows = Math.sqrt(items.length);
    for (let i = 0; i < numRows; i += 1) {
        const row: BingoCard[] = [];
        for (let j = 0; j < numRows; j += 1) {
            row.push(items[i * numRows + j]);
        }
        rows.push(row);
    }

    const onActivated = (card: BingoCard) => {
        card.activated = true;
    };

    return (
        <Grid columns="equal" celled verticalAlign="middle" textAlign="center">
            {rows.map((row, rowIndex) => (
                <Grid.Row key={rowIndex}>
                    {row.map((col) => (
                        <BingoCell key={col.id} card={col} onActivated={onActivated} />
                    ))}
                </Grid.Row>
            ))}
        </Grid>
    );
};

export default Play;
