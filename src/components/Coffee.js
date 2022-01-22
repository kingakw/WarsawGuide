import React from 'react';

const Coffee = () =>  {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Coffee</h2>
        </main>
    );
}
export default Coffee;


/*import { getPlaces } from "../components/Places/data";
export default function Invoices() {
    let invoices = getPlaces();
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div style={{ display: "flex" }}>
            <nav>
                {invoices.map(invoice => (
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : ""
                                };
                            }}
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </NavLink>
                    ))}
            </nav>
            <Outlet />
        </div>
    );
}*/


/*
import React, { useEffect } from 'react';

const Detail = () => {
    useEffect(() => {
        document.title = 'Detail';
    });
    return (
        <div>
            <p>Info</p>
        </div>
    );
};
export default Detail;
*/

