import { createContext, useContext, useEffect, useState } from 'react';
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/helpers';

const RoomContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);
  useEffect(() => {
    const RoomListRef = database.ref('rooms');
    RoomListRef.on('value', snap => {
      const data = transformToArrWithId(snap.val());
      setRooms(data);
    });
    return () => {
      RoomListRef.off();
    };
  }, []);
  return <RoomContext.Provider value={rooms}>{children}</RoomContext.Provider>;
};

export const useRooms = () => useContext(RoomContext);
