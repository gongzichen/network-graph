import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import actions from '@/store/actions/home'

import EdgeToolTips from "@/components/EdgeToolTips";

import { CombinedState } from '@/store/reducers/index'
import { HomeState } from '@/store/reducers/home';
import './index.less';
interface Params {}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Params { }
type Props = PropsWithChildren<RouteComponentProps<Params> & StateProps & DispatchProps>;
function Home(props: Props) {
	return (
		<div>
			<EdgeToolTips  
				x='50'
				y='50'
			/>
		</div>
	)
}



let mapStateToProps = (state: CombinedState): HomeState => state.home;
export default connect(
    mapStateToProps,
    actions
)(Home);