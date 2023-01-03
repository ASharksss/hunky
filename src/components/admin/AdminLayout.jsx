import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../Header";
import {AdminFooter} from "./AdminFooter";



export const AdminLayout = () => {
	return (
		<div>
			<Header/>
			<Outlet/>
			<AdminFooter/>
		</div>
	);
};
