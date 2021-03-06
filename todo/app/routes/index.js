import {Route, Section, Sandbox} from "cx/widgets";
import {FirstVisibleChildLayout} from "cx/ui";

import AppLayout from "../layout";

import Default from "./default";
import Appointments from "./appointments";

export default () => <cx>
    <Sandbox
        key-bind="url"
        storage-bind="pages"
        outerLayout={AppLayout}
        layout={FirstVisibleChildLayout}
    >
        <Route route="~/" url-bind="url">
            <Default/>
        </Route>
        <Route route="~/appointments" url-bind="url">
            <Appointments/>
        </Route>
        <Section title="Page Not Found" mod="card">
            This page doesn't exists. Please check your URL.
        </Section>
    </Sandbox>
</cx>;
