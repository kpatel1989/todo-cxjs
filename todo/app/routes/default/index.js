import { Section, TextField, Button } from "cx/widgets";
import { LabelsLeftLayout } from "cx/src/ui";
import Controller from "./Controller";

export default (
    <cx>
        <h2 putInto="header">Book a meeting.</h2>
        <Section mod="card" controller={Controller}>
            <div layout={{type: LabelsLeftLayout, columns: 3}}>
                <TextField label="Name of the event" value:bind="todo.name" autoFocus tabOnEnterKey />
                <TextField label="Starts at" value:bind="todo.startsAt" />
                <TextField label="Ends at" value:bind="todo.endsAt" />
                <TextField label="Venue" value:bind="todo.venue"/>
                <TextField label="Description" value:bind="todo.description" placeholder="Type something here..."/>
                <TextField label="Invites" value:bind="todo.emails" tooltip='Add (,) seperated emails'/>
                <Button onClick="saveNote"> Save </Button>
            </div>
        </Section>
    </cx>
);
