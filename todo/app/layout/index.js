import { Link } from "cx/widgets";
import { ContentPlaceholder } from "cx/ui";
import Controller from "./Controller";

export default (
    <cx>
        <div
            controller={Controller}
            class={{
                layout: true,
                nav: { bind: "layout.aside.open" }
            }}
        >
            <main class="main" onMouseDownCapture="onMainClick">
                <ContentPlaceholder />
            </main>
            <header class="header">
                <i
                    class={{
                        hamburger: true,
                        open: { bind: "layout.aside.open" }
                    }}
                    onClick={(e, { store }) => {
                        store.toggle("layout.aside.open");
                    }}
                />
                <ContentPlaceholder name="header" />
            </header>
            <aside class="aside">
                <h1>Appointments</h1>
                <dl>
                    <dd>
                        <Link href="~/" url-bind="url">
                            Book New Appointment
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/appointments" url-bind="url">
                            Appointments
                        </Link>
                    </dd>
                </dl>
            </aside>
        </div>
    </cx>
);
