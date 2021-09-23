import React from 'react';

import { AddChannel } from '../assets';

// rafce
const TeamChannelList = ({ children, error = false, loading, type }) => {
	if (error) {
		return type === 'team' ? (
			<div className="team-channel-list">
				<p className="team-channel-list__message">
					Connection error, please wait a moment and try again.
				</p>
			</div>
		) : null;
	}

	if (loading) {
		return (
			<div className="team-channel-list">
				<p className="team-channel-list__message loading">
					{type === 'team' ? 'Channels' : 'Messages'} loading ...
				</p>
			</div>
		);
	}

	return (
		<div className="team-channel-list">
			<div className="team-channel-list__header">
				<div className="team-channel-list__header"></div>
			</div>
		</div>
	);
};

export default TeamChannelList;