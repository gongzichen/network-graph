import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Demo from "../../components/demo/index";

import './index.less';
interface Params {}

interface Params { }
type Props = PropsWithChildren<RouteComponentProps<Params>>;
function Home(props: Props) {
	return (
		<div>
			<Demo />
		</div>
	)
}

export default Home