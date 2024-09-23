interface ActionItemButtonProps {
  onClick?: () => void;
  name: string;
  isDisabled?: boolean;
}

const ActionItemButton = ({
  onClick = () => {},
  name,
  isDisabled = false,
}: ActionItemButtonProps) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
    title={isDisabled ? "No items selected" : ""}
  >
    {name}
  </button>
);

export default ActionItemButton;
