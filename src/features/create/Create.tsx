import { Form, Header, Icon } from "semantic-ui-react";
import React, { useState } from "react";

const numItems = 8;
const Create: React.FC = () => {
    const [items, setItems] = useState<string[]>(new Array(numItems).fill(""));
    const onSubmit = () => {
        console.log("Submitted");
    };

    const onChange = (value: string, index: number) => {
        items[index] = value;
        setItems([...items]);
    };

    return (
        <>
            <Header icon="plus circle" content="Create your own bingo list" subheader={`Fill in ${numItems} values to begin`} />
            <Form onSubmit={onSubmit}>
                {items.map((item, index) => (
                    <Form.Input
                        key={index}
                        value={item}
                        label={`Item ${index + 1}`}
                        icon={<Icon name={item ? "check circle" : "circle outline"} color={item ? "green" : "black"} />}
                        onChange={(e, { value }) => onChange(value, index)}
                        placeholder="FREE unless provided"
                    />
                ))}

                <Form.Button fluid type="submit" content="Save" icon="save" color="blue" />
            </Form>
        </>
    );
};

export default Create;
