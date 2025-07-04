import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { neutralColors } from "@/theme/palette";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const ColorButton = styled(Button)(() => ({
  color: neutralColors[300],
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
  },
}));

export const FormButton = ({ onClick, children }: Props) => {
  return (
    <ColorButton
      variant="outlined"
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        borderRadius: "11px",
        width: "100%",
        paddingBlock: 2,
        paddingInline: 1,
      }}
    >
      {children}
    </ColorButton>
  );
};
