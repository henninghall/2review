import { FC, ReactNode } from "react";
import RnModal from "react-modal";
import { colors } from "./ui/colors";

export const Modal: FC<{
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}> = ({ children, title, isOpen, onClose }) => {
  return (
    <RnModal isOpen={isOpen} onRequestClose={() => onClose()} style={style}>
      <h2>{title}</h2>
      {children}
    </RnModal>
  );
};

const style: RnModal.Styles = {
  overlay: { backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 },
  content: {
    backgroundColor: colors.gray600,
    border: 0,
    boxShadow: "0 2px 4px #000",
    maxWidth: 500,
    width: "80vw",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    gap: 25,
    display: "flex",
    flexDirection: "column",
    padding: "3rem",
    zIndex: 2,
  },
};

RnModal.setAppElement("#root");
