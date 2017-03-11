import {MAP_STATUS_TO_IMAGE} from "./constants"

const StatusIcon = ({status, className = ''}) => {
	let statusImage = MAP_STATUS_TO_IMAGE[status];

	return (
		<img className={className} src={statusImage}/>
	);
}

export default StatusIcon;

StatusIcon.PropTypes = {
	status: React.PropTypes.string
};