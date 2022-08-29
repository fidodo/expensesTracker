import { useState, useContext} from "react"
import {
    Form as BTForm,
    FormGroup,
    Input,
    Label,
    Col,
    Button
} from "reactstrap"
import { v4 as uuid } from "uuid"

import { ExpenseContext } from "../GlobalState"

export default function Form (){
   // eslint-disable-next-line
    const [state, dispatch] = useContext(ExpenseContext)
    const [name, setName] = useState("");
    const [amount, setAmount]= useState("")

    const handleName = event => {
        console.log ("Name ", event.target.value)
        setName(event.target.value)
    }

    const handleAmount = event => {
        console.log("Amount ", event.target.value);
        setAmount(event.target.value)
    }

    const handleSubmitForm = event => {
        event.preventDefault();
        if (name !== "" && amount > 0) {
            dispatch ({
                type: "ADD_EXPENSE",
                payload: {id: uuid(), name, amount}
            })

            setName("")
            setAmount("")
        } else {
            console.log("Invalid expense name or the amount")
        }
    }
    return (
        <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
            <FormGroup className="row">
                <Label for="exampleEmail" sm={2}>
                    Name of Expense
                </Label>
                <Col sm={4}>
                    <Input type="text" name="name" id="expenseName"
                    placeholder="Name of expense?" value={name} onChange={handleName} />
                </Col>
            </FormGroup>
            <FormGroup className="row">
                <Label for="exampleEmail" sm={2}>
                    Amount
                </Label>
                <Col sm={4}>
                    <Input type="number" name="amount" id="expenseAmount" value={amount} onChange={handleAmount} />
                </Col>
            </FormGroup>
            <Button type="submit" color="primary" >
                Add
            </Button>
        </BTForm>
    )
}