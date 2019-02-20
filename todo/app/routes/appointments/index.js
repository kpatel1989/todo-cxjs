import { Section, FlexRow, Repeater, Rescope, Grid, TextField } from "cx/widgets";
import {
    CategoryAxis,
    Chart,
    Column,
    Gridlines,
    LineGraph,
    Marker,
    NumericAxis,
    PieChart,
    PieSlice
} from "cx/charts";
import { Svg, Text } from "cx/svg";

import Controller from "./Controller";
import { KeySelection } from "cx/ui";

export default (
    <cx>
        <h2 putInto="header">All appointments</h2>
        <Rescope bind="$page" controller={Controller}>
            <FlexRow>
                <Grid records:bind='allTodos'
                    style={{width: "100%"}}
                    mod="bordered"
                    lockColumnWidths
                    columns={[
                        {
                            field: 'name',
                            header1: 'Event Name',
                            header2: {
                                allowSorting: false,
                                items: <TextField value:bind="filter.name" reactOn="enter blur" style="width:100%"/>
                            }
                        },
                        {
                            field: 'startsAt',
                            header1: 'Starts At'
                        },
                        {
                            field: 'endsAt',
                            header1: 'Ends At'
                        },
                        {
                            field: 'emails',
                            header1: 'Invites'
                        }
                    ]}
                />
            </FlexRow>
        </Rescope>
    </cx>
);
