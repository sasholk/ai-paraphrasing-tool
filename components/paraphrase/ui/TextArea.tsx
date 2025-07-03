"use client";
import { TextField, InputAdornment } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ArticleIcon from "@mui/icons-material/Article";
import { useParaphraserStore } from "@/stores/paraphraser";
import { FormButton } from "@/components/ui/FormButton";

const SAMPLE =
  "The Border Collie is a highly intelligent and versatile breed known for its exceptional herding abilities. Originating from the border region between England and Scotland, this breed has been recognized as one of the most skilled working dogs in the world. With their distinctive appearance and remarkable intelligence, Border Collies have become a popular choice for both working and companion dogs. \n\n Physically, Border Collies are medium-sized dogs with a well-proportioned body and a strong, agile build. They have a dense double coat that comes in a variety of colors, including black and white, red and white, and tricolor. Their expressive eyes, usually brown but sometimes blue, are one of their most striking features, reflecting their intelligence and eagerness to please. \n\n Known for their boundless energy and drive, Border Collies thrive in an active lifestyle. They require ample exercise and mental stimulation to keep them happy and healthy. These dogs excel in various dog sports, such as agility, obedience, and flyball. They are also frequently used in search and rescue operations due to their exceptional scenting abilities. \n\n Border Collies are highly trainable and eager to learn. Their intelligence and problem-solving skills make them quick learners, and they excel in obedience training. They have a natural instinct for herding, and even without formal training, they can display remarkable herding behaviors. However, their high energy levels and intense focus can sometimes make them challenging for novice dog owners. \n\n In addition to their working abilities, Border Collies make excellent family pets for active households. They are known for their loyalty, affection, and strong bond with their owners. However, their herding instincts may lead them to nip or try to herd small children or other pets, so early socialization and training are crucial. \n\n While Border Collies are generally healthy dogs, they may be prone to certain genetic health conditions such as hip dysplasia and epilepsy. Regular veterinary check-ups, a nutritious diet, and regular exercise are essential for maintaining their overall well-being. \n\n In summary, the Border Collie is a remarkable breed with outstanding intelligence, agility, and herding instincts. Whether as a working dog or a loyal family companion, they bring joy, enthusiasm, and unwavering devotion to their owners.";

export const TextArea = () => {
  const { input, setInput, uiState, setError } = useParaphraserStore();

  if (uiState === "success") return null;

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
    } catch {
      setError("Failed to read clipboard");
    }
  };

  const fillSample = () => setInput(SAMPLE);

  const adornment =
    uiState === "initial" ? (
      <InputAdornment
        position="end"
        sx={{ position: "absolute", right: "50%", transform: "translateX(50%)", gap: 2, maxWidth: 400, width: "100%" }}
      >
        <FormButton onClick={pasteFromClipboard}>
          <ContentPasteIcon />
          Paste text
        </FormButton>

        <FormButton onClick={fillSample}>
          <ArticleIcon />
          Sample text
        </FormButton>
      </InputAdornment>
    ) : null;

  return (
    <TextField
      variant={uiState === "initial" ? "filled" : "outlined"}
      multiline
      rows={8}
      fullWidth
      value={input}
      onChange={e => setInput(e.target.value)}
      placeholder="Enter text here or upload file to humanize it."
      slotProps={{
        input: { endAdornment: adornment },
      }}
    />
  );
};
