import React from "react";

export interface BingoCard {
    id: number;
    content: React.ReactNode;
    activated?: boolean | undefined;
}
