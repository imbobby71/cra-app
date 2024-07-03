import React from "react";
import CloudApps from "./CloudApps";
import LastNews from "./LastNews";
import Gnb from "./Gnb";

class Wrap extends React.Component {
    render() {
        return (
            React.createElement(
                'div',
                {
                    id: 'wrap',
                },
                [
                    React.createElement(
                        Gnb,
                        null,
                        null
                    ),
                    React.createElement(
                        LastNews,
                        null,
                        null
                    ),
                    React.createElement(
                        CloudApps,
                        null,
                        null
                    )
                ]
            )
        );
    }
}

export default Wrap;
