import { useModal } from "./useModal";
import { Modal } from "./Modal";
import { modals } from "./modals";

export const Modals = () => {
  const [visibleModal, showModal] = useModal();
  return (
    <>
      {Object.entries(modals).map(([id, modal]) => {
        const { title, content: Content } = modal;
        return (
          <Modal
            key={id}
            title={title}
            isOpen={visibleModal === id}
            onClose={() => {
              showModal(undefined);
            }}
          >
            <Content />
          </Modal>
        );
      })}
    </>
  );
};
