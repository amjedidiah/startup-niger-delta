"use client";
import { eventNavItems } from "@/lib/constants";
import { PropsWithChildren, createContext, useContext, useState } from "react";


type EventContextType = {
  activeNavItem: string;
};

const EventContext = createContext({} as EventContextType);

export function EventContextProvider({ children }: PropsWithChildren) {
  const [activeNavItem, setActiveNavItem] = useState(eventNavItems[0]);

  return (
    <EventContext.Provider value={{ activeNavItem }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventContext() {
  const contextValue = useContext(EventContext);

  return contextValue;
}
