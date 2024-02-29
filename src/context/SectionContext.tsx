import { ReactNode, createContext, useState } from "react";

type ContextValueProps = {
  section: number;
  setSection: (section: number) => void;
};

export const SectionCont = createContext<ContextValueProps | null>(null);

type SectionContextProps = {
  children: ReactNode;
};

const SectionContextProvider = ({ children }: SectionContextProps) => {
  const [section, setSection] = useState(0); // 0, 1, 2, 3

  const contextValue: ContextValueProps = {
    section,
    setSection,
  };

  return (
    <SectionCont.Provider value={contextValue}>
      {children}
    </SectionCont.Provider>
  );
};

export default SectionContextProvider;
