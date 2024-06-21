"use client";
import { eventNavItems } from "@/lib/constants";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type EventContextType = {
  activeNavItemIndex: number;
  setActiveNavItemIndex: Dispatch<SetStateAction<number>>;

  activeNavItem: string;
};

const EventContext = createContext({} as EventContextType);
const UPCOMING_INDEX = 0;

export function EventContextProvider({ children }: PropsWithChildren) {
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(UPCOMING_INDEX);
  const activeNavItem = useMemo(
    () => eventNavItems[activeNavItemIndex],
    [activeNavItemIndex]
  );

  return (
    <EventContext.Provider
      value={{ activeNavItemIndex, setActiveNavItemIndex, activeNavItem }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEventContext() {
  const contextValue = useContext(EventContext);

  return contextValue;
}
