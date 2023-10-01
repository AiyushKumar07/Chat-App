import { usePresence } from '../misc/custom-hooks';
import { Whisper, Tooltip, Badge } from 'rsuite';

const getColor = presence => {
  if (!presence) {
    return 'gray';
  }
  switch (presence.state) {
    case 'online':
      return 'green';
    case 'offline':
      return 'red';
    default:
      return 'gray';
  }
};

const getText = presence => {
  if (!presence) {
    return 'Unknown State';
  }
  return presence.state === 'online'
    ? 'Online'
    : `Last Online ${new Date(presence.last_changed).toLocaleString()}`;
};

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);
  return (
    <Whisper
      placement="top"
      trigger="hover"
      speaker={<Tooltip>{getText(presence)}</Tooltip>}
    >
      <Badge
        className="cursor-pointer"
        style={{ backgroundColor: getColor(presence) }}
      />
    </Whisper>
  );
};

export default PresenceDot;
