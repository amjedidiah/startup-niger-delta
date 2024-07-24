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
import Swiper from "swiper";

type EventContextType = {
  activeNavItemIndex: number;
  setActiveNavItemIndex: Dispatch<SetStateAction<number>>;

  activeNavItem: string;

  swiperInstance?: Swiper;
  setSwiperInstance: Dispatch<SetStateAction<Swiper | undefined>>;

  firstPastEventIndex?: number;
  setFirstPastEventIndex: Dispatch<SetStateAction<number | undefined>>;
};

const EventContext = createContext({} as EventContextType);
const UPCOMING_INDEX = 0;

export function EventContextProvider({ children }: PropsWithChildren) {
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(UPCOMING_INDEX);
  const activeNavItem = useMemo(
    () => eventNavItems[activeNavItemIndex],
    [activeNavItemIndex]
  );
  const [swiperInstance, setSwiperInstance] = useState<Swiper>();
  const [firstPastEventIndex, setFirstPastEventIndex] = useState<number>();

  return (
    <EventContext.Provider
      value={{
        activeNavItemIndex,
        setActiveNavItemIndex,
        activeNavItem,
        swiperInstance,
        setSwiperInstance,
        firstPastEventIndex,
        setFirstPastEventIndex,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEventContext() {
  const contextValue = useContext(EventContext);

  return contextValue;
}
