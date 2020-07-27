import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Demo from "../../components/demo/index";
import Undigraph from "../../components/undigraph/index";

import './index.less';
interface Params {}

interface Params { }
type Props = PropsWithChildren<RouteComponentProps<Params>>;
function Home(props: Props) {
	return (
		<div>
			<Demo />
			<Undigraph />
		</div>
	)
}

export default Home